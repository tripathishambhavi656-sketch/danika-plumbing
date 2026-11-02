# Danika Plumbing & Electric — Modern Homepage Redesign

A modern, high-performance **homepage redesign** for Danika Plumbing & Electric (`danikaplumbing.com`), created for the **ETHIXWEB Homepage Redesign Developer Assignment**.

## 🌐 Project Links

- **Live Website:** https://danika-plumbing.vercel.app/
- **GitHub Repository:** https://github.com/tripathishambhavi656-sketch/danika-plumbing

---

## 🌟 Project Overview

The goal of this assignment was to understand the existing Danika Plumbing & Electric website and rebuild its homepage so that it feels **more premium, faster, smoother, and easier to use**, while preserving what makes the original business recognizable.

The redesign follows the assignment's **75% preserve / up to 25% improve** approach.

### Preserved from the Original Website

- Brand colours and overall visual identity
- Danika Plumbing & Electric branding and logo direction
- Core plumbing and electrical services
- Core business messaging and contact information
- Everett, Washington local identity
- Recognizable homepage structure and service-focused content
- Important trust and credential information

### Improved in the Redesign

- Clearer visual hierarchy and typography
- More premium spacing and layout refinement
- Improved desktop, tablet, and mobile responsiveness
- Smoother scrolling and interactions
- More prominent conversion paths and calls-to-action
- Sticky mobile actions for important contact flows
- Improved accessibility and keyboard interaction
- SEO metadata and structured data
- Production performance and technical optimization

The result is a modernized homepage that aims to feel like an evolution of the original Danika website rather than a completely unrelated redesign.

---

# 🛠️ Tech Stack

The assignment recommended a scalable modern stack, so the project was built using:

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Iconography:** Lucide React
- **SEO:** Metadata API, Open Graph, Twitter Cards, sitemap and robots configuration
- **Structured Data:** LocalBusiness / PlumbingContractor / Electrician JSON-LD
- **Deployment:** Vercel

This stack was selected because it provides a scalable foundation for a larger website while supporting strong performance, responsive development, SEO, and production deployment.

---

# 🔄 What I Changed and Why

## 1. Visual Design & Brand Refinement

The original Danika-inspired visual identity was preserved using a **red and dark maroon brand direction**.

### Changes made

- Refined typography hierarchy
- Improved spacing and section rhythm
- Modernized cards and content layouts
- Improved contrast and readability
- Created stronger visual separation between sections
- Used a more polished full-width hero presentation
- Improved CTA prominence

### Why

The goal was to make the homepage feel more premium and professionally designed while keeping the business visually recognizable to returning visitors.

---

## 2. Header & Navigation

### Changes made

- Added a utility information bar
- Built responsive desktop navigation
- Implemented an accessible mobile navigation experience
- Added clear service and contact pathways
- Improved access to emergency actions
- Added sticky navigation behavior

### Why

The navigation was refined to help users quickly find services or contact the business, particularly during urgent plumbing or electrical situations.

---

## 3. Homepage Conversion Flow

### Changes made

The redesigned homepage includes:

- A prominent hero section
- Primary calls-to-action
- Trust and credential sections
- Plumbing and electrical service sections
- Emergency service messaging
- Why Choose Us content
- Financing/promotional content
- Service areas
- Customer review/testimonial content
- About section
- FAQ section
- Contact and booking section
- Comprehensive footer

### Why

The structure provides a clearer journey from:

**Understanding the business → Exploring services → Building trust → Taking action**

---

## 4. Mobile & Responsive Experience

### Changes made

- Responsive layouts for mobile, tablet, and desktop
- Refinement for narrow mobile widths
- Flexible grids and typography
- Improved mobile touch targets
- Sticky mobile action dock
- Mobile click-to-call actions
- Mobile booking/contact access
- Responsive navigation

### Why

The assignment places significant importance on usability across both **mobile and PC**, so the layout and interactions were designed to remain usable across different screen sizes.

---

## 5. Smoothness & Interactions

