'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-secondary/30 flex flex-col h-full"
    >
      {/* Premium Header */}
      <div className="bg-gradient-to-br from-primary via-blue-700 to-blue-600 text-white p-4 sm:p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{course.name}</h3>
          <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">{course.description}</p>
        </div>
      </div>

      {/* Premium Content */}
      <div className="p-4 sm:p-6 md:p-8 flex-grow">
        <div className="mb-6 sm:mb-8">
          <p className="text-slate-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4 flex items-center min-h-[24px]">
            <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Duration: {course.duration}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ${price}
            </span>
            <span className="text-slate-500 font-normal text-sm">/course</span>
          </div>
        </div>

        {/* Premium Features */}
        <div className="space-y-3 sm:space-y-4">
          {course.features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-2 sm:gap-3 items-start min-h-[20px]"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span className="text-slate-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium CTA Buttons */}
      <div className="p-4 sm:p-6 md:p-8 border-t border-slate-100 space-y-2 sm:space-y-3">
        <motion.button
          onClick={handleBooking}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-secondary to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn min-h-[44px]"
        >
          Book Now
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
        <Link 
          href="/contact" 
          className="block text-center text-primary hover:text-secondary font-semibold text-xs sm:text-sm transition-colors duration-300 hover:underline py-2 min-h-[44px] flex items-center justify-center"
        >
          View More Details
        </Link>
      </div>
    </motion.div>
  )
}
