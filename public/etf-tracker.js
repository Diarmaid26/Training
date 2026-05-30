// ── ETF Universe ──────────────────────────────────────────────────────────────
const ETF_UNIVERSE = [
  // Broad US Equity
  { symbol:'SPY',  name:'SPDR S&P 500 ETF',                      cat:'Broad US Equity',     er:0.0945 },
  { symbol:'IVV',  name:'iShares Core S&P 500 ETF',              cat:'Broad US Equity',     er:0.03 },
  { symbol:'VOO',  name:'Vanguard S&P 500 ETF',                  cat:'Broad US Equity',     er:0.03 },
  { symbol:'VTI',  name:'Vanguard Total Stock Market ETF',        cat:'Broad US Equity',     er:0.03 },
  { symbol:'IWM',  name:'iShares Russell 2000 ETF',               cat:'Broad US Equity',     er:0.19 },
  { symbol:'MDY',  name:'SPDR S&P MidCap 400 ETF',               cat:'Broad US Equity',     er:0.24 },
  { symbol:'IJH',  name:'iShares Core S&P Mid-Cap ETF',           cat:'Broad US Equity',     er:0.05 },
  { symbol:'IJR',  name:'iShares Core S&P Small-Cap ETF',         cat:'Broad US Equity',     er:0.06 },
  { symbol:'VB',   name:'Vanguard Small-Cap ETF',                 cat:'Broad US Equity',     er:0.05 },
  { symbol:'SCHB', name:'Schwab US Broad Market ETF',             cat:'Broad US Equity',     er:0.03 },
  { symbol:'ITOT', name:'iShares Core S&P Total US Stock Market', cat:'Broad US Equity',     er:0.03 },
  { symbol:'VV',   name:'Vanguard Large-Cap ETF',                 cat:'Broad US Equity',     er:0.04 },
  { symbol:'IWB',  name:'iShares Russell 1000 ETF',               cat:'Broad US Equity',     er:0.15 },
  { symbol:'SPTM', name:'SPDR Portfolio S&P 1500 Composite ETF',  cat:'Broad US Equity',     er:0.03 },
  { symbol:'SPLG', name:'SPDR Portfolio S&P 500 ETF',             cat:'Broad US Equity',     er:0.02 },
  { symbol:'MGC',  name:'Vanguard Mega Cap ETF',                  cat:'Broad US Equity',     er:0.07 },
  { symbol:'IWF',  name:'iShares Russell 1000 Growth ETF',        cat:'Broad US Equity',     er:0.19 },
  { symbol:'IWD',  name:'iShares Russell 1000 Value ETF',         cat:'Broad US Equity',     er:0.19 },
  { symbol:'SCHX', name:'Schwab US Large-Cap ETF',                cat:'Broad US Equity',     er:0.03 },

  // US Sector
  { symbol:'XLK',  name:'Technology Select Sector SPDR',          cat:'US Sector',           er:0.13 },
  { symbol:'XLF',  name:'Financial Select Sector SPDR',           cat:'US Sector',           er:0.13 },
  { symbol:'XLE',  name:'Energy Select Sector SPDR',              cat:'US Sector',           er:0.13 },
  { symbol:'XLV',  name:'Health Care Select Sector SPDR',         cat:'US Sector',           er:0.13 },
  { symbol:'XLY',  name:'Consumer Discret Select Sector SPDR',    cat:'US Sector',           er:0.13 },
  { symbol:'XLC',  name:'Communication Services Select SPDR',     cat:'US Sector',           er:0.13 },
  { symbol:'XLI',  name:'Industrial Select Sector SPDR',          cat:'US Sector',           er:0.13 },
  { symbol:'XLB',  name:'Materials Select Sector SPDR',           cat:'US Sector',           er:0.13 },
  { symbol:'XLRE', name:'Real Estate Select Sector SPDR',         cat:'US Sector',           er:0.13 },
  { symbol:'XLU',  name:'Utilities Select Sector SPDR',           cat:'US Sector',           er:0.13 },
  { symbol:'VGT',  name:'Vanguard Information Technology ETF',    cat:'US Sector',           er:0.10 },
  { symbol:'VHT',  name:'Vanguard Health Care ETF',               cat:'US Sector',           er:0.10 },
  { symbol:'VFH',  name:'Vanguard Financials ETF',                cat:'US Sector',           er:0.10 },
  { symbol:'VDE',  name:'Vanguard Energy ETF',                    cat:'US Sector',           er:0.10 },
  { symbol:'ARKK', name:'ARK Innovation ETF',                     cat:'US Sector',           er:0.75 },
  { symbol:'ARKW', name:'ARK Next Generation Internet ETF',       cat:'US Sector',           er:0.88 },
  { symbol:'ARKG', name:'ARK Genomic Revolution ETF',             cat:'US Sector',           er:0.75 },
  { symbol:'SMH',  name:'VanEck Semiconductor ETF',               cat:'US Sector',           er:0.35 },

  // International
  { symbol:'VEA',  name:'Vanguard FTSE Developed Markets ETF',    cat:'International',       er:0.05 },
  { symbol:'EFA',  name:'iShares MSCI EAFE ETF',                  cat:'International',       er:0.32 },
  { symbol:'IEFA', name:'iShares Core MSCI EAFE ETF',             cat:'International',       er:0.07 },
  { symbol:'VWO',  name:'Vanguard FTSE Emerging Markets ETF',     cat:'International',       er:0.08 },
  { symbol:'EEM',  name:'iShares MSCI Emerging Markets ETF',      cat:'International',       er:0.70 },
  { symbol:'EWJ',  name:'iShares MSCI Japan ETF',                 cat:'International',       er:0.50 },
  { symbol:'FXI',  name:'iShares China Large-Cap ETF',            cat:'International',       er:0.74 },
  { symbol:'MCHI', name:'iShares MSCI China ETF',                 cat:'International',       er:0.59 },
  { symbol:'EWG',  name:'iShares MSCI Germany ETF',               cat:'International',       er:0.51 },
  { symbol:'EWU',  name:'iShares MSCI United Kingdom ETF',        cat:'International',       er:0.51 },
  { symbol:'ACWI', name:'iShares MSCI ACWI ETF',                  cat:'International',       er:0.33 },
  { symbol:'VXUS', name:'Vanguard Total International Stock ETF', cat:'International',       er:0.08 },
  { symbol:'IXUS', name:'iShares Core MSCI Total Intl Stock ETF', cat:'International',       er:0.09 },
  { symbol:'SCHF', name:'Schwab International Equity ETF',        cat:'International',       er:0.06 },
  { symbol:'EWC',  name:'iShares MSCI Canada ETF',                cat:'International',       er:0.51 },

  // Factor / Smart Beta
  { symbol:'QQQ',  name:'Invesco QQQ Trust',                      cat:'Factor / Smart Beta', er:0.20 },
  { symbol:'QQQM', name:'Invesco NASDAQ 100 ETF',                 cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'SCHD', name:'Schwab US Dividend Equity ETF',          cat:'Factor / Smart Beta', er:0.06 },
  { symbol:'VIG',  name:'Vanguard Dividend Appreciation ETF',     cat:'Factor / Smart Beta', er:0.06 },
  { symbol:'RSP',  name:'Invesco S&P 500 Equal Weight ETF',       cat:'Factor / Smart Beta', er:0.20 },
  { symbol:'DGRO', name:'iShares Core Dividend Growth ETF',       cat:'Factor / Smart Beta', er:0.08 },
  { symbol:'VTV',  name:'Vanguard Value ETF',                     cat:'Factor / Smart Beta', er:0.04 },
  { symbol:'MTUM', name:'iShares MSCI USA Momentum Factor ETF',   cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'QUAL', name:'iShares MSCI USA Quality Factor ETF',    cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'VLUE', name:'iShares MSCI USA Value Factor ETF',      cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'USMV', name:'iShares MSCI USA Min Vol Factor ETF',    cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'NOBL', name:"ProShares S&P 500 Dividend Aristocrats", cat:'Factor / Smart Beta', er:0.35 },
  { symbol:'DVY',  name:'iShares Select Dividend ETF',            cat:'Factor / Smart Beta', er:0.38 },
  { symbol:'VYM',  name:'Vanguard High Dividend Yield ETF',       cat:'Factor / Smart Beta', er:0.06 },
  { symbol:'SDY',  name:'SPDR S&P Dividend ETF',                  cat:'Factor / Smart Beta', er:0.35 },

  // Fixed Income
  { symbol:'BND',  name:'Vanguard Total Bond Market ETF',         cat:'Fixed Income',        er:0.03 },
  { symbol:'AGG',  name:'iShares Core US Aggregate Bond ETF',     cat:'Fixed Income',        er:0.03 },
  { symbol:'TLT',  name:'iShares 20+ Year Treasury Bond ETF',     cat:'Fixed Income',        er:0.15 },
  { symbol:'LQD',  name:'iShares iBoxx $ Inv Grade Corp Bond ETF',cat:'Fixed Income',        er:0.14 },
  { symbol:'HYG',  name:'iShares iBoxx $ High Yield Corp Bond',   cat:'Fixed Income',        er:0.49 },
  { symbol:'JNK',  name:'SPDR Bloomberg High Yield Bond ETF',     cat:'Fixed Income',        er:0.40 },
  { symbol:'TIP',  name:'iShares TIPS Bond ETF',                  cat:'Fixed Income',        er:0.19 },
  { symbol:'MUB',  name:'iShares National Muni Bond ETF',         cat:'Fixed Income',        er:0.07 },
  { symbol:'SHY',  name:'iShares 1-3 Year Treasury Bond ETF',     cat:'Fixed Income',        er:0.15 },
  { symbol:'IEF',  name:'iShares 7-10 Year Treasury Bond ETF',    cat:'Fixed Income',        er:0.15 },
  { symbol:'BNDX', name:'Vanguard Total International Bond ETF',  cat:'Fixed Income',        er:0.07 },
  { symbol:'EMB',  name:'iShares JP Morgan USD EM Bond ETF',      cat:'Fixed Income',        er:0.39 },
  { symbol:'VCIT', name:'Vanguard Intermediate-Term Corp Bond',   cat:'Fixed Income',        er:0.04 },
  { symbol:'VCSH', name:'Vanguard Short-Term Corp Bond ETF',      cat:'Fixed Income',        er:0.04 },
  { symbol:'BSV',  name:'Vanguard Short-Term Bond ETF',           cat:'Fixed Income',        er:0.04 },
  { symbol:'FLOT', name:'iShares Floating Rate Bond ETF',         cat:'Fixed Income',        er:0.15 },
  { symbol:'JPST', name:'JPMorgan Ultra-Short Income ETF',        cat:'Fixed Income',        er:0.18 },
  { symbol:'NEAR', name:'iShares Short Maturity Bond ETF',        cat:'Fixed Income',        er:0.25 },
  { symbol:'IGIB', name:'iShares Intermediate-Term Corp Bond',    cat:'Fixed Income',        er:0.06 },

  // Commodities & Alts
  { symbol:'GLD',  name:'SPDR Gold Shares',                       cat:'Commodities & Alts',  er:0.40 },
  { symbol:'IAU',  name:'iShares Gold Trust',                     cat:'Commodities & Alts',  er:0.25 },
  { symbol:'GLDM', name:'SPDR Gold MiniShares',                   cat:'Commodities & Alts',  er:0.10 },
  { symbol:'SLV',  name:'iShares Silver Trust',                   cat:'Commodities & Alts',  er:0.50 },
  { symbol:'USO',  name:'United States Oil Fund',                 cat:'Commodities & Alts',  er:0.81 },
  { symbol:'UNG',  name:'United States Natural Gas Fund',         cat:'Commodities & Alts',  er:1.11 },
  { symbol:'DBC',  name:'Invesco DB Commodity Index Tracking Fund',cat:'Commodities & Alts', er:0.85 },
  { symbol:'PDBC', name:'Invesco Optimum Yield Diversified Commodity',cat:'Commodities & Alts',er:0.59},
  { symbol:'CPER', name:'United States Copper Index Fund',        cat:'Commodities & Alts',  er:0.97 },

  // Leveraged / Inverse
  { symbol:'TQQQ', name:'ProShares UltraPro QQQ',                 cat:'Leveraged / Inverse', er:0.88 },
  { symbol:'SQQQ', name:'ProShares UltraPro Short QQQ',           cat:'Leveraged / Inverse', er:0.95 },
  { symbol:'SPXU', name:'ProShares UltraPro Short S&P 500',       cat:'Leveraged / Inverse', er:0.91 },
  { symbol:'SPXS', name:'Direxion Daily S&P 500 Bear 3X',         cat:'Leveraged / Inverse', er:1.01 },
  { symbol:'SH',   name:'ProShares Short S&P 500',                cat:'Leveraged / Inverse', er:0.88 },
  { symbol:'PSQ',  name:'ProShares Short QQQ',                    cat:'Leveraged / Inverse', er:0.95 },
  { symbol:'UVXY', name:'ProShares Ultra VIX Short-Term Futures',  cat:'Leveraged / Inverse', er:0.95 },
  { symbol:'SDOW', name:'ProShares UltraPro Short Dow30',         cat:'Leveraged / Inverse', er:0.95 },
  { symbol:'UDOW', name:'ProShares UltraPro Dow30',               cat:'Leveraged / Inverse', er:0.95 },
];

