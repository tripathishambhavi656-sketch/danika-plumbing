import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "maroon" | "navy" | "secondary" | "outline" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const buttonVariantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#B91C1C] hover:bg-[#991B1B] active:bg-[#7F1D1D] text-white shadow-sm hover:shadow-md focus-visible:ring-red-600",
  maroon:
    "bg-[#7F1D1D] hover:bg-[#581010] active:bg-[#450A0A] text-white shadow-sm hover:shadow-md focus-visible:ring-red-800",
  navy:
    "bg-[#0F172A] hover:bg-[#1E293B] active:bg-[#020617] text-white shadow-sm hover:shadow-md focus-visible:ring-slate-700",
  secondary:
    "bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-900 border border-slate-300 focus-visible:ring-slate-400",
  outline:
    "bg-transparent border-2 border-[#7F1D1D] text-[#7F1D1D] hover:bg-[#7F1D1D] hover:text-white active:bg-[#581010] focus-visible:ring-red-700",
  "outline-white":
    "bg-white/10 hover:bg-white active:bg-white/90 border-2 border-white text-white hover:text-slate-950 shadow-sm focus-visible:ring-white backdrop-blur-xs",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-slate-400",
};

export const buttonSizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-xs px-3.5 py-1.5 min-h-[36px] rounded-lg gap-1.5 font-semibold",
  md: "text-sm px-5 py-2.5 min-h-[44px] rounded-xl gap-2 font-semibold",
  lg: "text-base px-6 sm:px-7 py-3 sm:py-3.5 min-h-[48px] rounded-xl gap-2.5 font-bold tracking-tight",
};

/**
 * Accessible, high-contrast button component with semantic variants and touch-target optimization.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-150 select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]",
        buttonVariantClasses[variant],
        buttonSizeClasses[size],
        fullWidth ? "w-full" : "w-auto",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
}