### Changes made

- Smooth anchor scrolling
- Scroll offsets for sticky navigation
- Responsive mobile navigation interactions
- Interactive FAQ accordion
- Hover and focus states
- Reduced-motion support through `prefers-reduced-motion`
- Lightweight transitions

### Why

The goal was to make interactions feel smooth and responsive without introducing unnecessarily heavy animations that could negatively affect performance.

---

## 6. Accessibility Improvements

The redesign includes:

- Semantic page structure
- Keyboard-accessible interactive elements
- Focus-visible styling
- Accessible mobile navigation behavior
- ARIA attributes for interactive components
- Accessible FAQ interactions
- Improved form accessibility
- Status messaging for relevant interactions
- Improved mobile touch target sizing
- Reduced-motion support

### PageSpeed Accessibility Score

- **Mobile: 96**
- **Desktop: 96**

---

# 🔍 SEO Strategy

The homepage was configured for organic SEO using relevant plumbing, electrical, emergency service, location, and service-area keywords.

## Targeted Keywords

Keywords included in the project's SEO strategy include:

- plumber Everett WA
- emergency plumber Seattle
- 24 hour plumbing service Snohomish County
- water heater repair Everett
- tankless water heater installation
- drain cleaning hydro jetting
- sewer line repair camera inspection
- whole house repiping plumber
- electrical panel upgrade 200 amp
- EV charger installation Everett
- Danika Plumbing
- Danika Plumbing & Electric

## SEO Implementation

The project includes:

- Page title and metadata
- Meta description
- Keyword targeting
- Relevant headings and page content
- Canonical URL handling
- Open Graph metadata
- Twitter Card metadata
- XML sitemap
- Robots configuration
- Local business structured data
- Plumbing and electrical service schema
- Location and service-area information

## Structured Data

JSON-LD structured data is implemented for relevant local business and service information using:

- `PlumbingContractor`
- `Electrician`
- Local business details
- Service catalog information
- Service areas

The canonical and metadata configuration was updated so that the deployed project uses its own production URL rather than incorrectly using the original business website as the canonical URL.

---

# 📊 Google PageSpeed Insights Results

PageSpeed Insights testing was performed on the **live production deployment**.

**Tested Website:** https://danika-plumbing.vercel.app/

## 📱 Mobile Results

| Category | Score |
|---|---:|
| Performance | **98** |
| Accessibility | **96** |
| Best Practices | **100** |
| SEO | **100** |
| Agentic Browsing | **2/2** |

### Mobile Metrics

| Metric | Result |
|---|---:|
| First Contentful Paint | **1.1 s** |
| Largest Contentful Paint | **1.7 s** |
| Total Blocking Time | **50 ms** |
| Cumulative Layout Shift | **0** |
| Speed Index | **3.8 s** |

---

## 🖥️ Desktop Results

| Category | Score |
|---|---:|
| Performance | **98** |
| Accessibility | **96** |
| Best Practices | **100** |
| SEO | **100** |
| Agentic Browsing | **2/2** |

### Desktop Metrics

| Metric | Result |
|---|---:|
| First Contentful Paint | **0.3 s** |
| Largest Contentful Paint | **0.4 s** |
| Total Blocking Time | **20 ms** |
| Cumulative Layout Shift | **0** |
| Speed Index | **1.5 s** |

### Performance Summary

The production deployment achieved:

- **98 Performance** on Mobile
- **98 Performance** on Desktop
- **96 Accessibility** on both profiles
- **100 Best Practices** on both profiles
- **100 SEO** on both profiles
- **0 Cumulative Layout Shift** on both profiles

> PageSpeed and Lighthouse scores may vary slightly between individual test runs because testing conditions can change.

---

# 📁 Project Structure

