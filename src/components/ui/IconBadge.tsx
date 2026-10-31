import React from "react";
import { cn } from "@/utils/cn";

export interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  variant?: "blue" | "orange" | "navy" | "subtle" | "emerald";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses = {
  blue: "bg-blue-50 text-blue-600 border border-blue-200/80",
  orange: "bg-orange-50 text-orange-600 border border-orange-200/80",
  navy: "bg-[#0F3E74]/10 text-[#0F3E74] border border-[#0F3E74]/20",
  subtle: "bg-slate-100 text-slate-700 border border-slate-200",
  emerald: "bg-emerald-50 text-emerald-600 border border-emerald-200/80",
};

const sizeClasses = {
  sm: "w-9 h-9 p-2 rounded-lg [&_svg]:w-4 [&_svg]:h-4",
  md: "w-12 h-12 p-3 rounded-xl [&_svg]:w-6 [&_svg]:h-6",
  lg: "w-16 h-16 p-4 rounded-2xl [&_svg]:w-8 [&_svg]:h-8",
};

/**
 * Reusable icon badge component providing consistent visual framing for Lucide icons.
 */
export function IconBadge({
  icon,
  variant = "blue",
  size = "md",
  className,
  ...props
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center shrink-0 transition-transform duration-200",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon}
    </div>
  );
}
