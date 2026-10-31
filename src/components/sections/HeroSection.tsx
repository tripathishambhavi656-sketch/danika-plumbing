import React from "react";
import Image from "next/image";
import { Container, LinkButton } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80"
    >
      {/* Background Decorative Grid Accent (Subtle, No Blobs) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f3e7408_1px,transparent_1px),linear-gradient(to_bottom,#0f3e7408_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Copy & CTAs (Cols: 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Verified Location & Credibility Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#0F3E74] text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-xs">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600" />
              </span>
              <span>Serving Snohomish County &amp; North King County</span>
            </div>

            {/* Exactly One Primary H1 */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#0F3E74] tracking-tight leading-[1.12] sm:leading-[1.15]"
            >
              24/7 Emergency Plumber &amp; Electrician in{" "}
              <span className="text-[#C2410C] underline decoration-[#C2410C]/30 underline-offset-4 sm:underline-offset-8">
                Everett &amp; Seattle
              </span>
            </h1>

            {/* Verified Supporting Copy */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Locally owned and operated since 2009. From emergency burst pipes and drain hydro jetting to tankless water heaters and 200A electrical panel upgrades, our licensed technicians provide rapid dispatch with upfront flat-rate pricing.
            </p>

            {/* Core Value Micro-Pills */}
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Upfront Fixed Pricing
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {VERIFIED_STATISTICS.emergencyResponseTarget}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                WA Lic #{COMPANY_INFO.licenses.plumbing}
              </span>
            </div>

            {/* Conversion CTA Group */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA (WCAG AA #C2410C) */}
              <LinkButton
                href="#contact"
                variant="primary"
                size="lg"
                className="justify-center shadow-md hover:shadow-lg transition-all"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Service Online
              </LinkButton>

              {/* Secondary CTA: Click-to-Call */}
              <LinkButton
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                variant="outline"
                size="lg"
                className="justify-center border-slate-300 hover:border-[#0F3E74] text-[#0F3E74] hover:bg-slate-100"
                leftIcon={<Phone className="w-4 h-4 text-[#C2410C]" />}
              >
                Call: {COMPANY_INFO.phoneFormatted}
              </LinkButton>
            </div>

            {/* Trust Indicator Strip directly below CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-orange-100/70 text-orange-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">24/7 Response</div>
                  <div className="text-[11px] text-slate-500">Live Local Dispatch</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-100/70 text-[#0F3E74] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Dual Licensed</div>
                  <div className="text-[11px] text-slate-500">Plumbing &amp; Electrical</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-700 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {VERIFIED_STATISTICS.rating}★ Trust Rating
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {VERIFIED_STATISTICS.totalReviewsCount}+ Verified Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photographic Asset (Cols: 5) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Visual Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              <Image
                src="/hero-plumbing.jpg"
                alt="Professional residential plumbing and tankless water heater installation by Danika Plumbing & Electric in Everett, WA"
                width={800}
                height={600}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />

              {/* Gradient Overlay for Legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0A2E5C]/90 via-[#0A2E5C]/20 to-transparent"
                aria-hidden="true"
              />

              {/* Floating Badge (Bottom Overlay) */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#C2410C] flex items-center justify-center shrink-0 font-bold">
                    <Sparkles className="w-5 h-5 text-[#C2410C]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-[#0F3E74]">
                      Fast Everett &amp; Seattle Dispatch
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium">
                      Tankless Heaters &bull; Drains &bull; Repiping &bull; Panels
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  className="shrink-0 p-2.5 rounded-xl bg-[#0F3E74] text-white hover:bg-[#0A2E5C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-label="Call Danika Plumbing & Electric"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                </a>
              </div>
            </div>

            {/* Subtle Guarantee Seal Tag */}
            <div className="hidden sm:flex absolute -top-3 -right-3 items-center gap-1.5 bg-[#0F3E74] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md border border-blue-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>100% Workmanship Guarantee</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

