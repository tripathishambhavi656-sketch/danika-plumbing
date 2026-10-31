import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "navy" | "secondary" | "outline" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const buttonVariantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-orange-700 hover:bg-orange-800 active:bg-orange-900 text-white shadow-sm hover:shadow-md focus-visible:ring-orange-600",
  navy:
    "bg-[#0F3E74] hover:bg-[#0A2E5C] active:bg-[#071F3D] text-white shadow-sm hover:shadow-md focus-visible:ring-blue-700",
  secondary:
    "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow-md focus-visible:ring-blue-500",
  outline:
    "bg-transparent border-2 border-[#0F3E74] text-[#0F3E74] hover:bg-[#0F3E74] hover:text-white active:bg-[#0A2E5C] focus-visible:ring-[#0F3E74]",
  "outline-white":
    "bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-[#0F3E74] active:bg-white/90 focus-visible:ring-white",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-slate-400",
};

export const buttonSizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-xs px-3.5 py-1.5 min-h-[36px] rounded-lg gap-1.5 font-semibold",
  md: "text-sm px-5 py-2.5 min-h-[44px] rounded-xl gap-2 font-semibold",
  lg: "text-base px-6 sm:px-7 py-3 sm:py-3.5 min-h-[48px] rounded-xl gap-2.5 font-bold",
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