const SYMBOLS = ETF_UNIVERSE.map(e => e.symbol);
const META = Object.fromEntries(ETF_UNIVERSE.map(e => [e.symbol, e]));

// ── Chart colours ─────────────────────────────────────────────────────────────
const CHART_COLORS = ['#388bfd','#3fb950','#f85149','#d29922','#bc8cff','#79c0ff'];

// ── State ─────────────────────────────────────────────────────────────────────
let quotes = {};           // symbol → Yahoo quote object
let sortCol = 'aum';
let sortDir = -1;          // -1 desc, 1 asc
let filterCat = 'All';
let searchQuery = '';
let refreshTimer = null;
let countdownTimer = null;
let secondsLeft = 0;
let mainChart = null;
let snapshotChart = null;
let chartSymbols = [];
let chartRange = '5y';
let chartNormalize = true;
let historyCache = {};     // symbol+range → data

// ── Helpers ───────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const fmt = (n, d = 2) => n == null || isNaN(n) ? '—' : n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const fmtPct = n => n == null || isNaN(n) ? '—' : (n >= 0 ? '+' : '') + fmt(n) + '%';
const fmtVol = n => {
  if (!n || isNaN(n)) return '—';
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return String(n);
};
const fmtAUM = n => {
  if (!n || isNaN(n)) return '—';
  if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9)  return '$' + (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6)  return '$' + (n / 1e6).toFixed(2) + 'M';
  return '$' + n.toLocaleString();
};
const cls = n => !n || isNaN(n) ? '' : n >= 0 ? 'up' : 'dn';

