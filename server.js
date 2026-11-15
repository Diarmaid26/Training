const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Yahoo Finance proxy — avoids CORS issues on the client
// Yahoo now requires a crumb + cookie for authenticated requests
let yfSession = null;

async function getYahooSession() {
  if (yfSession && Date.now() - yfSession.ts < 30 * 60 * 1000) return yfSession;

  const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

  // Step 1: hit the consent page to get A1 cookie
  const r1 = await fetch('https://fc.yahoo.com/', { headers: { 'User-Agent': UA }, redirect: 'follow' });
  const rawCookies = r1.headers.getSetCookie?.() || [];
  const cookieStr = rawCookies.map(c => c.split(';')[0]).join('; ');

  // Step 2: get crumb
  const r2 = await fetch('https://query2.finance.yahoo.com/v1/test/getcrumb', {
    headers: { 'User-Agent': UA, Cookie: cookieStr },
  });
  const crumb = await r2.text();

  yfSession = { crumb: crumb.trim(), cookieStr, ts: Date.now() };
  return yfSession;
}

async function yahooFetch(url) {
  const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    // Try with crumb first, fall back without if session fails
    let session;
    try { session = await getYahooSession(); } catch (_) { /* proceed without crumb */ }

    const sep = url.includes('?') ? '&' : '?';
    const finalUrl = session?.crumb ? `${url}${sep}crumb=${encodeURIComponent(session.crumb)}` : url;

    const resp = await fetch(finalUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': UA,
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        ...(session?.cookieStr ? { Cookie: session.cookieStr } : {}),
      },
    });
    if (!resp.ok) {
      // Invalidate session on auth errors so next call re-fetches
      if (resp.status === 401 || resp.status === 403) yfSession = null;
      throw new Error(`Yahoo returned ${resp.status}`);
    }
    return await resp.json();
  } finally {
    clearTimeout(timeout);
  }
}

app.get('/api/etf/quote', async (req, res) => {
  const { symbols } = req.query;
  if (!symbols) return res.status(400).json({ error: 'symbols required' });
  const fields = [
    'symbol','shortName','regularMarketPrice','regularMarketChange',
    'regularMarketChangePercent','regularMarketVolume','regularMarketDayHigh',
    'regularMarketDayLow','fiftyTwoWeekHigh','fiftyTwoWeekLow','marketCap',
    'bid','ask','bidSize','askSize','trailingAnnualDividendYield',
    'fiftyDayAverage','twoHundredDayAverage','regularMarketOpen',
    'regularMarketPreviousClose','ytdReturn','trailingThreeMonthReturns',
    'trailingPE','epsTrailingTwelveMonths','netAssets','dividendYield',
  ].join(',');
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(symbols)}&fields=${fields}`;
  try {
    const data = await yahooFetch(url);
    res.json(data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

app.get('/api/etf/history', async (req, res) => {
  const { symbol, interval = '1mo' } = req.query;
  if (!symbol) return res.status(400).json({ error: 'symbol required' });
  // Always fetch from Jan 2020 to today using explicit timestamps
  const period1 = Math.floor(new Date('2020-01-01').getTime() / 1000);
  const period2 = Math.floor(Date.now() / 1000);
  const url = `https://query2.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=${interval}&period1=${period1}&period2=${period2}&includePrePost=false`;
  try {
    const data = await yahooFetch(url);
    res.json(data);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

// Quotes from the ASX website's own feed, reshaped to Yahoo's quote format.
// For the few ASX products whose Yahoo feed is dead. Unofficial endpoint; no price history.
async function asxQuote(symbol) {
  const base = `https://asx.api.cmfyapp.com/asx-research/1.0/etfs/${symbol}`;
  const get = async path => {
    const resp = await fetch(`${base}/${path}`, { signal: AbortSignal.timeout(10000), headers: { Accept: 'application/json' } });
    if (!resp.ok) throw new Error(`ASX returned ${resp.status}`);
    return (await resp.json()).data || {};
  };
  const [h, k] = await Promise.all([get('header'), get('key-statistics')]);
  const num = v => (typeof v === 'number' && v !== -32768 ? v : undefined);  // -32768 is the feed's "no value"
  const s = k.shareInformation || {};
  return {
    symbol,
    shortName: h.displayName,
    regularMarketPrice: num(h.priceLast),
    regularMarketChange: num(h.priceChange),
    regularMarketChangePercent: num(h.priceChangePercent),
    regularMarketVolume: num(h.volume),
    bid: num(h.priceBid),
    ask: num(h.priceAsk),
    netAssets: num(h.netAssets),
    regularMarketDayHigh: num(s.priceDayHigh),
    regularMarketDayLow: num(s.priceDayLow),
    fiftyTwoWeekHigh: num(s.priceFiftyTwoWeekHigh),
    fiftyTwoWeekLow: num(s.priceFiftyTwoWeekLow),
    regularMarketPreviousClose: num(s.priceClose),
    ytdReturn: num(k.fundamentals?.returnYearToDate),
  };
}

app.get('/api/asx/quote', async (req, res) => {
  const symbols = String(req.query.symbols || '').split(',').filter(Boolean);
  if (!symbols.length || symbols.length > 10 || !symbols.every(s => /^[A-Z0-9]{2,6}$/.test(s))) {
    return res.status(400).json({ error: 'symbols must be 1-10 ASX codes' });
  }
  const settled = await Promise.allSettled(symbols.map(asxQuote));
  const result = settled.filter(r => r.status === 'fulfilled').map(r => r.value);
  if (!result.length) return res.status(502).json({ error: settled[0].reason.message });
  res.json({ quoteResponse: { result } });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Log to console — swap this for nodemailer/SendGrid/etc. to send real emails
  console.log(`\n--- New message ---`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Message: ${message}`);
  console.log(`------------------\n`);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
