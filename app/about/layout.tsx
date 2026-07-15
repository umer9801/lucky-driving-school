import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Certified Female Driving Instructor Edmonton — Lucky Driving School',
  description: 'Meet Lakshmi Alluri — Edmonton\'s most trusted certified female driving instructor. 10+ years experience, 500+ students trained, 95% Class 5 road test pass rate. Learn why students across Edmonton choose Lucky Driving School.',
  keywords: [
    'about Lucky Driving School Edmonton',
    'certified driving instructor Edmonton',
    'female driving instructor Edmonton',
    'Lakshmi driving instructor Edmonton',
    'patient driving instructor Edmonton',
    'best driving instructor Edmonton',
    'certified driving school Alberta',
    'Alberta Transportation approved driving school',
    'experienced driving instructor Edmonton',
  ],
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/about',
  },
  openGraph: {
    title: 'About Lucky Driving School | Certified Female Driving Instructor Edmonton',
    description: 'Meet Lakshmi Alluri — Edmonton\'s most trusted certified female driving instructor. 10+ years experience, 500+ students trained, 95% Class 5 road test pass rate.',
    url: 'https://www.luckydrivingschool.net/about',
    type: 'website',
    images: [
      {
        url: 'https://www.luckydrivingschool.net/images/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucky Driving School Edmonton - About Us',
      },
    ],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
