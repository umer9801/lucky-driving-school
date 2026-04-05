'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { CourseCard } from '@/components/course-card'
import { courses, pricingTiers } from '@/lib/courses-data'

export default function Courses() {
  const [selectedTier, setSelectedTier] = useState<'standard' | 'silver' | 'gold'>('silver')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          title="Our Driving Courses"
          subtitle="Find the perfect course to match your skills and goals"
          backgroundImage="/images/courses-hero.jpg"
        />

        {/* Pricing Tier Selector */}
        <section className="py-12 md:py-16 bg-gray-50 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-2xl font-bold mb-8 text-primary animate-slide-down">
              Select Your Pricing Plan
            </h2>

            <div className="flex justify-center gap-4 flex-wrap">
              {pricingTiers.map((tier, index) => (
                <button
                  key={tier.key}
                  onClick={() => setSelectedTier(tier.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 active:scale-95 animate-slide-up ${
                    selectedTier === tier.key
                      ? 'bg-secondary text-white shadow-lg'
                      : 'bg-white text-primary border-2 border-primary hover:border-secondary'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-lg">{tier.name}</div>
                  <div className="text-xs opacity-75">{tier.description}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 md:py-24 bg-white animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary animate-slide-down">
              All Available Courses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <div key={course.id} className="animate-slide-up" style={{ animationDelay: `${index * 75}ms` }}>
                  <CourseCard
                    course={course}
                    pricingTier={selectedTier}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16 md:py-24 bg-gray-50 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary animate-slide-down">
              Courses by Type
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'In-Car Driving Only',
                  description: 'Focus purely on practical driving skills with our professional instructors behind the wheel with you.',
                  courses: ['2 Hours', '4 Hours', '6 Hours', '10 Hours'],
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  title: 'Driving + Theory Combination',
                  description: 'Complete beginner programs combining in-car training with classroom instruction for comprehensive learning.',
                  courses: ['10 Hours + 15 hrs class', '12 Hours + 15 hrs class', '20 Hours + 15 hrs class'],
                  color: 'from-primary to-blue-600',
                },
                {
                  title: 'Complete Packages',
                  description: 'All-inclusive programs with everything you need to pass your road test, including a free test car.',
                  courses: ['20 Hours + Test Car', 'Road Test Support', 'Insurance Included'],
                  color: 'from-secondary to-red-700',
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${category.color} text-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <h3 className="font-serif text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="mb-6 text-opacity-90">{category.description}</p>
                  <ul className="space-y-2">
                    {category.courses.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white opacity-75"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
              What&apos;s Included in Every Course
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Professional certified instructor',
                'Vehicle with dual controls (safety pedal)',
                'Flexible scheduling options',
                'Road test preparation (selected courses)',
                'Mock test included',
                'Insurance certificate (where applicable)',
                'Theory materials (classroom courses)',
                'Progress tracking and feedback',
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 items-start bg-blue-50 p-4 rounded-lg">
                  <div className="text-secondary font-bold text-2xl flex-shrink-0">✓</div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I choose my own instructor?',
                  answer: 'Yes! We match you with an instructor based on your learning style and availability. If you prefer a specific instructor, please let us know.',
                },
                {
                  question: 'How long does a typical lesson last?',
                  answer: 'Lessons are typically 1-2 hours long. We recommend 1-2 lessons per week for best results, but flexible scheduling is available.',
                },
                {
                  question: 'What vehicles are used for training?',
                  answer: 'We use modern, well-maintained vehicles equipped with dual controls for safety. All vehicles are regularly serviced and insured.',
                },
                {
                  question: 'Are there age restrictions?',
                  answer: 'We teach drivers of all ages, from teens preparing for their road test to adults refreshing their skills.',
                },
                {
                  question: 'Do you provide road test bookings?',
                  answer: 'Yes! Our staff can assist with road test scheduling and our instructors provide specialized preparation for the test.',
                },
                {
                  question: 'What if I need to reschedule?',
                  answer: 'We understand life happens. Reschedule your lessons with 24 hours notice for free. Details in our cancellation policy.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-serif text-lg font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Book your first lesson today or contact us for more information about our courses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-secondary text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Book Now
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