```text
danika-plumbing/
├── docs/
│   └── PROJECT_DISCOVERY.md      # Website audit, research & discovery
├── public/                       # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles and brand tokens
│   │   ├── layout.tsx            # Root layout, metadata & JSON-LD
│   │   ├── page.tsx              # Homepage
│   │   ├── robots.ts             # Search crawler directives
│   │   ├── sitemap.ts            # XML sitemap
│   │   └── style-guide/          # Internal design system preview
│   ├── components/               # Reusable layout, section and UI components
│   ├── config/
│   │   └── seo.ts                # SEO and structured data configuration
│   ├── data/
│   │   └── company.ts            # Company and service information
│   ├── types/
│   │   └── index.ts              # Type definitions
│   └── utils/
│       └── cn.ts                 # Classname utility helper
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

# 📋 Development Milestones

## Milestone 1 — Project Discovery & Foundation

- Reviewed the existing website and relevant business context
- Documented website discovery and architecture research
- Reviewed the benchmark/reference websites provided in the assignment
- Established the Next.js, TypeScript, Tailwind CSS, and Lucide React foundation

## Milestone 2 — Design System & Reusable Components

- Created reusable UI foundations
- Established design tokens
- Built reusable layout and interface components
- Added an internal style guide route

## Milestone 3 — Header, Navigation & Hero

- Built utility information and navigation components
- Implemented responsive navigation
- Developed the homepage hero
- Added clear calls-to-action and trust information

## Milestone 4 — Homepage Service & Trust Sections

- Corrected and refined the brand direction around red and dark maroon
- Built trust and credential sections
- Implemented plumbing and electrical service showcases
- Added emergency service messaging

## Milestone 5 — FAQ, Contact & Mobile Actions

- Added an accessible FAQ
- Built contact and booking functionality
- Developed the footer and business information sections
- Added a sticky mobile action dock
- Verified key anchor navigation flows

## Milestone 6 — Responsiveness & Accessibility

- Refined layouts for smaller mobile screens
- Improved responsive grids
- Improved mobile interaction and touch targets
- Added accessibility refinements
- Added reduced-motion considerations

## Milestone 7 — SEO, Performance & Technical QA

- Configured metadata and social sharing information
- Added canonical URL handling
- Implemented structured data
- Added sitemap and robots support
- Added a custom 404 experience
- Performed production build validation

## Milestone 8 — Final Polish & Production Deployment

- Performed final functional checks
- Corrected production canonical URL handling
- Updated deployment-related configuration
- Completed production build validation
- Successfully deployed the project to Vercel
- Tested the live website using Google PageSpeed Insights

---

# 🚀 Production Deployment

The project is successfully deployed on Vercel.

## Live Website

https://danika-plumbing.vercel.app/

The production deployment is connected to the GitHub repository and provides a publicly accessible implementation of the completed homepage redesign.

---

# 💻 Getting Started Locally

## Prerequisites

- Node.js 18 or later
- npm 9 or later

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# ✅ Quality Validation

Run lint validation:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

The project was successfully built and validated before the final production deployment.

---

# 🎯 Assignment Deliverables

The completed submission includes:

- ✅ A redesigned Danika Plumbing & Electric homepage
- ✅ A publicly accessible live website
- ✅ GitHub source repository
- ✅ Responsive mobile, tablet, and desktop implementation
- ✅ Smooth navigation and interactions
- ✅ SEO metadata and local business schema
- ✅ Mobile and desktop PageSpeed results
- ✅ README documenting the stack, changes, reasons, keywords, and performance results

---

# 🔗 Final Links

**Live Website:**  
https://danika-plumbing.vercel.app/

**GitHub Repository:**  
https://github.com/tripathishambhavi656-sketch/danika-plumbing

---

# 📄 Assignment Context & Attribution

This project was created for the **ETHIXWEB Homepage Redesign Developer Assignment**.

It is a redesign implementation created from the existing Danika Plumbing & Electric website as the reference point. The project aims to preserve the recognizable identity, services, structure, and purpose of the original business while improving the homepage's visual polish, responsiveness, usability, smoothness, SEO implementation, and performance.

The original business name and related brand references are used solely in the context of this redesign assignment and project submission.