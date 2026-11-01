import React from "react";
import { Container, SectionHeading, Card } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import {
  Clock,
  DollarSign,
  ShieldCheck,
  Award,
  Wrench,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Clock className="w-6 h-6 text-[#991B1B]" />,
      title: "24/7 Rapid Emergency Response",
      description: `When pipes burst or drains back up, every minute counts. We provide rapid emergency dispatch across Snohomish and King Counties with a target response time of ${VERIFIED_STATISTICS.emergencyResponseTarget}.`,
      badge: "Around-the-Clock",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#991B1B]" />,
      title: "Upfront Flat-Rate Pricing",
      description: "No hidden charges, surprise fees, or overtime spikes. Our technicians thoroughly diagnose your issue and present a clear, fixed estimate for your approval before turning a single wrench.",
      badge: "100% Transparency",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#991B1B]" />,
      title: "Dual Licensed Master Trades",
      description: `We hold master licensing for both plumbing (WA Lic #${COMPANY_INFO.licenses.plumbing}) and electrical (WA Lic #${COMPANY_INFO.licenses.electrical}), allowing us to handle complex hybrid water heaters and whole-home remodels in a single coordinated visit.`,
      badge: "Dual Master License",
    },
    {
      icon: <Award className="w-6 h-6 text-[#991B1B]" />,
      title: "Guaranteed Parts & Labor Warranty",
      description: "We stand firmly behind our craftsmanship. Every repair, fixture replacement, and system installation comes backed by our comprehensive 100% parts and labor satisfaction warranty.",
      badge: "Workmanship Warranty",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#991B1B]" />,
      title: "Locally Owned Since 2009",
      description: `Founded in Everett over ${VERIFIED_STATISTICS.yearsInBusiness} years ago, we take genuine pride in treating our Puget Sound neighbors like family. Our technicians are background-checked, drug-tested, and respectful of your home.`,
      badge: "Local Everett Pride",
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#991B1B]" />,
      title: "Modern Non-Invasive Equipment",
      description: "From self-leveling HD sewer cameras to high-pressure hydro jetting and electronic acoustic leak detection, we invest in advanced diagnostic equipment that saves your yard, floors, and budget.",
      badge: "Advanced Technology",
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="The Danika Difference"
          title="Why Snohomish & King County Homeowners Trust Danika"
          description="We combine old-school craftsmanship with modern diagnostic technology and transparent upfront pricing. Here is why our customers rate us 4.7 out of 5 stars across hundreds of verified reviews."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {reasons.map((item, idx) => (
            <Card
              key={idx}
              variant="default"
              padding="default"
              className="bg-white border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-100 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#991B1B] bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Danika Standard</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
