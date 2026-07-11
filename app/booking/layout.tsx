import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Driving Lesson Online | Schedule Your Road Test Prep',
  description: 'Book your driving lesson online with Lucky Driving School Edmonton. Choose from flexible packages, select your preferred dates, and start learning with Alberta\'s top-rated certified instructor.',
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/booking',
  },
  openGraph: {
    title: 'Book a Driving Lesson Online | Lucky Driving School Edmonton',
    description: 'Schedule your professional driving lesson in Edmonton. Flexible packages from $100. Online booking available 24/7.',
    url: 'https://www.luckydrivingschool.net/booking',
    type: 'website',
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
