# Danika Plumbing & Electric — Modern Homepage Redesign

Professional frontend engineering redesign for Danika Plumbing & Electric (`danikaplumbing.com`), built for the ETHIXWEB Homepage Redesign Developer Assignment.

## 🌟 Project Overview

Danika Plumbing & Electric is a licensed, bonded, and insured plumbing and electrical contractor headquartered in Everett, Washington, serving communities across Snohomish County and King County since 2009.

This project delivers a high-performance, modern homepage redesign that **preserves ~75% of the authentic brand identity** (colors, logo, Everett roots, dual-trade services, license numbers, review reputation) while **elevating ~25% of the user experience** (typography, visual hierarchy, mobile conversion paths, accessibility, and Core Web Vitals).

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js (App Router, React 19)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS
- **Iconography:** Lucide React
- **Structured Data:** LocalBusiness & PlumbingContractor JSON-LD schema
- **Deployment Target:** Vercel

---

## 📁 Project Structure

```text
danika-plumbing/
├── docs/
│   └── PROJECT_DISCOVERY.md      # Comprehensive website audit, SEO & architecture discovery
├── public/                       # Static public assets & vector graphics
├── src/
│   ├── app/
│   │   ├── globals.css           # Global CSS variables & brand tokens
│   │   ├── layout.tsx            # Root layout with SEO metadata & JSON-LD
│   │   ├── page.tsx              # Homepage foundation
│   │   ├── robots.ts             # Search crawler directives
│   │   ├── sitemap.ts            # Dynamic XML sitemap generator
│   │   └── style-guide/          # Internal design system preview route
│   ├── components/
│   │   └── ui/                   # Reusable UI primitives (Container, Section, Button, etc.)
│   ├── config/
│   │   └── seo.ts                # SEO metadata & LocalBusiness schema
│   ├── data/
│   │   └── company.ts            # Verified company NAP, licenses, services & reviews
│   ├── types/
│   │   └── index.ts              # Type definitions
│   └── utils/
│       └── cn.ts                 # Classname utility helper
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📋 Milestone Status

- [x] **Milestone 1:** Project Discovery, Comprehensive Website Audit & Engineering Foundation
  - Audited `danikaplumbing.com` and recorded verified business data (WA Lic #DANIKPL839PF & #DANIKPL745CD).
  - Evaluated 4 ETHIXWEB benchmark websites (`allphaseplumbing.com`, `garyspipelining.com`, `bestdayscatching.com`, `catchingchromeguideservice.com`).
  - Documented discovery in `docs/PROJECT_DISCOVERY.md`.
  - Initialized Next.js App Router, TypeScript, Tailwind CSS, and Lucide React.
  - Zero linting errors & successful production build.
- [x] **Milestone 2:** Design System & Reusable UI Foundation
  - Established semantic design tokens (navy, action blue, emergency orange, subtle backgrounds).
  - Created accessible typography scale and WCAG 2.1 AA contrast standards.
  - Built reusable component foundation (`Container`, `Section`, `Button`, `LinkButton`, `SectionHeading`, `IconBadge`, `TrustItem`, `Card`).
  - Added internal `/style-guide` demonstration route (noindex/disallowed in robots).
- [x] **Milestone 3:** Premium Header, Responsive Navigation & Conversion Hero Section
  - Built slim utility bar displaying 24/7 emergency dispatch alert, WA licenses (#DANIKPL839PF & #DANIKPL745CD), and direct phone trigger.
  - Implemented desktop header with multi-trade BrandLogo, service dropdown, and primary CTA.
  - Built fully accessible mobile navigation drawer (44px+ touch targets, keyboard Escape listener, body scroll lock).
  - Developed conversion-optimized hero section with single semantic H1, verified copy, dual CTAs, trust pill grid, and priority-loaded Next.js hero photography.
- [x] **Milestone 4:** Trust Signals, Credentials & Comprehensive Service Showcase
  - Preserved ~75% original Danika visual identity with red / dark maroon brand direction and authentic logo styling.
  - Implemented large, impactful full-width hero with dark readability overlay, centered commanding headline, and prominent CTAs.
  - Built comprehensive TrustStrip displaying WA licenses, upfront pricing, 24/7 dispatch, and workmanship guarantee.
  - Implemented 6-card multi-trade ServicesSection for residential plumbing and licensed electrical services.
  - Developed full-width EmergencyBanner for immediate 24/7 dispatch across Snohomish and King Counties.
- [x] **Milestone 5:** FAQ, Conversion Flow, Complete NAP Footer & Mobile Action Dock
  - Created accessible interactive FAQSection accordion with keyboard navigation, ARIA controls, and verified customer questions.
  - Implemented multi-trade ContactSection with service category picker, emergency toggle, 24/7 direct dial dispatch hotline, and Everett HQ verification.
  - Developed comprehensive 4-column NAP Footer with pre-footer emergency strip, service catalog, license credentials (WA #DANIKPL839PF & #DANIKPL745CD), office hours, and legal copyright.
  - Built sticky MobileActionDock with 48px touch targets for mobile click-to-call and instant booking navigation.
  - Verified 100% anchor navigation resolution (`#services`, `#service-areas`, `#why-choose-us`, `#financing`, `#reviews`, `#about`, `#faq`, `#contact`).
- [ ] **Milestone 6:** Responsive Optimization, Accessibility & Core Web Vitals Tuning
- [ ] **Milestone 7:** Final Polish, Performance Tuning & Deployment

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Validation
```bash
# Run ESLint validation
npm run lint

# Run production build
npm run build
```

---

## 📄 License & Attribution
Prepared for the ETHIXWEB Developer Assessment. All company information and credentials verified directly from Washington State public contractor registries and `danikaplumbing.com`.
