import type { Metadata } from "next";
import Link from "next/link";
import {
  Container,
  Section,
  SectionHeading,
  Button,
  LinkButton,
  IconBadge,
  TrustItem,
  Card,
} from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import {
  Phone,
  ShieldCheck,
  Wrench,
  Clock,
  Award,
  Zap,
  ArrowRight,
  Flame,
  Droplet,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Internal Style Guide & Design System | Danika Plumbing",
  description: "Internal design system documentation and component inventory.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Internal Navigation Header */}
      <header className="bg-[#0A2E5C] text-white py-4 border-b border-blue-900/60 sticky top-0 z-50 backdrop-blur-md">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-lg font-extrabold tracking-tight text-white hover:text-orange-400 transition-colors"
            >
              Danika Plumbing & Electric
            </Link>
            <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/40 px-2 py-0.5 rounded font-mono font-semibold">
              Design System v1.0
            </span>
          </div>
          <Link
            href="/"
            className="text-xs text-blue-200 hover:text-white transition-colors flex items-center gap-1 font-semibold"
          >
            ← Back to Home
          </Link>
        </Container>
      </header>

      <main className="flex-1">
        {/* Title Section */}
        <Section variant="white" spacing="sm" className="border-b border-slate-200">
          <Container>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                Milestone 2 Foundation
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F3E74] tracking-tight mt-3 mb-2">
                Design System & Component Inventory
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Centralized design tokens, semantic typography scale, and accessible UI component primitives calibrated for Danika Plumbing & Electric.
              </p>
            </div>
          </Container>
        </Section>

        {/* 1. Brand Color Palette Tokens */}
        <Section variant="slate" spacing="sm">
          <Container>
            <SectionHeading
              title="Brand Color System"
              eyebrow="Tokens"
              description="Core color variables preserving 75% brand identity (navy, blue, emergency orange) with accessible WCAG 2.1 contrast."
              align="left"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-[#0F3E74]" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Navy Primary</div>
                  <div className="text-[11px] font-mono text-slate-500">#0F3E74</div>
                  <div className="text-[10px] text-slate-400">Header / Authority</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-[#0A2E5C]" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Navy Dark</div>
                  <div className="text-[11px] font-mono text-slate-500">#0A2E5C</div>
                  <div className="text-[10px] text-slate-400">Dark Sections</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-[#1E88E5]" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Action Blue</div>
                  <div className="text-[11px] font-mono text-slate-500">#1E88E5</div>
                  <div className="text-[10px] text-slate-400">Interactive Links</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-[#C2410C]" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Emergency Orange</div>
                  <div className="text-[11px] font-mono text-slate-500">#C2410C (5.17:1 AA)</div>
                  <div className="text-[10px] text-slate-400">Primary CTA / Dispatch</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-[#9A3412]" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Orange Hover</div>
                  <div className="text-[11px] font-mono text-slate-500">#9A3412 (7.38:1 AAA)</div>
                  <div className="text-[10px] text-slate-400">Active / Pressed</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-[#F8FAFC] border border-slate-300" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Subtle Slate</div>
                  <div className="text-[11px] font-mono text-slate-500">#F8FAFC</div>
                  <div className="text-[10px] text-slate-400">Alt Section BG</div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 2. Typography Scale */}
        <Section variant="white" spacing="sm">
          <Container>
            <SectionHeading
              title="Typography Hierarchy"
              eyebrow="Typography"
              description="Fluid scale engineered for zero layout shift (CLS < 0.05) and instant readability on mobile emergency viewports."
              align="left"
            />

            <div className="space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="pb-4 border-b border-slate-200">
                <div className="text-xs font-mono text-slate-400 mb-1">Display / Hero (text-4xl sm:text-5xl lg:text-6xl font-extrabold)</div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F3E74] tracking-tight">
                  24/7 Plumber in Everett & Seattle
                </h1>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <div className="text-xs font-mono text-slate-400 mb-1">Section Heading H2 (text-2xl sm:text-3xl lg:text-4xl font-extrabold)</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3E74] tracking-tight">
                  Comprehensive Plumbing & Electrical Services
                </h2>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <div className="text-xs font-mono text-slate-400 mb-1">Subheading H3 (text-lg sm:text-xl font-bold)</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Tankless Water Heater Installation & Repair
                </h3>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <div className="text-xs font-mono text-slate-400 mb-1">Body Text (text-base text-slate-600 leading-relaxed)</div>
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  Our licensed technicians arrive equipped with advanced diagnostic tools, transparent upfront pricing, and a 100% parts & labor warranty on all installations across Snohomish County.
                </p>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 mb-1">Eyebrow / Badge Label (text-xs font-bold uppercase tracking-wider)</div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-2.5 py-1 rounded-full">
                  Licensed Washington Contractor #DANIKPL839PF
                </span>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. Button & LinkButton Primitives */}
        <Section variant="slate" spacing="sm">
          <Container>
            <SectionHeading
              title="Button & Interaction Primitives"
              eyebrow="Interactive"
              description="Accessible touch targets (min 44px–48px), keyboard focus rings, and high-contrast variant treatments."
              align="left"
            />

            <div className="flex flex-col gap-6">
              {/* Variants */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Style Variants
                </h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="primary" leftIcon={<Phone className="w-4 h-4" />}>
                    Primary Emergency CTA
                  </Button>
                  <Button variant="navy" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Primary Navy
                  </Button>
                  <Button variant="secondary" leftIcon={<Wrench className="w-4 h-4" />}>
                    Action Blue
                  </Button>
                  <Button variant="outline">
                    Outline Navy
                  </Button>
                  <Button variant="ghost">
                    Ghost Action
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled State
                  </Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Size Scale & Touch Target Optimization
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm" variant="navy">
                    Small (36px min-h)
                  </Button>
                  <Button size="md" variant="primary" leftIcon={<Phone className="w-4 h-4" />}>
                    Standard Mobile Touch (44px min-h)
                  </Button>
                  <Button size="lg" variant="primary" leftIcon={<Phone className="w-5 h-5" />}>
                    Hero Large CTA (48px min-h)
                  </Button>
                </div>
              </div>

              {/* LinkButton Demonstration */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Accessible LinkButton (Anchor with Button Styling)
                </h3>
                <div className="flex flex-wrap gap-3">
                  <LinkButton
                    href={`tel:${COMPANY_INFO.phonePrimary}`}
                    variant="primary"
                    leftIcon={<Phone className="w-4 h-4" />}
                  >
                    Direct Dial: {COMPANY_INFO.phoneFormatted}
                  </LinkButton>
                  <LinkButton href="#contact" variant="outline">
                    Anchor: #contact
                  </LinkButton>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 4. IconBadge and TrustItem Components */}
        <Section variant="white" spacing="sm">
          <Container>
            <SectionHeading
              title="IconBadges & Trust Signals"
              eyebrow="Credibility"
              description="Consistent visual framing for trade badges, warranties, ratings, and licensing credentials."
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Badges */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  IconBadge Variants & Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <IconBadge icon={<AlertTriangle />} variant="orange" size="lg" />
                  <IconBadge icon={<Wrench />} variant="blue" size="md" />
                  <IconBadge icon={<ShieldCheck />} variant="navy" size="md" />
                  <IconBadge icon={<CheckCircle2 />} variant="emerald" size="sm" />
                  <IconBadge icon={<Clock />} variant="subtle" size="sm" />
                </div>
              </div>

              {/* Trust Items */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  TrustItem Component
                </h3>
                <div className="space-y-2">
                  <TrustItem
                    icon={<ShieldCheck />}
                    badgeVariant="navy"
                    label={`Licensed WA #${COMPANY_INFO.licenses.plumbing}`}
                    description="Dual-licensed plumbing & electrical contractor"
                  />
                  <TrustItem
                    icon={<Clock />}
                    badgeVariant="orange"
                    label="24/7 Rapid Emergency Dispatch"
                    description={VERIFIED_STATISTICS.emergencyResponseTarget}
                  />
                  <TrustItem
                    icon={<Award />}
                    badgeVariant="emerald"
                    label={`${VERIFIED_STATISTICS.rating}★ Customer Trust Rating`}
                    description={`Over ${VERIFIED_STATISTICS.totalReviewsCount}+ verified reviews across Puget Sound`}
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 5. Card Component Variants */}
        <Section variant="slate" spacing="sm">
          <Container>
            <SectionHeading
              title="Card Container Primitives"
              eyebrow="Containers"
              description="Versatile cards with subtle shadows, hover micro-interactions, and dark navy options."
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card variant="default">
                <IconBadge icon={<Droplet />} variant="blue" size="md" className="mb-4" />
                <h3 className="text-base font-bold text-slate-900 mb-2">Default Card</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clean border with subtle neutral shadow. Standard container for non-clickable informational content.
                </p>
              </Card>

              <Card variant="interactive">
                <IconBadge icon={<Flame />} variant="orange" size="md" className="mb-4" />
                <h3 className="text-base font-bold text-slate-900 mb-2">Interactive Card</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Hover elevation with subtle translation and border color transition. Optimized for clickable service cards.
                </p>
                <div className="mt-4 text-xs font-bold text-orange-600 flex items-center gap-1">
                  Explore Service →
                </div>
              </Card>

              <Card variant="elevated">
                <IconBadge icon={<Zap />} variant="emerald" size="md" className="mb-4" />
                <h3 className="text-base font-bold text-slate-900 mb-2">Elevated Card</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Medium shadow for high-priority callout modules such as special financing promotions and guarantees.
                </p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* 6. Dark / Inverted Surface Demonstration */}
        <Section variant="navy-dark" spacing="sm">
          <Container>
            <SectionHeading
              title="Inverted / Dark Navy Surface System"
              eyebrow="Dark Mode Surfaces"
              description="Engineered for high-contrast emergency banners and footer sections with strict accessible color contrast."
              inverted
              align="center"
            />

            <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                Emergency Call: (425) 374-1557
              </Button>
              <Button variant="outline-white" size="lg">
                View Service Coverage
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      {/* Style Guide Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-xs text-center border-t border-slate-800">
        <Container>
          Danika Plumbing & Electric — Internal Design System Documentation (Excluded from public search indexing).
        </Container>
      </footer>
    </div>
  );
}
