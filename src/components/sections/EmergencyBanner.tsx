import React from "react";
import { Container, LinkButton } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import { Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="bg-gradient-to-r from-[#7F1D1D] via-[#991B1B] to-[#7F1D1D] text-white py-12 sm:py-16 border-b border-red-950/40 relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Left Text */}
          <div className="flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-red-200 text-xs font-black uppercase tracking-wider mb-3 border border-white/10">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
              </span>
              <span>24/7 Live Emergency Dispatch</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Plumbing or Electrical Emergency?
            </h2>

            <p className="mt-2 text-sm sm:text-base text-red-100 max-w-xl font-medium leading-relaxed">
              Don&apos;t wait for catastrophic water or electrical damage. Our Everett emergency technicians are dispatched rapidly across Snohomish and King Counties.
            </p>

            <div className="mt-3 flex items-center gap-4 text-xs font-bold text-red-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-yellow-400" />
                {VERIFIED_STATISTICS.emergencyResponseTarget}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                WA Lic #{COMPANY_INFO.licenses.plumbing}
              </span>
            </div>
          </div>

          {/* Right Action Callout */}
          <div className="flex flex-col sm:flex-row md:flex-col items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-slate-950 font-black px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-base tracking-tight"
            >
              <Phone className="w-5 h-5 text-red-900 shrink-0" />
              <span>Call: {COMPANY_INFO.phoneFormatted}</span>
            </a>

            <LinkButton
              href="#contact"
              variant="outline-white"
              size="md"
              className="w-full sm:w-auto justify-center font-bold"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Book Service Online
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
