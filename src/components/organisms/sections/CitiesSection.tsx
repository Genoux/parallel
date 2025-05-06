"use client";
import { useState, useEffect, useRef } from 'react';
import TextTransition from '@/components/utils/TextTransition';
import Text from "@/components/atoms/typography/Text";

const cities = [
  "Montreal",
  "Denver",
  "Johannesburg",
  "Mexico City",
  "Amsterdam",
  "Paris",
  "Prague",
  "Buenos Aires",
  "Cape Town",
  "São Paulo",
];

export default function Cities() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setIndex((index) => (index + 1) % cities.length),
      1100,
    );
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(
      () => setIndex((index) => (index + 1) % cities.length),
      1100,
    );
  };

  return (
    <div className="space-y-4 w-fit cursor-default">
      <div className="flex flex-row justify-start items-start gap-1">
        <Text className="text-start pl-0.5">
          Our teams work from
        </Text>
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <TextTransition>
            {cities[index]}
          </TextTransition>
        </div>
      </div>
    </div>
  );
}