// ── Market hours (NYSE: 9:30–16:00 ET, Mon–Fri) ───────────────────────────────
function nyseStatus() {
  const now = new Date();
  const et = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const day = et.getDay();      // 0=Sun 6=Sat
  const h = et.getHours();
  const m = et.getMinutes();
  const mins = h * 60 + m;

  if (day === 0 || day === 6) return 'closed';
  if (mins < 570) return mins >= 240 ? 'premarket' : 'closed';  // 4:00–9:30
  if (mins < 960) return 'open';    // 9:30–16:00
  return 'closed';
}

function updateMarketStatus() {
  const status = nyseStatus();
  const dot = $('marketDot');
  const label = $('marketLabel');
  dot.className = 'market-dot ' + status;
  if (status === 'open')       label.textContent = 'Market Open';
  else if (status === 'premarket') label.textContent = 'Pre-Market';
  else                         label.textContent = 'Market Closed';
}

// ── Data fetching ─────────────────────────────────────────────────────────────
async function fetchQuotes() {
  const btn = $('refreshBtn');
  btn.classList.add('spinning');
  try {
    // Batch into groups of 30 to keep URLs manageable
    const batches = [];
    for (let i = 0; i < SYMBOLS.length; i += 30) batches.push(SYMBOLS.slice(i, i + 30));
    const results = await Promise.all(batches.map(batch =>
      fetch(`/api/etf/quote?symbols=${batch.join(',')}`)
        .then(r => r.json())
        .catch(() => null)
    ));
    results.forEach(res => {
      if (!res) return;
      const list = res?.quoteResponse?.result || [];
      list.forEach(q => { quotes[q.symbol] = q; });
    });
    $('lastRefresh').textContent = 'Updated ' + new Date().toLocaleTimeString();
  } catch (e) {
    console.error('Quote fetch error', e);
  } finally {
    btn.classList.remove('spinning');
  }
}

