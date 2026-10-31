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
} from "lucide-react";
import { cn } from "@/utils/cn";

const serviceIcons: Record<string, React.ReactNode> = {
  AlertTriangle: <AlertTriangle className="w-4 h-4 text-orange-600" />,
  Flame: <Flame className="w-4 h-4 text-orange-600" />,
  Droplet: <Droplet className="w-4 h-4 text-blue-600" />,
  Wrench: <Wrench className="w-4 h-4 text-blue-600" />,
  Search: <Search className="w-4 h-4 text-blue-600" />,
  Zap: <Zap className="w-4 h-4 text-amber-600" />,
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        setIsServicesDropdownOpen(false);
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

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b",
        isScrolled
          ? "border-slate-200/90 shadow-md"
          : "border-slate-100 shadow-sm"
      )}
    >
      <Container className="flex items-center justify-between h-18 sm:h-20">
        {/* Danika Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700"
          aria-label="Main Navigation"
        >
          <Link
            href="/"
            className="px-3 py-2 rounded-lg hover:text-[#0F3E74] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              aria-expanded={isServicesDropdownOpen}
              aria-haspopup="true"
              className={cn(
                "inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                isServicesDropdownOpen
                  ? "text-[#0F3E74] bg-slate-100"
                  : "hover:text-[#0F3E74] hover:bg-slate-100/80"
              )}
            >
              <span>Services</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isServicesDropdownOpen ? "rotate-180 text-orange-600" : "text-slate-400"
                )}
              />
            </button>

            {/* Dropdown Menu Panel */}
            {isServicesDropdownOpen && (
              <div
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                className="absolute left-0 mt-1 w-84 rounded-2xl bg-white border border-slate-200/90 shadow-xl p-3 grid gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                  Plumbing &amp; Electrical Services
                </div>
                {VERIFIED_SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={`#${service.slug}`}
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    <div className="shrink-0 p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm border border-slate-200/60 transition-all">
                      {serviceIcons[service.iconName] || <Wrench className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-[#0F3E74] transition-colors flex items-center gap-1.5">
                        {service.title}
                        {service.isEmergency && (
                          <span className="text-[9px] font-extrabold uppercase tracking-wide bg-orange-100 text-orange-700 px-1.5 py-0.2 rounded">
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

          <Link
            href="#service-areas"
            className="px-3 py-2 rounded-lg hover:text-[#0F3E74] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Service Areas
          </Link>

          <Link
            href="#why-choose-us"
            className="px-3 py-2 rounded-lg hover:text-[#0F3E74] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Why Choose Us
          </Link>

          <Link
            href="#financing"
            className="px-3 py-2 rounded-lg hover:text-[#0F3E74] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Financing
          </Link>

          <Link
            href="#contact"
            className="px-3 py-2 rounded-lg hover:text-[#0F3E74] hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Direct Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct Phone Trigger */}
          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="hidden md:flex flex-col items-end text-right px-2 py-1 rounded-lg hover:bg-slate-100/80 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 group-hover:text-orange-600 transition-colors">
              <Phone className="w-3 h-3 text-orange-600" />
              24/7 Rapid Call
            </span>
            <span className="text-sm font-extrabold text-[#0F3E74] tracking-tight">
              {COMPANY_INFO.phoneFormatted}
            </span>
          </a>

          {/* Primary CTA (Accessible Safety Orange #C2410C) */}
          <LinkButton
            href="#contact"
            variant="primary"
            size="md"
            className="shadow-sm hover:shadow"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule Service
          </LinkButton>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Direct Phone Button */}
          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            aria-label={`Call emergency dispatch at ${COMPANY_INFO.phoneFormatted}`}
            className="sm:hidden p-2.5 rounded-xl bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <Phone className="w-4 h-4 text-orange-700" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[calc(4.5rem+1px)] z-50 lg:hidden bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="ml-auto w-full max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            <div className="flex flex-col gap-6">
              {/* Emergency Banner inside Mobile Menu */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600" />
                  </span>
                  <span className="text-xs font-bold text-orange-950 uppercase tracking-wide">
                    24/7 Emergency Dispatch
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-orange-800">
                  WA Lic #DANIKPL839PF
                </span>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-1 text-base font-bold text-slate-900">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-100 text-[#0F3E74] transition-colors"
                >
                  Home
                </Link>

                <div className="py-2">
                  <div className="px-4 text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                    Services
                  </div>
                  {VERIFIED_SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`#${service.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0F3E74] transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        {serviceIcons[service.iconName]}
                        {service.title}
                      </span>
                      {service.isEmergency && (
                        <span className="text-[9px] font-extrabold uppercase bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">
                          24/7
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                <Link
                  href="#service-areas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-100 hover:text-[#0F3E74] transition-colors"
                >
                  Service Areas (Snohomish &amp; King)
                </Link>

                <Link
                  href="#why-choose-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-100 hover:text-[#0F3E74] transition-colors"
                >
                  Why Choose Danika
                </Link>

                <Link
                  href="#financing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-100 hover:text-[#0F3E74] transition-colors"
                >
                  Financing Options
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-slate-100 hover:text-[#0F3E74] transition-colors"
                >
                  Contact &amp; Hours
                </Link>
              </nav>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="w-full flex items-center justify-center gap-2 bg-[#0F3E74] hover:bg-[#0A2E5C] text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call Now: {COMPANY_INFO.phoneFormatted}</span>
              </a>

              <LinkButton
                href="#contact"
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setIsMobileMenuOpen(false)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Service Online
              </LinkButton>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Licensed, Bonded &amp; Insured in Washington State</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
