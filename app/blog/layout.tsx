import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Driving Tips & Resources Blog | Lucky Driving School Edmonton',
  description: 'Expert driving tips, road test guides, and Alberta driving resources from Lucky Driving School Edmonton. Class 5 prep, winter driving, beginner tips and more.',
  keywords: [
    'driving tips Edmonton',
    'Class 5 road test tips Edmonton',
    'Alberta driving guide',
    'winter driving Edmonton',
    'parallel parking tips',
    'nervous driver tips Edmonton',
    'driving school blog Edmonton',
    'Class 7 GDL Alberta guide',
    'road test mistakes Edmonton',
    'female driving instructor Edmonton',
  ],
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/blog',
  },
  openGraph: {
    title: 'Driving Tips & Resources Blog | Lucky Driving School Edmonton',
    description: 'Expert driving tips, road test guides, and Alberta driving resources from Lucky Driving School Edmonton.',
    url: 'https://www.luckydrivingschool.net/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.luckydrivingschool.net/images/hero-driving.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucky Driving School Edmonton Blog — Driving Tips & Resources',
      },
    ],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