async function fetchHistory(symbol) {
  if (historyCache[symbol]) return historyCache[symbol];
  const res = await fetch(`/api/etf/history?symbol=${symbol}&interval=1mo`);
  const data = await res.json();
  const chart = data?.chart?.result?.[0];
  if (!chart) return null;
  const timestamps = chart.timestamp;
  const closes = chart.indicators?.quote?.[0]?.close;
  if (!timestamps || !closes) return null;
  const result = timestamps.map((t, i) => ({ date: new Date(t * 1000), price: closes[i] }))
    .filter(d => d.price != null && d.date >= new Date('2020-01-01'));
  historyCache[symbol] = result;
  return result;
}

// ── Auto-refresh ──────────────────────────────────────────────────────────────
function scheduleRefresh() {
  clearInterval(refreshTimer);
  clearInterval(countdownTimer);
  const status = nyseStatus();
  const interval = status === 'open' ? 60 : 300;  // 60s open, 5min closed
  secondsLeft = interval;

  refreshTimer = setInterval(async () => {
    await fetchQuotes();
    renderRankings();
    secondsLeft = interval;
  }, interval * 1000);

  countdownTimer = setInterval(() => {
    secondsLeft = Math.max(0, secondsLeft - 1);
    const s = nyseStatus();
    $('countdown').textContent = s === 'open'
      ? `↻ in ${secondsLeft}s`
      : `(closed · ${Math.round(secondsLeft / 60)}m)`;
    updateMarketStatus();
  }, 1000);
}

