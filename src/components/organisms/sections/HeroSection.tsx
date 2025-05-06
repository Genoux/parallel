'use client';

import Logo from '@/components/icons/Logo';
import Text from '@/components/atoms/typography/Text';

export default function HeroSection() {
  return (
    <section className="pt-8 pb-40 flex flex-col gap-6 sm:gap-8 max-w-[684px] ">
      <Logo />
      <Text size="large" tag="h1">
        We are a global company made up of purpose-built remote teams, each operating under their
        own segment.
      </Text>
    </section>
  );
}
