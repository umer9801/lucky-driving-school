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
    description: 'Perfect for experienced drivers needing a professional skills evaluation before their Alberta Class 5 road test. Covers essential driving techniques, identifies areas for improvement, and provides expert feedback.',
    duration: '2 hours',
    category: 'driving-only',
    features: [
      'Professional driving skills evaluation',
      'Personalized feedback report',
      'Road test readiness assessment',
      'Tips for Alberta road test success',
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
    description: 'Focused training in highway driving, parallel parking, three-point turns, and urban navigation across Edmonton. Ideal for drivers who need targeted practice in specific areas before their road test.',
    duration: '4 hours',
    category: 'driving-only',
    features: [
      'Highway merging and lane change practice',
      'Parallel and perpendicular parking mastery',
      'Urban navigation through Edmonton',
      'Defensive driving fundamentals',
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
    description: 'Complete city driving training including advanced manoeuvres, lane changes, intersection navigation, and road test route practice at Edmonton registry locations. Recommended for intermediate drivers.',
    duration: '6 hours',
    category: 'driving-only',
    features: [
      'Complete city driving in Edmonton traffic',
      'Advanced intersection and roundabout training',
      'Road test route practice at local registries',
      'Night driving and adverse conditions prep',
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
    description: 'Our most popular full driver training program — takes you from beginner to road-test ready. Includes Class 7 GDL preparation, Class 5 advanced road test training, defensive driving, and winter driving skills for Alberta roads.',
    duration: '10 hours',
    category: 'driving-only',
    features: [
      'Full beginner-to-licensed training program',
      'Class 7 GDL and Class 5 road test preparation',
      'Winter driving and defensive driving in Alberta',
      'Unlimited practice until road-test ready',
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
    description: 'Complete beginner driving course program in Edmonton. Combines essential in-car instruction with classroom theory to prepare you for safe driving on Alberta roads.',
    duration: '25 hours total',
    category: 'combo',
    features: [
      '10 hours behind-the-wheel instruction',
      '15 hours professional classroom theory',
      'Alberta Transportation approved curriculum',
      'Official insurance discount certificate',
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
    description: 'Extended driver training package for comprehensive skill building. Perfect for nervous beginners who want additional driving lessons and mock road test preparation.',
    duration: '27 hours total',
    category: 'combo',
    features: [
      '12 hours behind-the-wheel training',
      '15 hours professional classroom theory',
      'Extended winter safety & adverse weather practice',
      'Official insurance discount certificate',
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
    description: 'Comprehensive professional driver education program. Offers maximum practice hours for total confidence and defensive driving mastery under all traffic conditions.',
    duration: '35 hours total',
    category: 'combo',
    features: [
      '20 hours intensive in-car instruction',
      '15 hours professional classroom theory',
      'Deep dive into collision avoidance and emergency maneuvers',
      'Official insurance discount certificate',
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
    description: 'The ultimate all-inclusive driver licensing package in Edmonton. Includes full training, insurance certificate, and a free rental vehicle for your Alberta road test.',
    duration: '35 hours total',
    category: 'complete-package',
    features: [
      '20 hours in-car + 15 hours theory',
      'Free training vehicle rental for your road test',
      'Mock road test route walk-throughs',
      'Official insurance discount certificate',
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
