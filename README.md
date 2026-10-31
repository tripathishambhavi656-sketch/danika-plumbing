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
- [ ] **Milestone 3:** Trust Signals, Credentials & Service Showcase
- [ ] **Milestone 4:** Emergency Dispatch Spotlight & Why Choose Us
- [ ] **Milestone 5:** Service Areas, Verified Reviews & FAQ Section
- [ ] **Milestone 6:** Booking Inquiry Form & NAP Footer
- [ ] **Milestone 7:** Responsive Optimization, Accessibility & Core Web Vitals Tuning

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
