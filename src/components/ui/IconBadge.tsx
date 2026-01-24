import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

interface IconBadgeProps {
  variant: "orange" | "teal" | "gray";
  shape: "circle" | "square";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export function IconBadge({
  variant,
  shape,
  size = "md",
  children,
  className,
}: IconBadgeProps) {
  const variantClasses = {
    orange: "bg-[#FFF3B7]",
    teal: "bg-teal-100",
    gray: "bg-gray-100",
  };

  const iconColorClasses = {
    orange: "text-[#CE890E]",
    teal: "text-teal-700",
    gray: "text-gray-600",
  };

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-2xl",
  };

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const iconSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        variantClasses[variant],
        shapeClasses[shape],
        sizeClasses[size],
        className,
      )}
    >
      <div
        className={cn(iconColorClasses[variant], iconSizeClasses[size])}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
