import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TextProps = {
  children: ReactNode;
  size?: "base" | "medium" | "large";
  variant?: "default" | "muted";
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
};

export default function Text({
  children,
  size = "base",
  variant = "default",
  className = "",
  tag = "p",
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

  const Tag = tag;

  return (
    <Tag
      className={cn(
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
