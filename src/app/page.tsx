import Link from "next/link";
import { UtilityBar, Header, Footer, MobileActionDock } from "@/components/layout";
import {
  HeroSection,
  TrustStrip,
  ServicesSection,
  EmergencyBanner,
  WhyChooseUs,
  FinancingOffers,
  ServiceAreasSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
} from "@/components/sections";
import { Container } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans selection:bg-red-100 selection:text-red-950 pb-24 md:pb-0">
      {/* 1. Top Emergency Information Bar */}
      <UtilityBar />

      {/* 2. Main Navigation Header */}
      <Header />

      {/* 3. Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* Large, Full-Width Impactful Hero Section */}
        <HeroSection />

        {/* Credentials & Trust Strip */}
        <TrustStrip />

        {/* Comprehensive Plumbing & Electrical Services Showcase */}
        <ServicesSection />

        {/* 24/7 Rapid Emergency Response Spotlight Banner */}
        <EmergencyBanner />

        {/* The Danika Difference: Why Choose Us */}
        <WhyChooseUs />

        {/* Special Discount Coupons & Consumer Financing */}
        <FinancingOffers />

        {/* Local Service Areas Directory (Snohomish & King Counties) */}
        <ServiceAreasSection />

        {/* Verified Customer Reviews & Social Proof */}
        <TestimonialsSection />

        {/* About Us & Local Heritage Section (Anchor #about) */}
        <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-24">
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
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Plumbing Lic #{COMPANY_INFO.licenses.plumbing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
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

        {/* Accessible Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* Complete Conversion & Dispatch Booking Section */}
        <ContactSection />
      </main>

      {/* Comprehensive Verified NAP Footer */}
      <Footer />

      {/* Sticky Mobile Action Dock for Instant Dial and Booking */}
      <MobileActionDock />
    </div>
  );
}
