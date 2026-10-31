import React from "react";
import Image from "next/image";
import { Container, LinkButton } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Calendar,
  CheckCircle2,
  Star,
} from "lucide-react";

/**
 * Large, impactful full-width Hero Section matching Danika Plumbing's original
 * 24/7 emergency plumbing positioning, red/maroon color scheme, and Everett, WA focus.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* 1. Full-Width Background Photographic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-plumbing.jpg"
          alt="Professional residential plumbing and tankless water heater installation in Everett, WA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.75] contrast-[1.1]"
        />

        {/* 2. High-Contrast Dark Overlay with Deep Maroon Undertone */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#3A0707]/90 via-black/85 to-[#090D16]/95"
          aria-hidden="true"
        />

        {/* 3. Subtle Texture / Vignette */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Container */}
      <Container className="relative z-10 py-16 sm:py-20 lg:py-24 text-center flex flex-col items-center">
        {/* Top Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-200 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-6 backdrop-blur-md shadow-lg animate-in fade-in duration-300">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-white">24/7 Emergency Plumbing &amp; Electrical</span>
          <span className="text-red-400">&bull;</span>
          <span className="text-red-300">Everett &amp; Seattle, WA</span>
        </div>

        {/* Prominent Centered Headline */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.1] sm:leading-[1.12] max-w-4xl drop-shadow-md"
        >
          Licensed, Local &amp; 24/7{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-amber-300 underline decoration-red-500/40 underline-offset-8">
            Emergency Plumbing
          </span>{" "}
          in Everett, WA
        </h1>

        {/* Clear Supporting Location & Multi-trade Paragraph */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed font-medium drop-shadow-sm">
          Everett and Seattle&apos;s trusted multi-trade contractor since 2009. We arrive ready to resolve burst pipes, blocked drains, water heater failures, and electrical emergencies with upfront, flat-rate pricing.
        </p>

        {/* Bulleted Guarantees */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs sm:text-sm font-bold text-slate-200">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            Upfront Honest Pricing
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            {VERIFIED_STATISTICS.emergencyResponseTarget}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            100% Workmanship Warranty
          </span>
        </div>

        {/* Prominent Call to Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg sm:max-w-none">
          {/* Primary Red CTA: Schedule Online */}
          <LinkButton
            href="#contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto px-8 py-4 text-base font-extrabold shadow-xl hover:shadow-2xl transition-all tracking-wide"
            leftIcon={<Calendar className="w-5 h-5" />}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Schedule Service Online
          </LinkButton>

          {/* Secondary Direct Call Button */}
          <LinkButton
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            variant="outline-white"
            size="lg"
            className="w-full sm:w-auto px-8 py-4 text-base font-extrabold tracking-tight transition-all"
            leftIcon={<Phone className="w-5 h-5 text-yellow-400" />}
          >
            Call: {COMPANY_INFO.phoneFormatted}
          </LinkButton>
        </div>

        {/* Compact Trust Indicators Bar directly in Hero */}
        <div className="mt-12 w-full max-w-4xl pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {/* 1. Google Rating */}
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <div className="flex items-center gap-1 text-yellow-400 mb-1">
              <Star className="w-4 h-4 fill-yellow-400" />
              <span className="font-extrabold text-sm text-white">{VERIFIED_STATISTICS.rating}★ Rated</span>
            </div>
            <span className="text-[11px] text-slate-300 font-medium">350+ Verified Reviews</span>
          </div>

          {/* 2. WA Licenses */}
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <ShieldCheck className="w-4 h-4 text-red-400 mb-1" />
            <span className="font-bold text-xs text-white uppercase tracking-wider">WA Licensed</span>
            <span className="text-[11px] font-mono text-slate-300 font-semibold mt-0.5">#{COMPANY_INFO.licenses.plumbing}</span>
          </div>

          {/* 3. 24/7 Availability */}
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <Clock className="w-4 h-4 text-red-400 mb-1" />
            <span className="font-bold text-xs text-white uppercase tracking-wider">24/7 Dispatch</span>
            <span className="text-[11px] text-slate-300 font-medium mt-0.5">Snohomish &amp; King Co.</span>
          </div>

          {/* 4. Established Business */}
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10">
            <Award className="w-4 h-4 text-yellow-400 mb-1" />
            <span className="font-bold text-xs text-white uppercase tracking-wider">Est. 2009</span>
            <span className="text-[11px] text-slate-300 font-medium mt-0.5">17+ Years in Everett</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
