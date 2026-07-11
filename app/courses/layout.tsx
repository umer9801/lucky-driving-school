import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Driving Courses & Packages | Affordable Driving Lessons in Edmonton, AB',
  description: 'Explore affordable driving lesson packages in Edmonton. From 2-hour assessments to 10+ hour mastery programs. Class 5 & Class 7 road test preparation, defensive driving, and more.',
  alternates: {
    canonical: 'https://www.luckydrivingschool.net/courses',
  },
  openGraph: {
    title: 'Driving Courses & Lesson Packages | Lucky Driving School Edmonton',
    description: 'Choose from flexible driving lesson packages starting at $100. Professional Class 5 and Class 7 road test preparation in Edmonton, Alberta.',
    url: 'https://www.luckydrivingschool.net/courses',
    type: 'website',
  },
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
