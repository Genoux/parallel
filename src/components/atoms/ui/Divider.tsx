'use client';

import { cn } from '@/lib/utils';

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <div className={cn('py-6 sm:py-8 md:py-10 w-full', className)}>
      <div className="w-full h-px bg-foreground/25" />
    </div>
  );
}
