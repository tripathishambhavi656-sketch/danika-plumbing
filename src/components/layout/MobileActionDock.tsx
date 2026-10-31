"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function MobileActionDock() {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl transition-transform"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Direct Call Button (48px touch target) */}
        <a
          href={`tel:${COMPANY_INFO.phonePrimary}`}
          className="min-h-[48px] flex items-center justify-center gap-2 bg-[#991B1B] hover:bg-[#7F1D1D] active:bg-[#581010] text-white px-3 py-2.5 rounded-xl font-bold text-xs shadow-md transition-colors"
          aria-label={`Call Danika Plumbing at ${COMPANY_INFO.phoneFormatted}`}
        >
          <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        {/* Schedule Online Anchor (48px touch target) */}
        <Link
          href="#contact"
          className="min-h-[48px] flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white px-3 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors"
          aria-label="Jump to online dispatch booking form"
        >
          <Calendar className="w-4 h-4 text-red-400 shrink-0" />
          <span className="truncate">Schedule Online</span>
        </Link>
      </div>
    </aside>
  );
}
