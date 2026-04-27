# sentinel-web

Web dashboard for scanning Soroban smart contracts and visualizing security reports.

Part of [Sentinel Protocol Labs](https://github.com/Sentinel-Protocol-Labs) — a security toolkit for the Stellar/Soroban ecosystem.

---

## Overview

`sentinel-web` is a Next.js/TypeScript frontend that provides a visual interface for the `sentinel-core` analysis engine. Developers can paste or upload their Soroban contract source, run a security scan, and view structured vulnerability findings in the browser.

---

## Features

| Feature | Status |
|---------|--------|
| Contract paste & scan UI | ✅ Implemented |
| Connect to sentinel-core API | 🚧 TODO |
| Display structured vulnerability findings | 🚧 TODO |
| Stellar wallet (Freighter) integration | 🚧 TODO |
| Scan history panel | 🚧 TODO |
| Shareable scan report links | 🚧 TODO |

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework
- TypeScript — type safety
- Tailwind CSS — styling
- Freighter API — Stellar wallet connection (planned)

---

## Contributing

Open issues are tagged for [Drips Stellar Wave](https://drips.network). Pick an issue, fix it, earn rewards.

## License
MIT
