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
} from "lucide-react";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Emergency Plumbing",
    urgency: "Emergency (ASAP Dispatch)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
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
                  className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-slate-950 font-black px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg tracking-tight"
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
              <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Service Request Received!</h3>
                <p className="text-sm text-slate-600 max-w-md">
                  Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our Everett dispatch team will call you at <strong className="text-slate-800">{formData.phone}</strong> shortly to confirm arrival timing and service details.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 w-full max-w-sm">
                  Need immediate arrival? Call us directly at <strong>{COMPANY_INFO.phoneFormatted}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-red-700 hover:text-red-800 underline mt-2"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    />
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
                      placeholder="e.g. (425) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    />
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
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all bg-white"
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
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all bg-white"
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
                    Email Address (For Confirmation)
                  </label>
                  <input
                    id="customer-email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  />
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
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
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
                  Request Service Dispatch
                </Button>

                {/* Assurance Micro-Copy */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Upfront flat-rate pricing guaranteed
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    Zero spam &bull; Your data is confidential
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
