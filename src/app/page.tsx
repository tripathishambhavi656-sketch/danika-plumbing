import Link from "next/link";
import { UtilityBar, Header } from "@/components/layout";
import { HeroSection } from "@/components/sections";
import { Container, Card } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* 1. Slim Top Utility Bar */}
      <UtilityBar />

      {/* 2. Primary Desktop & Mobile Navigation Header */}
      <Header />

      {/* 3. Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* Conversion-Focused Hero Section */}
        <HeroSection />

        {/* Milestone 3 Status & Upcoming Milestones Boundary Anchor */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <Container>
            <Card variant="default" padding="default" className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-emerald-100 text-emerald-700 font-bold shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-[#0F3E74]">
                      Milestone 3 Complete: Premium Header, Navigation &amp; Hero Section
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Fully responsive across 320px–1440px+, WCAG AA compliant, zero layout shift (CLS &lt; 0.05).
                    </p>
                  </div>
                </div>

                <Link
                  href="/style-guide"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 hover:text-orange-800 bg-orange-50 hover:bg-orange-100 px-3.5 py-2 rounded-xl border border-orange-200/80 transition-colors shrink-0"
                >
                  <span>Explore Design System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>WA Lic #{COMPANY_INFO.licenses.plumbing} &amp; #{COMPANY_INFO.licenses.electrical}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C2410C] shrink-0" />
                  <span>24/7 Dispatch: {COMPANY_INFO.phoneFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{VERIFIED_STATISTICS.rating}★ Trust Rating ({VERIFIED_STATISTICS.totalReviewsCount}+ Reviews)</span>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>

      {/* Verified NAP Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-xs border-t border-slate-800">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-slate-200 text-sm">
              Danika Plumbing &amp; Electric
            </span>
            <span>
              © 2026 Danika Plumbing LLC. All rights reserved. Washington Contractor Lic #DANIKPL839PF &amp; #DANIKPL745CD.
            </span>
          </div>
          <div className="text-slate-400">
            Headquarters: {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip} &bull; Tel: {COMPANY_INFO.phoneFormatted}
          </div>
        </Container>
      </footer>
    </div>
  );
}
