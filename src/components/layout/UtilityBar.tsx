import React from "react";
import { Phone, Shield, Clock } from "lucide-react";
import { Container } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";

/**
 * Top utility information bar reflecting Danika's original emergency service positioning.
 */
export function UtilityBar() {
  return (
    <div className="bg-[#450A0A] text-white py-2 text-xs border-b border-red-900/60 font-medium select-none">
      <Container className="flex items-center justify-between gap-3">
        {/* Left: 24/7 Emergency & Licensing */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
          <div className="inline-flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="font-extrabold text-red-200 tracking-wider uppercase text-[11px]">
              24/7 Emergency Service
            </span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 text-red-100/90 text-[11px] truncate">
            <Shield className="w-3.5 h-3.5 text-red-300 shrink-0" />
            <span>
              WA Lic #{COMPANY_INFO.licenses.plumbing} &bull; #{COMPANY_INFO.licenses.electrical}
            </span>
          </div>

          <div className="hidden lg:inline-flex items-center gap-1.5 text-red-200/80 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-red-300 shrink-0" />
            <span>Everett Dispatch: {VERIFIED_STATISTICS.emergencyResponseTarget}</span>
          </div>
        </div>

        {/* Right: Geographic Relevance & Click-to-Call */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <span className="hidden sm:inline text-red-200/80 text-[11px]">
            Serving Everett, Seattle &amp; Puget Sound
          </span>
          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="inline-flex items-center gap-1.5 text-white hover:text-red-200 font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-400 rounded px-1"
            aria-label={`Call Danika Emergency Plumbing at ${COMPANY_INFO.phoneFormatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span className="tracking-tight font-extrabold">{COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
