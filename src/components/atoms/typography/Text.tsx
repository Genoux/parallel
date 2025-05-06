import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TextProps = {
  children: ReactNode;
  size?: "base" | "medium" | "large";
  variant?: "default" | "muted";
  className?: string;
};

export default function Text({
  children,
  size = "base",
  variant = "default",
  className = "",
}: TextProps) {
  const sizeStyles = {
    base: "text-base leading-5 md:text-lg md:leading-[22px]",
    medium: "text-2xl md:text-[28px] leading-[120%]",
    large: "text-3xl leading-8 md:text-5xl md:leading-[55px]",
  };

  const variantStyles = {
    default: "",
    muted: "text-black/30",
  };

  return (
    <p
      className={cn(
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </p>
  );
}
