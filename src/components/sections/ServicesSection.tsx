import React from "react";
import { Container, SectionHeading, Card, LinkButton } from "@/components/ui";
import { VERIFIED_SERVICES, COMPANY_INFO } from "@/data/company";
import {
  AlertTriangle,
  Flame,
  Droplet,
  Wrench,
  Search,
  Zap,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  AlertTriangle: <AlertTriangle className="w-6 h-6 text-red-600" />,
  Flame: <Flame className="w-6 h-6 text-red-600" />,
  Droplet: <Droplet className="w-6 h-6 text-blue-600" />,
  Wrench: <Wrench className="w-6 h-6 text-slate-800" />,
  Search: <Search className="w-6 h-6 text-blue-600" />,
  Zap: <Zap className="w-6 h-6 text-amber-600" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Our Trade Expertise"
          title="Complete Plumbing & Electrical Services"
          description="Locally owned and trusted in Everett and Snohomish County since 2009. Our licensed master technicians resolve residential and commercial service calls with guaranteed upfront pricing."
          align="center"
        />

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {VERIFIED_SERVICES.map((service) => (
            <Card
              key={service.id}
              variant="default"
              padding="default"
              id={service.slug}
              className="flex flex-col justify-between hover:border-red-300 hover:shadow-lg transition-all duration-200 group bg-slate-50/50"
            >
              <div>
                {/* Header with Icon & Emergency Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white shadow-xs border border-slate-200 group-hover:scale-105 transition-transform duration-200">
                    {serviceIcons[service.iconName] || <Wrench className="w-6 h-6 text-red-600" />}
                  </div>

                  {service.isEmergency ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider bg-red-100 text-red-700 px-2.5 py-1 rounded-full border border-red-200">
                      24/7 Emergency
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-slate-200/70 text-slate-700 px-2.5 py-1 rounded-full">
                      Licensed &amp; Bonded
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#991B1B] transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  {service.shortDescription}
                </p>

                {/* Key Features List */}
                <ul className="space-y-2 mb-6 border-t border-slate-200/80 pt-4 text-xs sm:text-sm text-slate-700 font-medium">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <LinkButton
                  href="#contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center font-bold"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Schedule Service
                </LinkButton>

                {service.isEmergency && (
                  <a
                    href={`tel:${COMPANY_INFO.phonePrimary}`}
                    aria-label={`Call emergency line for ${service.title}`}
                    className="p-2 rounded-lg border border-red-300 text-red-700 hover:bg-red-50 transition-colors shrink-0"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
