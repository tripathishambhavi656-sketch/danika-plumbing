import React from "react";
import { Phone, Shield, Clock } from "lucide-react";
import { Container } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";

/**
 * Slim top utility bar displaying 24/7 emergency alert, state licensing IDs,
 * and direct phone dispatch link.
 */
export function UtilityBar() {
  return (
    <div className="bg-[#0A2E5C] text-white py-2 text-xs border-b border-blue-900/60 font-medium select-none">
      <Container className="flex items-center justify-between gap-3">
        {/* Left: Emergency Status & Licensing */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
          <div className="inline-flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="font-bold text-orange-400 tracking-wide uppercase text-[11px]">
              24/7 Emergency Dispatch
            </span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 text-blue-200/90 text-[11px] truncate">
            <Shield className="w-3.5 h-3.5 text-blue-300 shrink-0" />
            <span>
              WA Lic #{COMPANY_INFO.licenses.plumbing} &bull; #{COMPANY_INFO.licenses.electrical}
            </span>
          </div>

          <div className="hidden lg:inline-flex items-center gap-1.5 text-blue-200/80 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-blue-300 shrink-0" />
            <span>Target: {VERIFIED_STATISTICS.emergencyResponseTarget}</span>
          </div>
        </div>

        {/* Right: Service Area & Instant Call Trigger */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <span className="hidden sm:inline text-blue-200/80 text-[11px]">
            Everett, Seattle &amp; Puget Sound
          </span>
          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="inline-flex items-center gap-1.5 text-white hover:text-orange-400 font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-400 rounded px-1"
            aria-label={`Call Danika Emergency Dispatch at ${COMPANY_INFO.phoneFormatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span className="tracking-tight">{COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}

