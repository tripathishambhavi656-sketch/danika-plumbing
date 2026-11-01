import Link from "next/link";
import { Container } from "@/components/ui";
import { BrandLogo } from "@/components/common/BrandLogo";
import { COMPANY_INFO } from "@/data/company";
import { Phone, Home, Wrench, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Danika Plumbing & Electric",
  description: "The page you are looking for cannot be found. Contact Danika Plumbing & Electric for 24/7 emergency dispatch in Everett & Seattle.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans selection:bg-red-100 selection:text-red-950">
      {/* Minimal Header */}
      <header className="border-b border-slate-200 py-4 bg-white">
        <Container className="flex items-center justify-between">
          <BrandLogo />
          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="inline-flex items-center gap-2 bg-[#991B1B] hover:bg-[#7F1D1D] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-sm transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span>24/7 Dispatch: {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </Container>
      </header>

      {/* Main 404 Hero */}
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24">
        <Container>
          <div className="max-w-xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-black uppercase tracking-wider mb-4 border border-red-200">
              <Wrench className="w-3.5 h-3.5 text-red-700" />
              <span>Error 404 &bull; Pipe Not Found</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Looks Like This Pipe Is Broken
            </h1>

            <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
              The page you are trying to visit might have been moved, renamed, or is temporarily unavailable. If you are experiencing an urgent plumbing or electrical issue, our Everett dispatch team is available 24/7.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#991B1B] hover:bg-[#7F1D1D] active:bg-[#581010] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-100 text-slate-800 px-6 py-3.5 rounded-xl font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-red-700" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-slate-200 w-full text-left">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 text-center">
                Popular Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                <Link href="/#emergency-plumbing" className="p-2.5 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-700 transition-colors flex items-center justify-between">
                  <span>24/7 Emergency Plumbing</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link href="/#water-heater-services" className="p-2.5 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-700 transition-colors flex items-center justify-between">
                  <span>Water Heater Repair &amp; Tankless</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link href="/#drain-cleaning" className="p-2.5 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-700 transition-colors flex items-center justify-between">
                  <span>Drain Cleaning &amp; Hydro Jetting</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link href="/#electrical-services" className="p-2.5 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-700 transition-colors flex items-center justify-between">
                  <span>Licensed Electrical Panel Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer Minimal */}
      <footer className="py-6 border-t border-slate-200 text-center text-xs text-slate-500 bg-slate-50">
        <Container>
          &copy; 2026 Danika Plumbing LLC. Licensed Washington Contractor #DANIKPL839PF &bull; #DANIKPL745CD.
        </Container>
      </footer>
    </div>
  );
}
