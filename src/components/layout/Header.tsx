"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container, LinkButton } from "@/components/ui";
import { BrandLogo } from "@/components/common/BrandLogo";
import { COMPANY_INFO, VERIFIED_SERVICES } from "@/data/company";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  AlertTriangle,
  Flame,
  Droplet,
  Wrench,
  Search,
  Zap,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { cn } from "@/utils/cn";

const serviceIcons: Record<string, React.ReactNode> = {
  AlertTriangle: <AlertTriangle className="w-4 h-4 text-red-600" />,
  Flame: <Flame className="w-4 h-4 text-red-600" />,
  Droplet: <Droplet className="w-4 h-4 text-blue-600" />,
  Wrench: <Wrench className="w-4 h-4 text-slate-700" />,
  Search: <Search className="w-4 h-4 text-blue-600" />,
  Zap: <Zap className="w-4 h-4 text-amber-600" />,
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlumbingDropdownOpen, setIsPlumbingDropdownOpen] = useState(false);
  const [isElectricalDropdownOpen, setIsElectricalDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const plumbingRef = useRef<HTMLDivElement>(null);
  const electricalRef = useRef<HTMLDivElement>(null);

  const plumbingServices = VERIFIED_SERVICES.filter((s) => s.id !== "electrical-services");
  const electricalService = VERIFIED_SERVICES.find((s) => s.id === "electrical-services");

  // Scroll detection for enhanced shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsPlumbingDropdownOpen(false);
        setIsElectricalDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        plumbingRef.current &&
        !plumbingRef.current.contains(event.target as Node)
      ) {
        setIsPlumbingDropdownOpen(false);
      }
      if (
        electricalRef.current &&
        !electricalRef.current.contains(event.target as Node)
      ) {
        setIsElectricalDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white transition-shadow duration-200 border-b",
        isScrolled
          ? "border-slate-200 shadow-md"
          : "border-slate-100 shadow-xs"
      )}
    >
      <Container className="flex items-center justify-between h-20 sm:h-22">
        {/* Danika Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation (Original Danika Hierarchy: Home, Plumbing, Electrical, About Us) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-bold text-slate-800"
          aria-label="Main Navigation"
        >
          <Link
            href="/"
            className="px-3.5 py-2 rounded-lg hover:text-[#991B1B] hover:bg-red-50/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            Home
          </Link>

          {/* Plumbing Services Dropdown */}
          <div className="relative" ref={plumbingRef}>
            <button
              type="button"
              onClick={() => {
                setIsPlumbingDropdownOpen((prev) => !prev);
                setIsElectricalDropdownOpen(false);
              }}
              onMouseEnter={() => setIsPlumbingDropdownOpen(true)}
              aria-expanded={isPlumbingDropdownOpen}
              aria-haspopup="true"
              className={cn(
                "inline-flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
                isPlumbingDropdownOpen
                  ? "text-[#991B1B] bg-red-50"
                  : "hover:text-[#991B1B] hover:bg-red-50/60"
              )}
            >
              <span>Plumbing Services</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isPlumbingDropdownOpen ? "rotate-180 text-red-600" : "text-slate-400"
                )}
              />
            </button>

            {/* Dropdown Menu */}
            {isPlumbingDropdownOpen && (
              <div
                onMouseLeave={() => setIsPlumbingDropdownOpen(false)}
                className="absolute left-0 mt-1 w-88 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 grid gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-red-900 border-b border-red-100 mb-1 flex items-center justify-between">
                  <span>Residential &amp; Emergency Plumbing</span>
                  <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-bold">24/7 Service</span>
                </div>
                {plumbingServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`#${service.slug}`}
                    onClick={() => setIsPlumbingDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-50/60 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    <div className="shrink-0 p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm border border-slate-200 transition-all">
                      {serviceIcons[service.iconName] || <Wrench className="w-4 h-4 text-red-600" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-[#991B1B] transition-colors flex items-center gap-1.5">
                        {service.title}
                        {service.isEmergency && (
                          <span className="text-[9px] font-extrabold uppercase bg-red-100 text-red-700 px-1.5 py-0.2 rounded">
                            24/7
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Electrical Services Dropdown */}
          <div className="relative" ref={electricalRef}>
            <button
              type="button"
              onClick={() => {
                setIsElectricalDropdownOpen((prev) => !prev);
                setIsPlumbingDropdownOpen(false);
              }}
              onMouseEnter={() => setIsElectricalDropdownOpen(true)}
              aria-expanded={isElectricalDropdownOpen}
              aria-haspopup="true"
              className={cn(
                "inline-flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
                isElectricalDropdownOpen
                  ? "text-[#991B1B] bg-red-50"
                  : "hover:text-[#991B1B] hover:bg-red-50/60"
              )}
            >
              <span>Electrical Services</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isElectricalDropdownOpen ? "rotate-180 text-red-600" : "text-slate-400"
                )}
              />
            </button>

            {/* Electrical Menu */}
            {isElectricalDropdownOpen && (
              <div
                onMouseLeave={() => setIsElectricalDropdownOpen(false)}
                className="absolute left-0 mt-1 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 grid gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-red-900 border-b border-red-100 mb-1 flex items-center justify-between">
                  <span>Licensed Electrical Contractor</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">WA #DANIKPL745CD</span>
                </div>
                {electricalService?.features.map((feature, idx) => (
                  <Link
                    key={idx}
                    href="#electrical-services"
                    onClick={() => setIsElectricalDropdownOpen(false)}
                    className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-red-50/60 hover:text-[#991B1B] transition-colors"
                  >
                    <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{feature}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#about"
            className="px-3.5 py-2 rounded-lg hover:text-[#991B1B] hover:bg-red-50/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            About Us
          </Link>

          <Link
            href="#service-areas"
            className="px-3.5 py-2 rounded-lg hover:text-[#991B1B] hover:bg-red-50/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            Service Areas
          </Link>
        </nav>

        {/* Desktop Direct Phone & Prominent Schedule Online CTA */}
        <div className="hidden sm:flex items-center gap-3.5">
          {/* Prominent Direct Phone */}
          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="hidden md:flex flex-col items-end text-right px-2.5 py-1 rounded-xl hover:bg-red-50/50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            <span className="text-[11px] font-bold text-red-700 flex items-center gap-1 uppercase tracking-wider group-hover:text-red-800 transition-colors">
              <Phone className="w-3.5 h-3.5 text-red-600" />
              24/7 Emergency Call
            </span>
            <span className="text-base font-black text-slate-900 tracking-tight group-hover:text-[#991B1B]">
              {COMPANY_INFO.phoneFormatted}
            </span>
          </a>

          {/* Prominent "Schedule Online" CTA in Red */}
          <LinkButton
            href="#contact"
            variant="primary"
            size="md"
            className="shadow-sm hover:shadow-md font-bold px-5"
            leftIcon={<Calendar className="w-4 h-4" />}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule Online
          </LinkButton>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* One-tap Emergency Mobile Call */}
          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            aria-label={`Call emergency dispatch at ${COMPANY_INFO.phoneFormatted}`}
            className="p-2.5 rounded-xl bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            <Phone className="w-4 h-4 text-white" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-red-700" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[calc(5rem+1px)] z-50 lg:hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="ml-auto w-full max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex flex-col gap-5">
              {/* Emergency Banner in Mobile Menu */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                  </span>
                  <span className="text-xs font-black text-red-950 uppercase tracking-wide">
                    24/7 Emergency Dispatch
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-red-800">
                  WA #DANIKPL839PF
                </span>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-1 text-base font-bold text-slate-900">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                  Home
                </Link>

                <div className="py-2">
                  <div className="px-4 text-xs font-black uppercase tracking-wider text-red-900 mb-1">
                    Plumbing Services
                  </div>
                  {plumbingServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`#${service.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-800 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        {serviceIcons[service.iconName]}
                        {service.title}
                      </span>
                      {service.isEmergency && (
                        <span className="text-[9px] font-extrabold uppercase bg-red-100 text-red-700 px-1.5 py-0.5 rounded">
                          24/7
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                <Link
                  href="#electrical-services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-red-50 hover:text-red-700 transition-colors flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-600" />
                  <span>Electrical Services</span>
                </Link>

                <Link
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                  About Us (Since 2009)
                </Link>

                <Link
                  href="#service-areas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                  Service Areas (Snohomish &amp; King)
                </Link>
              </nav>
            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="w-full flex items-center justify-center gap-2 bg-[#7F1D1D] hover:bg-[#581010] text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Emergency Call: {COMPANY_INFO.phoneFormatted}</span>
              </a>

              <LinkButton
                href="#contact"
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setIsMobileMenuOpen(false)}
                leftIcon={<Calendar className="w-4 h-4" />}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Service Online
              </LinkButton>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Licensed, Bonded &amp; Insured in Washington State</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
