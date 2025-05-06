"use client";
import Container from "@/components/atoms/layout/Container";
import Cities from "@/components/organisms/sections/CitiesSection";
import WebsitesSection from "@/components/organisms/sections/WebsitesSection";
import HeroSection from "@/components/organisms/sections/HeroSection";
import Divider from "@/components/atoms/ui/Divider";
import Text from "@/components/atoms/typography/Text";
import { motion } from "motion/react";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLocked, setIsLocked] = useState(true);

  useScrollLock(isLocked);

  useEffect(() => {
    setIsLocked(true);
    return () => {
      setIsLocked(false);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: Math.random() * 10 - 5 }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
          ease: [0.34, 1.56, 0.64, 1],
          delay: 0.5,
          duration: 1.5,
        }
      }}
      onAnimationComplete={() => {
        setIsLocked(false);
      }}
    >
      <Container>
        <HeroSection />
        <section className="space-y-4 pb-12">
          <Cities />
          <WebsitesSection />
        </section>
        <Divider />
        <section className="flex flex-col gap-6 sm:gap-8 max-w-[300px] md:max-w-[500px] pb-12">
          <Text size="large" tag="h2">
            {`Parallel's official brand & website is in progress`}
          </Text>
        </section>
      </Container>
    </motion.div>
  );
}