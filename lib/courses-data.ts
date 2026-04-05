export interface Course {
  id: string
  name: string
  description: string
  duration: string
  category: 'driving-only' | 'combo' | 'complete-package'
  features: string[]
  pricing: {
    standard: number
    silver: number
    gold: number
  }
}

export const courses: Course[] = [
  {
    id: '2-hours',
    name: '2 Hours Driving Only',
    description: '2-Hour Package – Quick Skills Test',
    duration: '2 hours',
    category: 'driving-only',
    features: [
      'Assess current driving skills',
      'Identify strengths & improvement areas',
      'Basic maneuvering & control checks',
      'Prep for advanced sessions',
    ],
    pricing: {
      standard: 100,
      silver: 105,
      gold: 108,
    },
  },
  {
    id: '4-hours',
    name: '4 Hours Driving Only',
    description: '4-Hour Package – Skill Improvement',
    duration: '4 hours',
    category: 'driving-only',
    features: [
      'Highway driving practice',
      'Turning techniques & cornering',
      'Parking practice (standard lots)',
      'Correcting common mistakes',
    ],
    pricing: {
      standard: 200,
      silver: 210,
      gold: 216,
    },
  },
  {
    id: '6-hours',
    name: '6 Hours Driving Only',
    description: '6-Hour Package – Comprehensive Training',
    duration: '6 hours',
    category: 'driving-only',
    features: [
      'Downtown & city driving',
      'Highway merges & lane changes',
      'Parallel & standard parking',
      'Advanced turns & intersections',
    ],
    pricing: {
      standard: 300,
      silver: 315,
      gold: 324,
    },
  },
  {
    id: '10-hours',
    name: '10 Hours Driving Only',
    description: '10-Hour Package – Complete Driving Mastery',
    duration: '10 hours',
    category: 'driving-only',
    features: [
      'Full syllabus coverage',
      'Complex traffic decision-making',
      'Parallel & angled parking mastery',
      'Confidence & safety focused',
    ],
    pricing: {
      standard: 495,
      silver: 520,
      gold: 535,
    },
  },
  {
    id: '10-hours-class',
    name: '10 Hours Driving + 15 Hours in Class',
    description: 'Complete Beginner to Road-Test Ready Program',
    duration: '25 hours total',
    category: 'combo',
    features: [
      '10 hours in-car + 15 hours theory',
      'Alberta Transportation syllabus',
      'Road test preparation + mock test',
      'Insurance certificate included',
    ],
    pricing: {
      standard: 520,
      silver: 546,
      gold: 562,
    },
  },
  {
    id: '12-hours-class',
    name: '12 Hours Driving + 15 Hours in Class',
    description: 'Advanced Beginner to Road-Test Ready Program',
    duration: '27 hours total',
    category: 'combo',
    features: [
      '12 hours in-car + 15 hours theory',
      'Winter safety + advanced rules',
      'Multiple mock road test scenarios',
      'Maximum practice & confidence',
    ],
    pricing: {
      standard: 565,
      silver: 593,
      gold: 611,
    },
  },
  {
    id: '20-hours-class',
    name: '20 Hours Driving + 15 Hours in Class',
    description: 'Comprehensive Professional Driving Program',
    duration: '35 hours total',
    category: 'combo',
    features: [
      'Maximum practice (20 hours in-car)',
      'Advanced defensive driving',
      'Night + adverse conditions',
      'Full road test readiness',
    ],
    pricing: {
      standard: 1030,
      silver: 1081,
      gold: 1114,
    },
  },
  {
    id: '20-hours-class-car',
    name: '20 Hours Driving + 15 Hours in Class (Free Car for Road Test)',
    description: 'Ultimate Road Test Complete Package (All-Inclusive)',
    duration: '35 hours total',
    category: 'complete-package',
    features: [
      'Free road test car included',
      'Insurance certificate included',
      'Complete road test support',
      'Best value all-in-one package',
    ],
    pricing: {
      standard: 1080,
      silver: 1134,
      gold: 1168,
    },
  },
]

export const courseCategories = [
  {
    id: 'driving-only',
    name: 'In-Car Driving Only',
    description: 'Focus purely on practical driving skills with our professional instructors behind the wheel with you.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'combo',
    name: 'Driving + Theory Combination',
    description: 'Complete beginner programs combining in-car training with classroom instruction for comprehensive learning.',
    color: 'from-primary to-blue-600',
  },
  {
    id: 'complete-package',
    name: 'Complete Packages',
    description: 'All-inclusive programs with everything you need to pass your road test, including a free test car.',
    color: 'from-secondary to-red-700',
  },
]

export const pricingTiers = [
  {
    name: 'Standard',
    description: 'Basic pricing option',
    key: 'standard' as const,
  },
  {
    name: 'Silver',
    description: 'Popular choice',
    key: 'silver' as const,
  },
  {
    name: 'Gold',
    description: 'Premium package',
    key: 'gold' as const,
  },
]
