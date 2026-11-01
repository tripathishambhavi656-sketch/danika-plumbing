"use client";

import React, { useState } from "react";
import { Container, SectionHeading } from "@/components/ui";
import { FREQUENTLY_ASKED_QUESTIONS, COMPANY_INFO } from "@/data/company";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { cn } from "@/utils/cn";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-24">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Got Questions? We Have Honest Answers."
          description="Everything you need to know about our 24/7 emergency dispatch, upfront pricing policy, licensing, and trade guarantees across Snohomish and King Counties."
          align="center"
        />

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto mt-10 space-y-3.5">
          {FREQUENTLY_ASKED_QUESTIONS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-2xl transition-all duration-200 border bg-white overflow-hidden shadow-xs",
                  isOpen ? "border-red-300 shadow-md ring-1 ring-red-100" : "border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-2xl"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "p-1.5 rounded-lg shrink-0 transition-colors",
                        isOpen ? "bg-red-100 text-[#991B1B]" : "bg-slate-100 text-slate-500"
                      )}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span id={`faq-question-${item.id}`} className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </span>

                  <ChevronDown
                    className={cn(
                      "w-5 h-5 shrink-0 transition-transform duration-200",
                      isOpen ? "rotate-180 text-red-600" : "text-slate-400"
                    )}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <div className="text-sm font-bold text-slate-900">Have a question not listed here?</div>
            <div className="text-xs text-slate-500 mt-0.5">Our friendly Everett dispatchers are on call 24 hours a day.</div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phonePrimary}`}
            className="inline-flex items-center gap-2 bg-[#991B1B] hover:bg-[#7F1D1D] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span>Call (425) 374-1557</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
