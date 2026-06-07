# Claude Instructions — NYSE ETF Tracker Project

## Project Overview
NYSE ETF Tracker — live dashboard tracking 104 ETFs and 100 top stocks.
Served at `http://localhost:3000` via Node.js/Express.

## Key Files
| File | Purpose |
|---|---|
| `server.js` | Express server + Yahoo Finance proxy |
| `public/etf-tracker.html` | Main tracker UI |
| `public/etf-tracker.css` | Dark-theme styles |
| `public/etf-tracker.js` | All client logic, ETF_UNIVERSE, STOCK_UNIVERSE |
| `public/index.html` | DOC portfolio homepage |

## Data & API
- Yahoo Finance requires crumb + cookie auth — handled server-side in `getYahooSession()`
- `/api/etf/quote` — batch quote endpoint (up to 30 symbols)
- `/api/etf/history` — historical prices from Jan 2020 to today (explicit period1/period2 timestamps)
- Session cached for 30 minutes; invalidated on 401/403

## UI Rules
- **No auto-refresh** — data fetches once on page load, then only on manual ↻ button press
- Branding: always **DOC**, never "Diarmaid O'Callaghan"
- Dark theme: `--bg: #0d1117`, `--green: #3fb950`, `--red: #f85149`
- Tabs: Rankings | Snapshot | Compare | Chart | Top 100 ETFs | Top 100 Stocks

## Universes
- `ETF_UNIVERSE`: 104 ETFs with `{ symbol, name, cat, er, description, holdings }`
- `STOCK_UNIVERSE`: 100 stocks with `{ symbol, name, sector, description, holdings }`
- `ALL_UNIVERSE` / `ALL_META`: combined for unified autocomplete across Chart/Compare/Snapshot

## Git Workflow
- Feature branches from `master` → PR back to `master`
- Use full gh path: `C:\Program Files\GitHub CLI\gh.exe`
- `GH_TOKEN` available as Windows User env variable
