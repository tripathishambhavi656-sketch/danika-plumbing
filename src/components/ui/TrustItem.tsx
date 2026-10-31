import React from "react";
import { cn } from "@/utils/cn";
import { IconBadge, IconBadgeProps } from "./IconBadge";

export interface TrustItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  label: string;
  description?: string;
  badgeVariant?: IconBadgeProps["variant"];
  inverted?: boolean;
}

/**
 * Reusable TrustItem component displaying verified credentials, licenses, or guarantees.
 */
export function TrustItem({
  icon,
  label,
  description,
  badgeVariant = "blue",
  inverted = false,
  className,
  ...props
}: TrustItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 sm:gap-4 p-3 rounded-xl transition-all",
        inverted ? "text-white" : "text-slate-900",
        className
      )}
      {...props}
    >
      <IconBadge
        icon={icon}
        variant={badgeVariant}
        size="md"
        className={inverted ? "bg-white/10 text-orange-400 border-white/20" : undefined}
      />
      <div className="flex flex-col">
        <span
          className={cn(
            "text-sm sm:text-base font-bold leading-snug",
            inverted ? "text-white" : "text-[#0F3E74]"
          )}
        >
          {label}
        </span>
        {description && (
          <span
            className={cn(
              "text-xs sm:text-sm mt-0.5 leading-relaxed",
              inverted ? "text-blue-100/80" : "text-slate-600"
            )}
          >
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
