import React from "react";
import { Container, SectionHeading, LinkButton } from "@/components/ui";
import { Tag, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export function FinancingOffers() {
  const coupons = [
    {
      title: "$50 OFF",
      subtitle: "Any Repair Service",
      description: "Valid for any residential plumbing or electrical repair over $250. Present coupon to your technician.",
      code: "DANIKA50",
    },
    {
      title: "$150 OFF",
      subtitle: "Tankless Water Heater Install",
      description: "Upgrade to continuous, endless hot water with a new high-efficiency Noritz or Rheem tankless unit.",
      code: "TANKLESS150",
    },
    {
      title: "$100 OFF",
      subtitle: "Mainline Hydro Jetting",
      description: "Scrub tree roots, grease, and heavy scale buildup clean from your main sewer line.",
      code: "HYDRO100",
    },
  ];

  return (
    <section id="financing" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow="Special Offers &amp; Financing"
          title="Affordable Solutions for Every Puget Sound Budget"
          description="Major plumbing and electrical emergencies shouldn't break the bank. Take advantage of our promotional coupons and flexible financing options with fast digital approval."
          align="center"
        />

        {/* Coupons Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {coupons.map((coupon, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-red-50/70 to-slate-50 border-2 border-dashed border-red-300 shadow-sm flex flex-col justify-between overflow-hidden"
            >
              {/* Scissors cut badge */}
              <div className="absolute -top-3 right-6 bg-red-700 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                <Tag className="w-3 h-3" />
                <span>Limited Time</span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#991B1B] tracking-tight mb-1">
                  {coupon.title}
                </div>
                <div className="text-base font-bold text-slate-900 mb-2">
                  {coupon.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {coupon.description}
                </p>
              </div>

              <div className="pt-4 border-t border-red-200/60 flex items-center justify-between gap-3">
                <div className="text-[11px] font-mono font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg">
                  CODE: <span className="text-red-700">{coupon.code}</span>
                </div>
                <LinkButton href="#contact" variant="primary" size="sm" className="font-bold">
                  Claim Offer
                </LinkButton>
              </div>
            </div>
          ))}
        </div>

        {/* Financing Partnership Highlight Banner (Momnt Integration) */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#581010] via-[#7F1D1D] to-[#581010] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-red-900/60">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-black uppercase tracking-wider mb-2 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flexible Consumer Financing via Momnt</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Spread Your Project Payments with Zero Upfront Strain
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-red-100 font-medium leading-relaxed">
              We partner with Momnt to offer quick, soft credit check consumer financing for major repiping, sewer replacements, and tankless water heater retrofits. Flexible monthly plans designed to fit your family budget.
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-red-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Soft Credit Check (No Score Impact)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Fast 60-Second Digital Application
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <LinkButton
              href="#contact"
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto justify-center font-bold"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Ask About Financing
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
