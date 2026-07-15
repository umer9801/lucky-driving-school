import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Driving Lesson Edmonton | Online Booking — Lucky Driving School',
  description: 'Book your driving lesson online with Lucky Driving School Edmonton. Choose a Class 5 or Class 7 package, pick your preferred date, and start driving with Alberta\'s most trusted certified instructor. Easy online booking available.',
  keywords: [
    'book driving lesson Edmonton',
    'online driving lesson booking Edmonton',
    'schedule driving lesson Edmonton Alberta',
    'book road test preparation Edmonton',
    'driving lesson appointment Edmonton',
    'Class 5 driving lesson booking Alberta',
    'Class 7 GDL booking Edmonton',
  ],
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/booking',
  },
  openGraph: {
    title: 'Book a Driving Lesson Online | Lucky Driving School Edmonton',
    description: 'Schedule your professional driving lesson in Edmonton. Flexible packages from $100. Class 5 & Class 7 prep. Easy online booking available 24/7.',
    url: 'https://www.luckydrivingschool.net/booking',
    type: 'website',
    images: [
      {
        url: 'https://www.luckydrivingschool.net/images/hero-driving.jpg',
        width: 1200,
        height: 630,
        alt: 'Book a Driving Lesson in Edmonton - Lucky Driving School',
      },
    ],
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
