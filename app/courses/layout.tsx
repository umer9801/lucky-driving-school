import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Driving Lesson Packages Edmonton | Class 5 & Class 7 Road Test Prep — From $100',
  description: 'Affordable driving lesson packages in Edmonton starting at $100. Class 5 road test prep, Class 7 GDL training, beginner to advanced lessons. 95% first-attempt pass rate. Book online today.',
  keywords: [
    'driving lesson packages Edmonton',
    'affordable driving lessons Edmonton',
    'driving courses Edmonton prices',
    'Class 5 road test preparation Edmonton',
    'Class 7 GDL lessons Edmonton',
    'driving school packages Alberta',
    'cheap driving lessons Edmonton',
    'beginner driving lessons Edmonton',
    'advanced driving lessons Edmonton',
    '2 hour driving lesson Edmonton',
    '10 hour driving package Edmonton',
    'road test prep course Edmonton',
    'driving lesson cost Edmonton',
  ],
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/courses',
  },
  openGraph: {
    title: 'Driving Lesson Packages Edmonton | From $100 — Lucky Driving School',
    description: 'Choose from flexible driving lesson packages starting at $100. Class 5 & Class 7 road test preparation. 95% first-attempt pass rate in Edmonton, Alberta.',
    url: 'https://www.luckydrivingschool.net/courses',
    type: 'website',
    images: [
      {
        url: 'https://www.luckydrivingschool.net/images/courses-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Driving Lesson Packages Edmonton - Lucky Driving School',
      },
    ],
  },
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
