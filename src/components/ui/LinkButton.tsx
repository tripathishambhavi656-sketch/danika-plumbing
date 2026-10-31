import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { buttonVariantClasses, buttonSizeClasses, ButtonProps } from "./Button";

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isExternal?: boolean;
  children: React.ReactNode;
}

/**
 * Accessible Anchor/Link component styled identically to Button.
 * Automatically handles external URLs, telephone links, and client-side Next.js routing.
 */
export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  isExternal = false,
  className,
  children,
  ...props
}: LinkButtonProps) {
  const isDirectOrExternal =
    isExternal ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://");

  const combinedClasses = cn(
    "inline-flex items-center justify-center transition-all duration-150 select-none no-underline",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    buttonVariantClasses[variant],
    buttonSizeClasses[size],
    fullWidth ? "w-full" : "w-auto",
    className
  );

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (isDirectOrExternal) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses} {...props}>
      {content}
    </Link>
  );
}
