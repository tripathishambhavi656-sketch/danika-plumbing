import React from "react";
import { cn } from "@/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "aside";
  variant?: "white" | "slate" | "navy" | "navy-dark" | "muted";
  spacing?: "none" | "sm" | "default" | "lg";
  id?: string;
  children: React.ReactNode;
}

const variantClasses = {
  white: "bg-white text-slate-900",
  slate: "bg-slate-50 text-slate-900 border-y border-slate-200/80",
  muted: "bg-slate-100 text-slate-900",
  navy: "bg-[#0F3E74] text-white",
  "navy-dark": "bg-[#0A2E5C] text-white",
};

const spacingClasses = {
  none: "py-0",
  sm: "py-8 sm:py-12",
  default: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-24 lg:py-28",
};

/**
 * Reusable Section component enforcing semantic layouts and consistent vertical rhythm.
 */
export function Section({
  as: Component = "section",
  variant = "white",
  spacing = "default",
  className,
  children,
  id,
  ...props
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        "relative w-full overflow-hidden transition-colors",
        variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