// ── Rankings ──────────────────────────────────────────────────────────────────
function sortValue(sym, col) {
  const q = quotes[sym] || {};
  switch (col) {
    case 'rank':      return 0;
    case 'symbol':    return sym;
    case 'price':     return q.regularMarketPrice || 0;
    case 'change':    return q.regularMarketChange || 0;
    case 'changePct': return q.regularMarketChangePercent || 0;
    case 'bid':       return q.bid || 0;
    case 'ask':       return q.ask || 0;
    case 'spread':    return (q.ask && q.bid) ? q.ask - q.bid : 0;
    case 'volume':    return q.regularMarketVolume || 0;
    case 'aum':       return q.marketCap || 0;
    default:          return 0;
  }
}

function renderRankings() {
  const body = $('rankingsBody');
  const q = searchQuery.toLowerCase();

  let rows = ETF_UNIVERSE.filter(e => {
    if (filterCat !== 'All' && e.cat !== filterCat) return false;
    if (q && !e.symbol.toLowerCase().includes(q) && !e.name.toLowerCase().includes(q)) return false;
    return true;
  });

  rows.sort((a, b) => {
    const va = sortValue(a.symbol, sortCol);
    const vb = sortValue(b.symbol, sortCol);
    if (typeof va === 'string') return sortDir * va.localeCompare(vb);
    return sortDir * (vb - va);
  });

  if (!Object.keys(quotes).length) {
    body.innerHTML = '<tr><td colspan="13" class="loading-cell">Loading…</td></tr>';
    return;
  }

  body.innerHTML = rows.map((e, i) => {
    const q = quotes[e.symbol] || {};
    const price = q.regularMarketPrice;
    const chg = q.regularMarketChange;
    const chgPct = q.regularMarketChangePercent;
    const bid = q.bid > 0 ? q.bid : null;
    const ask = q.ask > 0 ? q.ask : null;
    const spread = (bid && ask) ? ask - bid : null;
    return `<tr onclick="openSnapshot('${e.symbol}')">
      <td class="num">${i + 1}</td>
      <td class="ticker">${e.symbol}</td>
      <td class="name-cell" title="${e.name}">${e.name}</td>
      <td><span class="cat-badge">${e.cat}</span></td>
      <td class="num">${price != null ? '$' + fmt(price) : '—'}</td>
      <td class="num ${cls(chg)}">${chg != null ? (chg >= 0 ? '+' : '') + '$' + fmt(Math.abs(chg)) : '—'}</td>
      <td class="num ${cls(chgPct)}">${fmtPct(chgPct)}</td>
      <td class="num">${bid ? '$' + fmt(bid) : '—'}</td>
      <td class="num">${ask ? '$' + fmt(ask) : '—'}</td>
      <td class="num">${spread ? '$' + fmt(spread) : '—'}</td>
      <td class="num">${fmtVol(q.regularMarketVolume)}</td>
      <td class="num">${fmtAUM(q.marketCap)}</td>
      <td class="num">${fmt(e.er, 2)}%</td>
    </tr>`;
  }).join('') || '<tr><td colspan="13" class="loading-cell">No ETFs match your filter.</td></tr>';

  // Update sort indicators
  document.querySelectorAll('.etf-table th.sortable').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    if (th.dataset.col === sortCol) {
      th.classList.add(sortDir === -1 ? 'sort-desc' : 'sort-asc');
    }
  });
}

// ── Snapshot ──────────────────────────────────────────────────────────────────
function openSnapshot(symbol) {
  setActiveTab('snapshot');
  $('snapshotSearch').value = symbol;
  renderSnapshot(symbol);
}

