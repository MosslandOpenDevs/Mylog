# 📌 Mylog — Your 3-Pillar Optimization Dashboard

> **"Where your wallet opens, time is spent, and wealth grows."**
>
> Mylog isn't a portal for everything. It's a **hyper-personalized dashboard** tracking only the three core interests of modern professionals: **Shopping, Hobbies, and Assets**.

---

## 1. Project Overview

| Category | Details |
|------|------|
| **Project Name** | Mylog |
| **One-Line Intro** | A personalized dashboard to track your shopping wishlist, hobby activities, and asset flow at a glance. |
| **Platform** | Web (Responsive, Mobile-friendly) |
| **Target Audience** | 20s-30s professionals focused on mastering their money and time. |
| **Core Values** | Selection & Focus · At-a-Glance View · Cost-Free Efficiency |

---

## 2. Core Concept

### 🎯 Problem Statement
- Traditional portals show **the same information to everyone**.
- Your interests, hobbies, and wishlists are scattered across multiple apps.
- Checking multiple apps every morning is **inefficient**.

### 💡 The Solution
- A portal where your **personalized dashboard** appears the moment you log in.
- Freely arrange shopping, hobby, and asset widgets on a single screen.
- A one-stop service to **start your day** from one screen.

---

## 3. Key Features

### 3.1 🏠 Main Dashboard (Home)
> Two-column layout: Content feed (left) + Asset sidebar (right).

#### Left — Content Feed
| Feed Section | Description |
|------|------|
| 🛒 **Real-time Hot Deals** | Filtered deal aggregation from community boards (RSS) |
| 🎮 **Geek News Feed** | IT/Tech, gaming, fitness news by interest tab |
| 💰 **Asset & Investment Monitor** | Real estate, stocks, crypto-related news |

#### Right — Asset Sidebar (10 Widgets)
| # | Widget | Description | Data Source |
|---|------|------|------|
| ① | 📊 **Asset Summary** | Net worth + asset allocation bar chart | User input (calculated) |
| ② | 🏠 **My Property** | Apartment value, appreciation vs purchase price | Korea MOLIT API (free) |
| ③ | 📈 **My Stocks** | Holdings, current price, returns, total value | User input + free quote API |
| ④ | 💵 **My Savings** | Bank deposits/savings, maturity, expected interest | User input |
| ⑤ | 🪙 **My Crypto** | BTC, ETH holdings and current value | Upbit Open API (free) |
| ⑥ | 🚗 **My Car** | Vehicle model, used car value estimate | User input |
| ⑦ | 💳 **My Loans** | Mortgage/credit loan balance, next payment, monthly total | User input |
| ⑧ | 🏦 **My Pension** | National pension estimate, retirement fund balance | User input |
| ⑨ | 📅 **Subscription Calendar** | Upcoming apartment subscription D-days | Korea Real Estate Board API (free) |
| ⑩ | 💱 **Exchange Rates** | KRW/USD, KRW/JPY, KRW/EUR compact display | Export-Import Bank of Korea API (free) |

### 3.2 🛒 Shopping Deep Dive
- **Wishlist Gallery** — Track items (pending / purchased)
- **Price Alert** — Notifications only when items hit target discount
- **Hot Deal Aggregator** — Filtered view by category

### 3.3 🎮 Hobbies Deep Dive
- **Hobby Archive** — Games played, books read, with ratings
- **Activity Tracker** — Weekly/Monthly time visualization
- **Custom RSS Viewer** — Consume hobby content without leaving the app

### 3.4 💰 Assets Deep Dive
- **Asset Flow Report** — Monthly cash flow line charts
- **Real Estate Monitor** — Latest transaction prices for tracked apartments
- **Macro Indicator Board** — Exchange rates and interest rate snapshots

---

## 4. Tech Stack

| Category | Technology | Status |
|------|------|------|
| **Frontend** | React (Vite) + TypeScript | ✅ Done |
| **Styling** | Vanilla CSS (Custom Design System) | ✅ Done |
| **Routing** | React Router DOM | ✅ Done |
| **State Management** | Zustand or Context API | 🔜 Planned |
| **Backend / Auth** | Firebase or Supabase | 🔜 Planned |
| **Database** | Firestore or Supabase PostgreSQL | 🔜 Planned |
| **Hosting** | Vercel or Netlify | 🔜 Planned |
| **Widget System** | `react-grid-layout` (Drag & Drop) | 🔜 Planned |

---

## 5. Development Roadmap

### 📍 Phase 1 — MVP UI Shell ✅ Complete
- [x] Project setup (Vite + React + TypeScript)
- [x] Design system (CSS variables, dark mode tokens, component styles)
- [x] Main dashboard layout (2-column: feed + asset sidebar)
- [x] React Router (Home / Shopping / Hobbies / Assets / Settings)
- [x] Header + Navigation components
- [x] 10 asset sidebar widgets (with dummy data)
- [x] 3 content feed sections (deals, hobby news, asset monitoring)
- [x] 4 sub-page placeholders

### 📍 Phase 2 — Core Features
- [ ] Social Login (Google)
- [ ] User asset data CRUD
- [ ] Drag & Drop widget placement
- [ ] Wishlist price tracking
- [ ] Public API integrations (real estate, exchange rates, subscriptions)

### 📍 Phase 3 — Advanced
- [ ] RSS-based content curation
- [ ] Weekly/Monthly reports
- [ ] Asset flow charts
- [ ] Hobby activity tracker (grass-planting)
- [ ] Widget market

### 📍 Phase 4 — Expansion
- [ ] PWA support & mobile optimization
- [ ] Push notifications
- [ ] Expanded API integrations

---

## 6. Project Structure

```
mylog-app/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Nav
│   │   └── widgets/         # 10 asset widgets
│   ├── pages/               # Home, Shopping, Hobbies, Assets, Settings
│   ├── styles/              # global.css, components.css
│   ├── App.tsx              # Root + React Router
│   └── main.tsx             # Entry point
├── public/
├── package.json
└── vite.config.ts
```

---

## 7. Getting Started

```bash
cd mylog-app
npm install
npm run dev
# Opens at http://localhost:5173
```

---

> **"Mylog — Start your day in your own world, every morning."** ✨
