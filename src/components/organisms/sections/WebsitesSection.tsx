'use client';

import Card from '@/components/molecules/Card';

const cards = [
  {
    title: 'inBeat Agency',
    subtitle: 'Content marketing',
    bg: 'bg-[#FB4F07]',
    buttonHref: 'https://inbeat.agency',
  },
  {
    title: 'Bluethings',
    subtitle: 'SEO & link building',
    bg: 'bg-[#A497FB]',
    buttonHref: 'https://bluethings.co',
  },
  {
    title: 'Content Allies',
    subtitle: 'Podcast production',
    bg: 'bg-[#89A090]',
    buttonHref: 'https://contentallies.com',
  },
  {
    title: 'AAG/H',
    subtitle: 'Recruitment service',
    bg: 'bg-[#D6D0C7]',
    buttonHref: 'https://aag.health',
  },
  {
    title: 'Showcase',
    subtitle: 'Content software',
    bg: 'bg-[#815A5E]',
    buttonHref: 'https://showca.se',
  },
  {
    title: 'Growthnotes',
    subtitle: 'Media',
    bg: 'bg-[#F2D0E0]',
    buttonHref: 'https://growthnotes.news',
  },
];

export default function WebsitesSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-6 sm:gap-y-8">
      {cards.map((card) => (
        <Card
          key={card.buttonHref}
          title={card.title}
          subtitle={card.subtitle}
          bg={card.bg}
          buttonHref={card.buttonHref}
        />
      ))}
    </div>
  );
}
