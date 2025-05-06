import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
  className?: string;
  id?: string;
};

export default function Container({
  children,
  size = "default",
  className = "",
  id,
}: ContainerProps) {
  const baseStyles = "mx-auto w-full px-4";

  const sizeStyles = {
    default: "max-w-[1280px]",
    narrow: "max-w-[960px]",
    wide: "max-w-[1440px]",
  };

  return (
    <div className={cn(baseStyles, sizeStyles[size], className)} id={id}>
      {children}
    </div>
  );
}
