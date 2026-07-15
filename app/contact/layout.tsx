import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Lucky Driving School Edmonton | Call +1 (587) 712-4929',
  description: 'Contact Lucky Driving School in Edmonton, Alberta. Call or WhatsApp +1 (587) 712-4929 to book driving lessons, Class 5 road test prep, or ask about our packages. Available 7 days a week.',
  keywords: [
    'contact Lucky Driving School Edmonton',
    'book driving lesson Edmonton',
    'driving school phone number Edmonton',
    'driving school near me Edmonton',
    'driving instructor contact Edmonton',
    'schedule driving lesson Edmonton',
  ],
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/contact',
  },
  openGraph: {
    title: 'Contact Lucky Driving School | Edmonton, Alberta — +1 (587) 712-4929',
    description: 'Get in touch with Edmonton\'s top-rated driving school. Call, WhatsApp, or email us to book your driving lessons today. Available 7 days a week.',
    url: 'https://www.luckydrivingschool.net/contact',
    type: 'website',
    images: [
      {
        url: 'https://www.luckydrivingschool.net/images/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Lucky Driving School Edmonton',
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
