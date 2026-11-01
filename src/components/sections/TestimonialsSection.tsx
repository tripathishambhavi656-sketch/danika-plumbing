import React from "react";
import { Container, SectionHeading, Card } from "@/components/ui";
import { VERIFIED_TESTIMONIALS, VERIFIED_STATISTICS } from "@/data/company";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-24">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Verified Customer Reviews"
          title="What Our Puget Sound Neighbors Say"
          description={`Danika Plumbing & Electric maintains a ${VERIFIED_STATISTICS.rating} out of 5 stars average across more than ${VERIFIED_STATISTICS.totalReviewsCount} verified homeowner reviews. Real feedback from real local customers.`}
          align="center"
        />

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {VERIFIED_TESTIMONIALS.map((review) => (
            <Card
              key={review.id}
              variant="default"
              padding="default"
              className="bg-slate-50/60 border-slate-200 shadow-sm flex flex-col justify-between hover:border-red-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Source */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-500" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                    Verified on {review.verifiedSource}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-red-200/60 absolute -top-3 -left-2 -z-0" />
                  <p className="relative z-10 text-sm text-slate-700 leading-relaxed italic font-normal">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{review.author}</div>
                  <div className="text-xs text-slate-500">{review.location}</div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-red-800 bg-red-100/70 px-2 py-0.5 rounded">
                    {review.serviceCategory}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Verification Seal Bottom Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-800 font-black text-lg flex items-center justify-center shrink-0">
              4.7★
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Over 350+ Five-Star Reviews</div>
              <div className="text-xs text-slate-500 mt-0.5">Google Reviews &bull; Angi Super Service &bull; Thumbtack Top Pro</div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Verified Customers</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
