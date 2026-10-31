import React from "react";
import { cn } from "@/utils/cn";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  inverted?: boolean;
  headingLevel?: "h1" | "h2" | "h3";
}

/**
 * Reusable SectionHeading component with support for eyebrow tags, descriptions,
 * responsive scaling, and light/dark surface modes.
 */
export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  inverted = false,
  headingLevel: HeadingTag = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-8 sm:mb-12 lg:mb-16",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        "max-w-3xl",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3",
            inverted
              ? "bg-white/10 text-orange-400 border border-white/20"
              : "bg-blue-50 text-[#0F3E74] border border-blue-200/60"
          )}
        >
          {eyebrow}
        </span>
      )}

      <HeadingTag
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
          inverted ? "text-white" : "text-[#0F3E74]"
        )}
      >
        {title}
      </HeadingTag>

      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed",
            inverted ? "text-blue-100/90" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
