import Link from "next/link";
import { UtilityBar, Header } from "@/components/layout";
import {
  HeroSection,
  TrustStrip,
  ServicesSection,
  EmergencyBanner,
} from "@/components/sections";
import { Container } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import { Phone, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans selection:bg-red-100 selection:text-red-950">
      {/* 1. Top Emergency Information Bar */}
      <UtilityBar />

      {/* 2. Main Navigation Header */}
      <Header />

      {/* 3. Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* Large, Full-Width Impactful Hero Section */}
        <HeroSection />

        {/* Milestone 4: Credentials & Trust Strip */}
        <TrustStrip />

        {/* Milestone 4: Comprehensive Plumbing & Electrical Services Showcase */}
        <ServicesSection />

        {/* Milestone 4: 24/7 Rapid Emergency Response Spotlight Banner */}
        <EmergencyBanner />

        {/* About Us & Local Heritage Section (Anchor #about) */}
        <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-100 px-3 py-1 rounded-full border border-red-200">
                  Established in Everett in 2009
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3 mb-4">
                  Everett&apos;s Trusted Neighborhood Multi-Trade Contractor
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal mb-4">
                  Originally founded in 2009 as Danika Plumbing LLC, our team has grown to provide comprehensive residential and commercial plumbing and licensed electrical services under one roof. Led with pride by local tradespeople, we back every repair with parts and labor warranties and honest upfront pricing.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Plumbing Lic #{COMPANY_INFO.licenses.plumbing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Electrical Lic #{COMPANY_INFO.licenses.electrical}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center flex flex-col items-center">
                <div className="text-3xl font-black text-[#991B1B]">{VERIFIED_STATISTICS.yearsInBusiness}+ Years</div>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">Serving Snohomish &amp; King Counties</div>
                <div className="mt-4 pt-4 border-t border-slate-100 w-full text-xs text-slate-500">
                  Office: {COMPANY_INFO.hours.office}
                </div>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800 underline"
                >
                  <span>Contact Our Office</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Milestone Verification Anchor */}
        <section id="contact" className="py-10 bg-white border-b border-slate-200">
          <Container>
            <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-red-50/60 border border-red-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  Ready to Schedule Service or Need Emergency Assistance?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Call our Everett dispatch center 24/7 or speak with our friendly office staff.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  className="inline-flex items-center gap-2 bg-[#991B1B] hover:bg-[#7F1D1D] text-white px-5 py-3 rounded-xl font-bold text-sm shadow transition-colors"
                >
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Verified NAP Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 text-xs border-t border-slate-800">
        <Container className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="text-lg font-black text-white tracking-tight">DANIKA PLUMBING &amp; ELECTRIC</div>
              <div className="text-red-400 font-bold text-xs mt-1">Licensed, Bonded &amp; Insured in Washington State</div>
              <p className="text-slate-400 mt-2 text-xs leading-relaxed">
                Dedicated to honest craftsmanship, upfront pricing, and fast emergency response across Snohomish County and King County since 2009.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">Everett Headquarters</div>
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</span>
              </div>
              <div className="mt-2 text-slate-400">
                Office Hours: {COMPANY_INFO.hours.office}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">Licenses &amp; Contact</div>
              <div>Plumbing License: <span className="font-mono text-slate-300 font-bold">#{COMPANY_INFO.licenses.plumbing}</span></div>
              <div>Electrical License: <span className="font-mono text-slate-300 font-bold">#{COMPANY_INFO.licenses.electrical}</span></div>
              <div className="mt-2 text-slate-300 font-bold flex items-center justify-center md:justify-start gap-1.5">
                <Phone className="w-3.5 h-3.5 text-yellow-400" />
                <span>Direct Dispatch: {COMPANY_INFO.phoneFormatted}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-slate-500">
            <div>
              &copy; 2026 Danika Plumbing LLC. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/style-guide" className="hover:text-red-400 transition-colors">
                Internal Style Guide
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