async function renderSnapshot(symbol) {
  const q = quotes[symbol] || {};
  const m = META[symbol];
  if (!m && !q.symbol) return;

  const bid  = q.bid > 0 ? q.bid : null;
  const ask  = q.ask > 0 ? q.ask : null;
  const spread = (bid && ask) ? ask - bid : null;
  const spreadPct = (bid && ask) ? ((ask - bid) / ((ask + bid) / 2)) * 100 : null;
  const price = q.regularMarketPrice;
  const chg   = q.regularMarketChange;
  const chgPct = q.regularMarketChangePercent;

  $('snapSymbol').textContent = symbol;
  $('snapName').textContent = m?.name || q.shortName || '';
  $('snapCat').textContent = m?.cat || '';
  $('snapPrice').textContent = price != null ? '$' + fmt(price) : '—';
  $('snapChange').className = 'snap-change ' + cls(chg);
  $('snapChange').textContent = chg != null
    ? `${chg >= 0 ? '+' : ''}$${fmt(Math.abs(chg))} (${fmtPct(chgPct)})`
    : '—';

  $('sdBid').textContent     = bid  ? '$' + fmt(bid)  : '—';
  $('sdAsk').textContent     = ask  ? '$' + fmt(ask)  : '—';
  $('sdSpread').textContent  = spread    ? '$' + fmt(spread)    : '—';
  $('sdSpreadPct').textContent = spreadPct ? fmt(spreadPct) + '%' : '—';
  $('sdDayRange').textContent = (q.regularMarketDayLow && q.regularMarketDayHigh)
    ? `$${fmt(q.regularMarketDayLow)} – $${fmt(q.regularMarketDayHigh)}` : '—';
  $('sd52w').textContent = (q.fiftyTwoWeekLow && q.fiftyTwoWeekHigh)
    ? `$${fmt(q.fiftyTwoWeekLow)} – $${fmt(q.fiftyTwoWeekHigh)}` : '—';
  $('sdOpen').textContent     = q.regularMarketOpen != null ? '$' + fmt(q.regularMarketOpen) : '—';
  $('sdPrevClose').textContent = q.regularMarketPreviousClose != null ? '$' + fmt(q.regularMarketPreviousClose) : '—';
  $('sdVolume').textContent   = fmtVol(q.regularMarketVolume);
  $('sdAUM').textContent      = fmtAUM(q.marketCap);
  $('sdER').textContent       = m?.er != null ? fmt(m.er, 2) + '%' : '—';
  $('sdYield').textContent    = q.trailingAnnualDividendYield != null
    ? fmt(q.trailingAnnualDividendYield * 100) + '%' : '—';
  $('sd50d').textContent      = q.fiftyDayAverage != null ? '$' + fmt(q.fiftyDayAverage) : '—';
  $('sd200d').textContent     = q.twoHundredDayAverage != null ? '$' + fmt(q.twoHundredDayAverage) : '—';
  $('sdYTD').className        = cls(q.ytdReturn);
  $('sdYTD').textContent      = q.ytdReturn != null ? fmtPct(q.ytdReturn * 100) : '—';
  $('sd3M').className         = cls(q.trailingThreeMonthReturns);
  $('sd3M').textContent       = q.trailingThreeMonthReturns != null ? fmtPct(q.trailingThreeMonthReturns * 100) : '—';

  $('snapshotCard').classList.remove('hidden');
  $('snapshotEmpty').style.display = 'none';

  // Mini chart
  const hist = await fetchHistory(symbol);
  if (hist && hist.length) {
    drawMiniChart(hist);
  }
}

function drawMiniChart(hist) {
  const ctx = $('snapshotChart').getContext('2d');
  if (snapshotChart) snapshotChart.destroy();
  const labels = hist.map(d => d.date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));
  const data = hist.map(d => d.price);
  const last = data[data.length - 1];
  const first = data[0];
  const color = last >= first ? '#3fb950' : '#f85149';

  snapshotChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{ data, borderColor: color, borderWidth: 1.5, pointRadius: 0, fill: true,
        backgroundColor: hexToRgba(color, 0.1), tension: 0.3 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false,
        callbacks: { label: ctx => '$' + fmt(ctx.parsed.y) } } },
      scales: {
        x: { ticks: { color: '#6e7681', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: '#21262d' } },
        y: { ticks: { color: '#6e7681', callback: v => '$' + fmt(v), font: { size: 10 } }, grid: { color: '#21262d' } },
      },
    },
  });
}

