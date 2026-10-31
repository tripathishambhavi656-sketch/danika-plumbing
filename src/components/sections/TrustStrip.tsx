import React from "react";
import { Container } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import { Shield, Clock, DollarSign, Award } from "lucide-react";

export function TrustStrip() {
  return (
    <div className="bg-[#581010] text-white py-6 border-y border-red-900/80 shadow-inner">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {/* 1. Fully Licensed & Insured */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-red-200 border border-white/10 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white">Licensed &amp; Bonded</div>
              <div className="text-xs text-red-100/80 mt-0.5">
                Plumbing #{COMPANY_INFO.licenses.plumbing} &bull; Electrical #{COMPANY_INFO.licenses.electrical}
              </div>
            </div>
          </div>

          {/* 2. Upfront Flat-Rate Pricing */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-red-200 border border-white/10 shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white">Upfront Flat-Rate Pricing</div>
              <div className="text-xs text-red-100/80 mt-0.5">
                Clear quote before work starts &bull; Zero surprise fees
              </div>
            </div>
          </div>

          {/* 3. 24/7 Rapid Response */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-red-200 border border-white/10 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white">24/7 Rapid Dispatch</div>
              <div className="text-xs text-red-100/80 mt-0.5">
                {VERIFIED_STATISTICS.emergencyResponseTarget} throughout Snohomish &amp; King Co.
              </div>
            </div>
          </div>

          {/* 4. Guaranteed Workmanship */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-red-200 border border-white/10 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white">100% Guaranteed</div>
              <div className="text-xs text-red-100/80 mt-0.5">
                Full parts &amp; labor warranty on all installations
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
