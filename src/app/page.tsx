'use client';

import Container from '@/components/atoms/layout/Container';
import Cities from '@/components/organisms/sections/CitiesSection';
import WebsitesSection from '@/components/organisms/sections/WebsitesSection';
import HeroSection from '@/components/organisms/sections/HeroSection';
import Divider from '@/components/atoms/ui/Divider';
import Text from '@/components/atoms/typography/Text';

export default function Home() {

  return (
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
  );
}