// ── Compare ───────────────────────────────────────────────────────────────────
async function renderCompare(symA, symB) {
  if (!symA || !symB) return;
  const qA = quotes[symA] || {};
  const qB = quotes[symB] || {};
  const mA = META[symA] || {};
  const mB = META[symB] || {};

  const bidA  = qA.bid > 0 ? qA.bid : null;
  const askA  = qA.ask > 0 ? qA.ask : null;
  const bidB  = qB.bid > 0 ? qB.bid : null;
  const askB  = qB.ask > 0 ? qB.ask : null;
  const spreadA = (bidA && askA) ? askA - bidA : null;
  const spreadB = (bidB && askB) ? askB - bidB : null;

  const rows = [
    { label: 'Price',          a: qA.regularMarketPrice,      b: qB.regularMarketPrice,      fmt: v => '$' + fmt(v),     higher: false },
    { label: 'Change %',       a: qA.regularMarketChangePercent, b: qB.regularMarketChangePercent, fmt: fmtPct, higher: true },
    { label: 'Bid',            a: bidA,                       b: bidB,                       fmt: v => '$' + fmt(v),     higher: null },
    { label: 'Ask',            a: askA,                       b: askB,                       fmt: v => '$' + fmt(v),     higher: null },
    { label: 'Spread ($)',     a: spreadA,                    b: spreadB,                    fmt: v => '$' + fmt(v),     higher: false },
    { label: 'Volume',         a: qA.regularMarketVolume,     b: qB.regularMarketVolume,     fmt: fmtVol,                higher: true },
    { label: 'AUM',            a: qA.marketCap,               b: qB.marketCap,               fmt: fmtAUM,                higher: true },
    { label: 'Expense Ratio',  a: mA.er,                      b: mB.er,                      fmt: v => fmt(v, 2) + '%',  higher: false },
    { label: 'Div Yield',      a: qA.trailingAnnualDividendYield != null ? qA.trailingAnnualDividendYield * 100 : null,
                                b: qB.trailingAnnualDividendYield != null ? qB.trailingAnnualDividendYield * 100 : null,
                                fmt: v => fmt(v) + '%', higher: true },
    { label: '50-Day Avg',     a: qA.fiftyDayAverage,         b: qB.fiftyDayAverage,         fmt: v => '$' + fmt(v),     higher: null },
    { label: '200-Day Avg',    a: qA.twoHundredDayAverage,    b: qB.twoHundredDayAverage,    fmt: v => '$' + fmt(v),     higher: null },
    { label: 'YTD Return',     a: qA.ytdReturn != null ? qA.ytdReturn * 100 : null,
                                b: qB.ytdReturn != null ? qB.ytdReturn * 100 : null,
                                fmt: fmtPct, higher: true },
  ];

  const wrap = $('compareResult');
  wrap.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th class="${!symA ? '' : ''}">${symA}</th>
          <th class="${!symB ? '' : ''}">${symB}</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => {
          const aVal = r.fmt(r.a);
          const bVal = r.fmt(r.b);
          let aClass = '', bClass = '';
          if (r.higher !== null && r.a != null && r.b != null && r.a !== r.b) {
            const aWins = r.higher ? r.a > r.b : r.a < r.b;
            aClass = aWins ? 'winner' : 'loser';
            bClass = aWins ? 'loser' : 'winner';
          }
          return `<tr>
            <td class="row-label">${r.label}</td>
            <td class="${aClass}">${aVal}</td>
            <td class="${bClass}">${bVal}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>`;

  wrap.classList.remove('hidden');
  $('compareEmpty').style.display = 'none';
}

// ── Main Chart ────────────────────────────────────────────────────────────────
async function renderMainChart() {
  if (!chartSymbols.length) return;

  const startMap = {
    ytd: new Date(new Date().getFullYear(), 0, 1),
    '1y': new Date(Date.now() - 365 * 864e5),
    '3y': new Date(Date.now() - 3 * 365 * 864e5),
    '5y': new Date(Date.now() - 5 * 365 * 864e5),
    max: new Date('2020-01-01'),
  };
  const startDate = startMap[chartRange];

  const datasets = [];
  for (let i = 0; i < chartSymbols.length; i++) {
    const sym = chartSymbols[i];
    const hist = await fetchHistory(sym);
    if (!hist) continue;
    const filtered = hist.filter(d => d.date >= startDate);
    if (!filtered.length) continue;

    let data = filtered.map(d => d.price);
    if (chartNormalize && data[0]) {
      const base = data[0];
      data = data.map(v => (v / base) * 100);
    }

    datasets.push({
      label: sym,
      data: filtered.map((d, j) => ({ x: d.date, y: data[j] })),
      borderColor: CHART_COLORS[i % CHART_COLORS.length],
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.3,
      fill: false,
    });
  }

  const ctx = $('mainChart').getContext('2d');
  if (mainChart) mainChart.destroy();

  mainChart = new Chart(ctx, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const v = ctx.parsed.y;
              return ` ${ctx.dataset.label}: ${chartNormalize ? fmt(v) : '$' + fmt(v)}`;
            },
          },
        },
      },
      scales: {
        x: {
          type: 'time',
          time: { unit: 'month', displayFormats: { month: 'MMM yy' } },
          ticks: { color: '#6e7681', maxTicksLimit: 10 },
          grid: { color: '#21262d' },
        },
        y: {
          ticks: {
            color: '#6e7681',
            callback: v => chartNormalize ? fmt(v) : '$' + fmt(v),
          },
          grid: { color: '#21262d' },
        },
      },
    },
  });

  // Custom legend
  const legend = $('chartLegend');
  legend.innerHTML = datasets.map((ds, i) => {
    const lastVal = ds.data[ds.data.length - 1]?.y;
    const firstVal = ds.data[0]?.y;
    const chgPct = (firstVal && lastVal) ? ((lastVal - firstVal) / firstVal * 100) : null;
    return `<div class="legend-item">
      <span class="legend-dot" style="background:${ds.borderColor}"></span>
      <strong>${ds.label}</strong>
      ${lastVal != null ? `<span>${chartNormalize ? fmt(lastVal) : '$' + fmt(lastVal)}</span>` : ''}
      ${chgPct != null ? `<span class="${cls(chgPct)}">(${fmtPct(chgPct)})</span>` : ''}
    </div>`;
  }).join('');
}

