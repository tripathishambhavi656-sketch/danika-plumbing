"use client";

import React, { useState } from "react";
import { Container, SectionHeading, Button } from "@/components/ui";
import { COMPANY_INFO, VERIFIED_STATISTICS } from "@/data/company";
import {
  Phone,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Send,
  AlertCircle,
} from "lucide-react";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Emergency Plumbing",
    urgency: "Emergency (ASAP Dispatch)",
    message: "",
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters).";
    }

    // Validate Phone (at least 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required for dispatch confirmation.";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number (e.g., (425) 374-1557).";
    }

    // Validate Optional Email if provided
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address (e.g., name@example.com).";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Emergency Plumbing",
      urgency: "Emergency (ASAP Dispatch)",
      message: "",
    });
    setErrors({});
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Request Service or Dispatch"
          title="Schedule Your Service or Call Our 24/7 Dispatch"
          description="Whether you are dealing with a burst pipe in the middle of the night or planning a tankless water heater upgrade, our licensed Everett technicians are ready."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Call & Emergency Credentials (Cols: 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Phone Emergency Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#7F1D1D] via-[#991B1B] to-[#581010] text-white shadow-xl border border-red-900/60">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-red-200 text-xs font-black uppercase tracking-wider mb-4 border border-white/10">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
                </span>
                <span>Immediate Assistance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Active Emergency?
              </h3>

              <p className="mt-2 text-sm text-red-100 font-medium leading-relaxed">
                For active floods, ruptured water heaters, sewer backups, or electrical hazards, skip the form and call our 24/7 live dispatcher immediately.
              </p>

              <div className="mt-6">
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  aria-label={`Call Danika 24/7 Emergency Dispatch at ${COMPANY_INFO.phoneFormatted}`}
                  className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-slate-950 font-black px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg tracking-tight hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                >
                  <Phone className="w-5 h-5 text-red-900 shrink-0" />
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-red-800/60 flex items-center justify-between text-xs text-red-200">
                <span>{VERIFIED_STATISTICS.emergencyResponseTarget}</span>
                <span>&bull;</span>
                <span>Snohomish &amp; King Counties</span>
              </div>
            </div>

            {/* Headquarters & Credentials Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-red-700 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#991B1B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Physical Headquarters</div>
                  <div className="text-sm font-bold text-slate-900">
                    {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-red-700 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#991B1B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business &amp; Office Hours</div>
                  <div className="text-sm font-bold text-slate-900">Emergency Dispatch: 24/7/365</div>
                  <div className="text-xs text-slate-600 mt-0.5">Office: {COMPANY_INFO.hours.office}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-red-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#991B1B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Contractor Licenses</div>
                  <div className="text-xs font-mono font-bold text-slate-800">Plumbing: #{COMPANY_INFO.licenses.plumbing}</div>
                  <div className="text-xs font-mono font-bold text-slate-800">Electrical: #{COMPANY_INFO.licenses.electrical}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Online Service Request Form (Cols: 7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
            {formSubmitted ? (
              <div
                role="status"
                aria-live="polite"
                className="p-6 sm:p-8 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-extrabold uppercase tracking-wide">
                  <span>Demo Submission Confirmed</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  Thank You, {formData.name}!
                </h3>

                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  Your demonstration inquiry for <strong className="text-slate-800">{formData.service}</strong> ({formData.urgency}) was processed cleanly. This redesign prototype operates in demonstration mode and does not send data to a live backend.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 w-full max-w-md text-left space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-red-700" />
                    <span>For Real Service at Your Everett or Seattle Home:</span>
                  </div>
                  <p className="text-slate-600">
                    Contact Danika Plumbing &amp; Electric directly at{" "}
                    <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="font-bold text-red-700 hover:underline">
                      {COMPANY_INFO.phoneFormatted}
                    </a>{" "}
                    for live 24/7 emergency dispatch.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold text-red-700 hover:text-red-800 underline mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded px-2 py-1"
                >
                  Reset &amp; Test Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800">
                    <Calendar className="w-4 h-4 text-red-700" />
                    <span>Online Service Dispatch Booking</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Tell Us About Your Project or Repair
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="customer-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "customer-name-error" : undefined}
                      autoComplete="name"
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) {
                          setErrors({ ...errors, name: undefined });
                        }
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.name
                          ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100 bg-red-50/20"
                          : "border-slate-300 focus:border-[#991B1B] focus:ring-2 focus:ring-red-100"
                      }`}
                    />
                    {errors.name && (
                      <p id="customer-name-error" role="alert" className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="customer-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      required
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "customer-phone-error" : undefined}
                      autoComplete="tel"
                      placeholder="e.g. (425) 374-1557"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) {
                          setErrors({ ...errors, phone: undefined });
                        }
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.phone
                          ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100 bg-red-50/20"
                          : "border-slate-300 focus:border-[#991B1B] focus:ring-2 focus:ring-red-100"
                      }`}
                    />
                    {errors.phone && (
                      <p id="customer-phone-error" role="alert" className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Category */}
                  <div>
                    <label htmlFor="customer-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      id="customer-service"
                      required
                      aria-required="true"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#991B1B] focus:ring-2 focus:ring-red-100 outline-none transition-all bg-white"
                    >
                      <option value="Emergency Plumbing">24/7 Emergency Plumbing</option>
                      <option value="Water Heaters">Water Heater Repair / Tankless</option>
                      <option value="Drain Cleaning">Drain Cleaning &amp; Hydro Jetting</option>
                      <option value="Sewer Line">Sewer Line Repair &amp; Camera</option>
                      <option value="Repiping">Whole-Home Repiping &amp; Leaks</option>
                      <option value="Electrical Services">Electrical Panel Upgrades &amp; EV</option>
                    </select>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label htmlFor="customer-urgency" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Timeframe / Urgency *
                    </label>
                    <select
                      id="customer-urgency"
                      required
                      aria-required="true"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#991B1B] focus:ring-2 focus:ring-red-100 outline-none transition-all bg-white"
                    >
                      <option value="Emergency (ASAP Dispatch)">🚨 Emergency (ASAP Dispatch)</option>
                      <option value="Today">Same-Day Service</option>
                      <option value="This Week">Sometime This Week</option>
                      <option value="Planned / Quote">Planned Upgrade / Estimate</option>
                    </select>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="customer-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address (Optional Confirmation)
                  </label>
                  <input
                    id="customer-email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "customer-email-error" : undefined}
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) {
                        setErrors({ ...errors, email: undefined });
                      }
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                      errors.email
                        ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100 bg-red-50/20"
                        : "border-slate-300 focus:border-[#991B1B] focus:ring-2 focus:ring-red-100"
                    }`}
                  />
                  {errors.email && (
                    <p id="customer-email-error" role="alert" className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message / Notes */}
                <div>
                  <label htmlFor="customer-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Brief Description of the Issue
                  </label>
                  <textarea
                    id="customer-message"
                    rows={3}
                    placeholder="Describe your plumbing or electrical concern (e.g., leaking water heater tank, gurgling kitchen sink, or need an EV charger estimate)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#991B1B] focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="font-black text-base shadow-md hover:shadow-lg transition-all"
                  leftIcon={<Send className="w-4 h-4" />}
                >
                  Submit Service Request
                </Button>

                {/* Assurance Micro-Copy */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Upfront flat-rate pricing guaranteed
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    Interactive prototype demonstration
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
