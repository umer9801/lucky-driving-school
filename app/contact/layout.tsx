import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Book Driving Lessons in Edmonton, Alberta',
  description: 'Contact Lucky Driving School in Edmonton, Alberta. Call +1 587-712-4929 to book professional driving lessons, road test preparation, or ask about our affordable course packages.',
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/contact',
  },
  openGraph: {
    title: 'Contact Lucky Driving School | Edmonton, Alberta',
    description: 'Get in touch with Edmonton\'s top-rated driving school. Call, email, or visit us to book your driving lessons today.',
    url: 'https://www.luckydrivingschool.net/contact',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
