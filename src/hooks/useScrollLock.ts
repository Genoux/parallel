"use client";

import { useEffect } from "react";

/**
 * Hook that locks/unlocks scrolling
 * Also hides the scrollbar when locked
 * @param {boolean} locked - Whether scrolling should be locked
 */
export function useScrollLock(locked: boolean): void {

  useEffect(() => {

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const setScrollState = (isLocked: boolean) => {
      if (isLocked) {
        document.documentElement.style.setProperty("overflow", "hidden");
        document.documentElement.style.setProperty(
          "padding-right",
          `${scrollbarWidth}px`,
        );
        document.body.style.setProperty("overflow", "hidden");
      } else {
        document.documentElement.style.setProperty("overflow", "");
        document.documentElement.style.setProperty("padding-right", "");
        document.body.style.setProperty("overflow", "");
      }
    };

    setScrollState(locked);

    return () => {
      if (locked) {
        setScrollState(false);
      }
    };
  }, [locked]);
}
