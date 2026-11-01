import React from "react";
import { Container, SectionHeading, Card } from "@/components/ui";
import { SERVICE_AREAS, COMPANY_INFO } from "@/data/company";
import { MapPin, Phone, CheckCircle2, ShieldCheck } from "lucide-react";

export function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Local Service Coverage"
          title="Serving Snohomish County &amp; North King County"
          description="Headquartered at 11015 Airport Road in Everett, Danika's mobile service fleet provides rapid emergency dispatch and scheduled maintenance across the greater North Puget Sound area."
          align="center"
        />

        {/* 2-County Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {SERVICE_AREAS.map((area, idx) => (
            <Card
              key={idx}
              variant="default"
              padding="default"
              className="bg-white border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-red-50 text-red-700 border border-red-100">
                      <MapPin className="w-5 h-5 text-[#991B1B]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{area.county}</h3>
                      <span className="text-xs text-red-700 font-bold uppercase tracking-wider">
                        {area.primaryCity}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    24/7 Dispatch
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-4">
                  {area.cities.map((city, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 text-xs font-bold text-slate-700 hover:bg-red-50 hover:text-red-800 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span className="truncate">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">
                  Target Arrival: <strong className="text-slate-800">Under 90 Minutes</strong>
                </span>

                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-800 font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Everett HQ Location Box */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-red-50 text-red-700 shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#991B1B]" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">Everett Physical Headquarters</div>
              <div className="text-xs text-slate-600 mt-0.5">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip} &bull; WA Lic #{COMPANY_INFO.licenses.plumbing}
              </div>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="inline-flex items-center gap-2 bg-[#991B1B] hover:bg-[#7F1D1D] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors shrink-0"
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            <span>(425) 374-1557</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
