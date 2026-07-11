import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Certified Driving Instructors in Edmonton, Alberta',
  description: 'Learn about Lucky Driving School — Edmonton\'s most trusted driving school with 10+ years of experience, Alberta Transportation approved instructors, and a 95% first-attempt road test pass rate.',
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/about',
  },
  openGraph: {
    title: 'About Lucky Driving School | Certified Driving Instructors in Edmonton',
    description: 'Discover why 500+ students trust Lucky Driving School in Edmonton, Alberta. Meet our certified, patient instructors and learn about our proven teaching methods.',
    url: 'https://www.luckydrivingschool.net/about',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
