'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
import type { Course } from '@/lib/courses-data'

interface CourseCardProps {
  course: Course
  pricingTier: 'standard' | 'silver' | 'gold'
  onBooking?: () => void
}

export function CourseCard({ course, pricingTier }: CourseCardProps) {
  const router = useRouter()
  const price = course.pricing[pricingTier]

  const handleBooking = () => {
    router.push(`/booking?courseId=${course.id}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full hover:scale-105 hover:-translate-y-1">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-6">
        <h3 className="font-serif text-xl font-bold mb-2">{course.name}</h3>
        <p className="text-blue-100 text-sm">{course.description}</p>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow">
        <div className="mb-6">
          <p className="text-gray-600 text-sm font-medium mb-4">Duration: {course.duration}</p>
          <div className="text-4xl font-bold text-primary mb-1">
            ${price}
            <span className="text-sm text-gray-500 font-normal">/course</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {course.features.map((feature, index) => (
            <div key={index} className="flex gap-3 items-start animate-fade-in" style={{
              animationDelay: `${index * 50}ms`
            }}>
              <Check className="text-secondary flex-shrink-0 mt-0.5" size={20} />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="p-6 border-t border-gray-100 space-y-3">
        <button
          onClick={handleBooking}
          className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg relative overflow-hidden group"
        >
          <span className="relative z-10">Book Now</span>
          <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <Link href="/contact" className="block text-center text-primary hover:underline font-medium text-sm hover:text-secondary transition-colors duration-300">
          View Details
        </Link>
      </div>
    </div>
  )
}
