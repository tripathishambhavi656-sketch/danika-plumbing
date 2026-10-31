import React from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "section";
  variant?: "default" | "elevated" | "interactive" | "navy" | "outline";
  padding?: "none" | "sm" | "default" | "lg";
  children: React.ReactNode;
}

const variantClasses = {
  default: "bg-white border border-slate-200 shadow-sm",
  elevated: "bg-white border border-slate-200/80 shadow-md",
  interactive:
    "bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
  navy: "bg-[#0A2E5C] border border-blue-900/60 text-white shadow-md",
  outline: "bg-transparent border border-slate-200",
};

const paddingClasses = {
  none: "p-0",
  sm: "p-4 sm:p-5",
  default: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

/**
 * Reusable Card container component with consistent borders, radii, and hover states.
 */
export function Card({
  as: Component = "div",
  variant = "default",
  padding = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl overflow-hidden",
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