function updateChartTags() {
  const tags = $('chartTags');
  tags.innerHTML = chartSymbols.map((sym, i) => `
    <span class="chart-tag" style="border-color:${CHART_COLORS[i % CHART_COLORS.length]}20;color:${CHART_COLORS[i % CHART_COLORS.length]}">
      ${sym}
      <button onclick="removeChartSymbol('${sym}')" title="Remove">×</button>
    </span>`).join('');
}

window.removeChartSymbol = function(sym) {
  chartSymbols = chartSymbols.filter(s => s !== sym);
  updateChartTags();
  renderMainChart();
};

// ── Autocomplete ──────────────────────────────────────────────────────────────
function bindAutocomplete(inputId, listId, onSelect) {
  const input = $(inputId);
  const list  = $(listId);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { list.classList.remove('open'); return; }
    const matches = ETF_UNIVERSE.filter(e =>
      e.symbol.toLowerCase().startsWith(q) || e.name.toLowerCase().includes(q)
    ).slice(0, 8);
    if (!matches.length) { list.classList.remove('open'); return; }
    list.innerHTML = matches.map(e =>
      `<div class="autocomplete-item" data-sym="${e.symbol}">
        <span class="ac-sym">${e.symbol}</span>
        <span class="ac-name">${e.name}</span>
      </div>`
    ).join('');
    list.classList.add('open');
  });

  list.addEventListener('click', e => {
    const item = e.target.closest('.autocomplete-item');
    if (!item) return;
    const sym = item.dataset.sym;
    input.value = sym;
    list.classList.remove('open');
    onSelect(sym);
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !list.contains(e.target)) list.classList.remove('open');
  });
}

// ── Tabs ──────────────────────────────────────────────────────────────────────
function setActiveTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.querySelectorAll('.tab-content').forEach(s => s.classList.toggle('active', s.id === 'tab-' + name));
}

// ── Hex → rgba ────────────────────────────────────────────────────────────────
function hexToRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

// ── Init ──────────────────────────────────────────────────────────────────────
async function init() {
  updateMarketStatus();

  // Tab clicks
  document.querySelectorAll('.tab').forEach(t =>
    t.addEventListener('click', () => setActiveTab(t.dataset.tab))
  );

  // Category filter chips
  $('categoryFilters').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    filterCat = chip.dataset.cat;
    renderRankings();
  });

  // Rankings search
  $('searchBox').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderRankings();
  });

  // Sort on header click
  document.querySelectorAll('.etf-table th.sortable').forEach(th =>
    th.addEventListener('click', () => {
      if (sortCol === th.dataset.col) sortDir *= -1;
      else { sortCol = th.dataset.col; sortDir = -1; }
      renderRankings();
    })
  );

  // Manual refresh
  $('refreshBtn').addEventListener('click', async () => {
    await fetchQuotes();
    renderRankings();
    secondsLeft = nyseStatus() === 'open' ? 60 : 300;
  });

  // Snapshot autocomplete
  bindAutocomplete('snapshotSearch', 'autocompleteList', sym => renderSnapshot(sym));
  $('snapshotSearch').addEventListener('keydown', e => {
    if (e.key === 'Enter') renderSnapshot($('snapshotSearch').value.trim().toUpperCase());
  });

  // Compare autocompletes
  let compareA = '', compareB = '';
  bindAutocomplete('compareInputA', 'autocompleteA', sym => { compareA = sym; renderCompare(compareA, compareB); });
  bindAutocomplete('compareInputB', 'autocompleteB', sym => { compareB = sym; renderCompare(compareA, compareB); });

  // Chart controls
  bindAutocomplete('chartInput', 'autocompleteChart', sym => {
    if (chartSymbols.includes(sym) || chartSymbols.length >= 6) return;
    chartSymbols.push(sym);
    $('chartInput').value = '';
    updateChartTags();
    renderMainChart();
  });

  document.querySelectorAll('.range-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.range-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      chartRange = btn.dataset.range;
      renderMainChart();
    })
  );

  $('normalizeToggle').addEventListener('change', e => {
    chartNormalize = e.target.checked;
    renderMainChart();
  });

  // Load data
  await fetchQuotes();
  renderRankings();
  scheduleRefresh();

  // Default chart: SPY vs QQQ
  chartSymbols = ['SPY', 'QQQ'];
  updateChartTags();
  // Chart will render when user switches to chart tab
  document.querySelector('[data-tab="chart"]').addEventListener('click', () => {
    if (!mainChart && chartSymbols.length) renderMainChart();
  }, { once: true });
}

document.addEventListener('DOMContentLoaded', init);
