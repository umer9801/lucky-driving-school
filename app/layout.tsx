import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luckydrivingschool.net'),
  title: {
    default: 'Lucky Driving School Edmonton | #1 Driving Lessons & Road Test Prep Alberta',
    template: '%s | Lucky Driving School Edmonton',
  },
  description: 'Lucky Driving School — Edmonton\'s #1 rated driving school. Class 5 & Class 7 road test prep, beginner to advanced lessons. 95% first-attempt pass rate. Female instructor. Book today: +1 (587) 712-4929.',
  keywords: [
    'driving school Edmonton',
    'best driving school Edmonton',
    'top rated driving school Edmonton',
    'driving lessons Edmonton',
    'driving lessons near me Edmonton',
    'learn to drive Edmonton',
    'road test preparation Edmonton',
    'Class 5 road test Edmonton',
    'Class 5 driving test prep Alberta',
    'Class 7 GDL training Edmonton',
    'GDL driving lessons Edmonton',
    'defensive driving course Edmonton',
    'affordable driving lessons Edmonton',
    'cheap driving lessons Edmonton',
    'driving instructor Edmonton',
    'female driving instructor Edmonton',
    'lady driving instructor Edmonton',
    'patient driving instructor Edmonton',
    'driving school Alberta',
    'driving courses Edmonton',
    'beginner driving lessons Edmonton',
    'nervous driver lessons Edmonton',
    'driving lessons for adults Edmonton',
    'driving school South Edmonton',
    'driving school Windermere Edmonton',
    'driving school Millwoods Edmonton',
    'driving school Terwillegar Edmonton',
    'driving school Summerside Edmonton',
    'winter driving lessons Edmonton',
    'brush up driving lessons Edmonton',
    'road test prep Alberta',
    'professional driving training Edmonton',
    'certified driving school Edmonton',
    'driving school near me',
    'pass road test first try Edmonton',
    'driving school Sherwood Park',
    'driving school St Albert',
    'driving school Beaumont',
    'driving school Leduc',
    'Lakshmi driving instructor Edmonton',
    'Lucky Driving School',
    'luckydrivingschool.net',
  ],
  authors: [{ name: 'Lucky Driving School', url: 'https://www.luckydrivingschool.net' }],
  creator: 'Lucky Driving School',
  publisher: 'Lucky Driving School',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.luckydrivingschool.net',
    languages: {
      'en-CA': 'https://www.luckydrivingschool.net',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.luckydrivingschool.net',
    siteName: 'Lucky Driving School Edmonton',
    title: 'Lucky Driving School Edmonton | #1 Driving Lessons & Road Test Prep Alberta',
    description: 'Edmonton\'s #1 rated driving school. Class 5 & Class 7 road test prep, patient female instructor, 95% pass rate. Serving Edmonton, Windermere, Millwoods & surrounding areas.',
    images: [
      {
        url: '/images/hero-driving.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucky Driving School Edmonton — Professional Driving Lessons in Alberta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Driving School Edmonton | #1 Driving Lessons & Road Test Prep',
    description: 'Edmonton\'s top-rated driving school. Class 5 & Class 7 road test prep, patient female instructor. 95% first-attempt pass rate. Book today.',
    images: ['/images/hero-driving.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  category: 'Education',
  classification: 'Driving School',
  referrer: 'origin-when-cross-origin',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// JSON-LD Structured Data for the entire site
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'DrivingSchool',
      '@id': 'https://www.luckydrivingschool.net/#organization',
      name: 'Lucky Driving School',
      alternateName: 'Lucky Driving School Edmonton',
      url: 'https://www.luckydrivingschool.net',
      logo: 'https://www.luckydrivingschool.net/images/logo.png',
      image: 'https://www.luckydrivingschool.net/images/logo.png',
      description: 'Edmonton\'s top-rated driving school offering professional driving lessons, Class 5 and Class 7 road test preparation, defensive driving courses, and winter driving training in Alberta, Canada.',
      telephone: '+1-587-712-4929',
      email: 'Lakshmi@luckydrivingschool.net',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3119 158 Street SW',
        addressLocality: 'Edmonton',
        addressRegion: 'AB',
        postalCode: 'T6W5C9',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.4469,
        longitude: -113.5614,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '07:00',
          closes: '18:30',
        },
      ],
      priceRange: '$100 - $495+',
      currenciesAccepted: 'CAD',
      paymentAccepted: 'Cash, Credit Card, Debit Card, E-Transfer',
      areaServed: [
        { '@type': 'City', name: 'Edmonton', '@id': 'https://www.wikidata.org/wiki/Q2096' },
        { '@type': 'Place', name: 'South Edmonton' },
        { '@type': 'Place', name: 'Windermere' },
        { '@type': 'Place', name: 'Summerside' },
        { '@type': 'Place', name: 'Millwoods' },
        { '@type': 'Place', name: 'Terwillegar' },
        { '@type': 'Place', name: 'Riverbend' },
        { '@type': 'Place', name: 'Sherwood Park' },
        { '@type': 'Place', name: 'St. Albert' },
        { '@type': 'Place', name: 'Beaumont' },
        { '@type': 'Place', name: 'Leduc' },
        { '@type': 'Place', name: 'Spruce Grove' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '40',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Driving Lesson Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Quick Assessment — 2 Hour Driving Lesson',
              description: 'Skills evaluation for experienced drivers preparing for their Alberta Class 5 road test.',
            },
            price: '100.00',
            priceCurrency: 'CAD',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Skill Building — 4 Hour Driving Lesson',
              description: 'Focused highway driving, parallel parking, and urban navigation training in Edmonton.',
            },
            price: '200.00',
            priceCurrency: 'CAD',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Comprehensive — 6 Hour Driving Lesson',
              description: 'Complete city driving, advanced manoeuvres, and road test route practice across Edmonton.',
            },
            price: '300.00',
            priceCurrency: 'CAD',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mastery — 10+ Hour Driving Lesson',
              description: 'Full driver training from beginner to road-test ready. Includes Class 7 GDL and Class 5 advanced preparation.',
            },
            price: '495.00',
            priceCurrency: 'CAD',
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.luckydrivingschool.net/#website',
      url: 'https://www.luckydrivingschool.net',
      name: 'Lucky Driving School Edmonton',
      description: 'Professional driving lessons and road test preparation in Edmonton, Alberta, Canada.',
      publisher: {
        '@id': 'https://www.luckydrivingschool.net/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.luckydrivingschool.net/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.luckydrivingschool.net/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much do driving lessons cost in Edmonton?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lucky Driving School offers driving lesson packages starting at $100 for a 2-hour assessment, $200 for 4 hours, $300 for 6 hours, and $495+ for a comprehensive 10+ hour mastery program. All packages include Class 5 and Class 7 road test preparation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Lucky Driving School have a female driving instructor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Lucky Driving School is taught by Lakshmi Alluri, a certified female driving instructor in Edmonton. Many students specifically choose Lucky Driving School for a patient, supportive, female instructor.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the pass rate at Lucky Driving School Edmonton?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lucky Driving School has a 95% first-attempt Class 5 road test pass rate. Over 500 students have successfully earned their Alberta driver\'s licence through our professional instruction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Lucky Driving School help me prepare for my Class 5 road test?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. All of our driving packages include Class 5 road test preparation specific to Alberta roads and regulations. We also offer Class 7 GDL training for new drivers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What areas does Lucky Driving School serve in Edmonton?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lucky Driving School serves all Edmonton areas including South Edmonton, Windermere, Millwoods, Terwillegar, Summerside, Riverbend, as well as Sherwood Park, St. Albert, Beaumont, Leduc, and Spruce Grove.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book a driving lesson with Lucky Driving School?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book a driving lesson online at luckydrivingschool.net/booking, call us at +1 (587) 712-4929, or send a message via WhatsApp. We offer flexible scheduling 7 days a week.',
          },
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.luckydrivingschool.net/#localbusiness',
      name: 'Lucky Driving School',
      image: 'https://www.luckydrivingschool.net/images/hero-driving.jpg',
      telephone: '+1-587-712-4929',
      email: 'Lakshmi@luckydrivingschool.net',
      url: 'https://www.luckydrivingschool.net',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3119 158 Street SW',
        addressLocality: 'Edmonton',
        addressRegion: 'Alberta',
        postalCode: 'T6W5C9',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.4469,
        longitude: -113.5614,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '40',
        bestRating: '5',
        worstRating: '1',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '20:00',
        },
      ],
      priceRange: '$100 - $495+',
      servesCuisine: null,
      sameAs: [
        'https://share.google/Kk5yvGHeelvt7yJck',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA" className={`${geist.variable} ${geistMono.variable} ${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
