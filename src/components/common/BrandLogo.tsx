import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export interface BrandLogoProps {
  className?: string;
  variant?: "full" | "mark" | "compact";
  inverted?: boolean;
}

/**
 * BrandLogo component for Danika Plumbing & Electric.
 * Features vector SVG geometry with water droplet, pipe curve, and electrical bolt motif.
 */
export function BrandLogo({
  className,
  variant = "full",
  inverted = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Danika Plumbing & Electric Homepage"
      className={cn(
        "inline-flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg py-1 select-none",
        className
      )}
    >
      {/* Multi-trade Vector Emblem */}
      <div className="relative shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0F3E74] to-[#0A2E5C] border border-blue-400/20 shadow-sm flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Water Drop Path (Plumbing) */}
          <path
            d="M20 5C20 5 11 15.5 11 23C11 27.9706 15.0294 32 20 32C24.9706 32 29 27.9706 29 23C29 15.5 20 5 20 5Z"
            fill="#1E88E5"
            fillOpacity="0.35"
          />
          <path
            d="M20 8.5C20 8.5 13.5 17 13.5 23C13.5 26.5899 16.4101 29.5 20 29.5C23.5899 29.5 26.5 26.5899 26.5 23C26.5 17 20 8.5 20 8.5Z"
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Electrical Spark / Lightning Bolt (Electric) */}
          <path
            d="M21.5 12L15 22H20.5L18.5 30L25 20H19.5L21.5 12Z"
            fill="#C2410C"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      {variant !== "mark" && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className={cn(
                "text-lg sm:text-xl font-extrabold tracking-tight transition-colors",
                inverted
                  ? "text-white group-hover:text-orange-400"
                  : "text-[#0F3E74] group-hover:text-blue-800"
              )}
            >
              DANIKA
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100/80 px-1.5 py-0.5 rounded">
              24/7
            </span>
          </div>
          <span
            className={cn(
              "text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-0.5",
              inverted ? "text-blue-200" : "text-slate-500"
            )}
          >
            Plumbing &amp; Electric
          </span>
        </div>
      )}
    </Link>
  );
}

