import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { BrandLogo } from "@/components/common/BrandLogo";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import { Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Pre-Footer Emergency Callout Strip */}
      <div className="bg-[#450A0A] text-white py-4 border-b border-red-950">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="text-sm font-black tracking-tight">
              24/7 Emergency Plumbing &amp; Electrical Dispatch in Everett &amp; Seattle
            </span>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 px-4 py-2 rounded-xl font-black text-xs transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-red-900" />
            <span>Call {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Col 1: Brand & Heritage (Cols: 4) */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <BrandLogo inverted className="mb-4" />

              <p className="text-slate-400 text-xs leading-relaxed mb-4 max-w-sm">
                Locally owned and operated in Everett, WA since 2009. We provide certified residential and commercial plumbing and electrical services backed by upfront pricing and parts &amp; labor warranties.
              </p>

              <div className="space-y-1.5 font-mono text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>WA Plumbing Lic: <strong>#{COMPANY_INFO.licenses.plumbing}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>WA Electrical Lic: <strong>#{COMPANY_INFO.licenses.electrical}</strong></span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>Target Dispatch: {VERIFIED_STATISTICS.emergencyResponseTarget}</span>
              </div>
            </div>

            {/* Col 2: Plumbing Services (Cols: 3) */}
            <div className="lg:col-span-3 text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
                Plumbing Services
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="#emergency-plumbing" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span>24/7 Emergency Plumbing</span>
                  </Link>
                </li>
                <li>
                  <Link href="#water-heater-services" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span>Tankless Water Heaters</span>
                  </Link>
                </li>
                <li>
                  <Link href="#drain-cleaning" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span>Drain Cleaning &amp; Hydro Jetting</span>
                  </Link>
                </li>
                <li>
                  <Link href="#sewer-repair" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span>Sewer Line Video Inspections</span>
                  </Link>
                </li>
                <li>
                  <Link href="#repiping-leak-detection" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span>Whole-Home Copper &amp; PEX Repiping</span>
                  </Link>
                </li>
                <li>
                  <Link href="#electrical-services" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>200A Electrical Panel Upgrades</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Navigation & Community (Cols: 2) */}
            <div className="lg:col-span-2 text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
                Company &amp; Areas
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="#about" className="hover:text-red-400 transition-colors">
                    About Us (Since 2009)
                  </Link>
                </li>
                <li>
                  <Link href="#why-choose-us" className="hover:text-red-400 transition-colors">
                    Why Choose Danika
                  </Link>
                </li>
                <li>
                  <Link href="#service-areas" className="hover:text-red-400 transition-colors">
                    Snohomish County
                  </Link>
                </li>
                <li>
                  <Link href="#service-areas" className="hover:text-red-400 transition-colors">
                    King County &amp; Seattle
                  </Link>
                </li>
                <li>
                  <Link href="#financing" className="hover:text-red-400 transition-colors">
                    Coupons &amp; Financing
                  </Link>
                </li>
                <li>
                  <Link href="#reviews" className="hover:text-red-400 transition-colors">
                    Customer Reviews (4.7★)
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-red-400 transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Verified Contact & Hours (Cols: 3) */}
            <div className="lg:col-span-3 text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
                Everett Headquarters
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">Danika Plumbing &amp; Electric</span>
                    <span>{COMPANY_INFO.address.street}</span>
                    <span className="block">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="font-bold text-white hover:text-red-400 transition-colors">
                    Dispatch: {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneSecondary}`} className="hover:text-white transition-colors">
                    Office: {COMPANY_INFO.phoneSecondaryFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors truncate">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-slate-400">
                  <span className="font-bold text-white">Office Hours:</span> {COMPANY_INFO.hours.office}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Copyright Strip */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
            <div>
              &copy; 2026 Danika Plumbing LLC. All rights reserved. Washington State Contractor Registrations: DANIKPL839PF &bull; DANIKPL745CD.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/style-guide" className="hover:text-red-400 transition-colors">
                Internal Style Guide
              </Link>
              <span>&bull;</span>
              <span>Everett, WA 98204</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
