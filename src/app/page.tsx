import Link from "next/link";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import { ShieldCheck, Phone, Wrench, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans">
      {/* Top Utility Bar Preview */}
      <header className="bg-[#0A2E5C] text-white py-2 px-4 text-xs sm:text-sm font-medium border-b border-blue-900/50">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              24/7 Emergency
            </span>
            <span className="hidden sm:inline text-blue-100">
              WA Lic #{COMPANY_INFO.licenses.plumbing} & #{COMPANY_INFO.licenses.electrical}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-orange-400 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Now: {COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Engineering Foundation Banner */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-blue-700" />
          Milestone 1 — Engineering Foundation Initialized
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F3E74] tracking-tight mb-4">
          Danika Plumbing & Electric
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
          Full-service residential and commercial plumbing & electrical contractor serving Everett, Seattle, Snohomish County, and King County.
        </p>

        {/* Foundation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-8">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-left">
            <Clock className="w-6 h-6 text-orange-500 mb-2" />
            <h2 className="text-base font-bold text-slate-900">24/7 Rapid Response</h2>
            <p className="text-xs text-slate-600 mt-1">
              {VERIFIED_STATISTICS.emergencyResponseTarget} in Snohomish & King Counties.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-left">
            <Wrench className="w-6 h-6 text-blue-600 mb-2" />
            <h2 className="text-base font-bold text-slate-900">Dual Licensed Mastery</h2>
            <p className="text-xs text-slate-600 mt-1">
              Plumbing Lic #{COMPANY_INFO.licenses.plumbing} & Electrical Lic #{COMPANY_INFO.licenses.electrical}.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-left">
            <Award className="w-6 h-6 text-emerald-600 mb-2" />
            <h2 className="text-base font-bold text-slate-900">Guaranteed Trust</h2>
            <p className="text-xs text-slate-600 mt-1">
              {VERIFIED_STATISTICS.rating}★ rating across {VERIFIED_STATISTICS.totalReviewsCount}+ verified reviews.
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-500 bg-white border border-slate-200 rounded-lg p-3 max-w-lg w-full flex flex-col sm:flex-row items-center justify-between gap-2 shadow-sm">
          <span>
            <strong className="text-slate-800">Milestone 2 Completed:</strong> Design system & reusable UI components initialized.
          </span>
          <Link
            href="/style-guide"
            className="text-xs font-bold text-orange-600 hover:text-orange-700 underline shrink-0"
          >
            View Style Guide →
          </Link>
        </div>
      </main>

      {/* Verified NAP Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 px-4 text-xs border-t border-slate-800 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 Danika Plumbing & Electric. All rights reserved.
          </div>
          <div>
            Headquarters: {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip} | Tel: {COMPANY_INFO.phoneFormatted}
          </div>
        </div>
      </footer>
    </div>
  );
}
