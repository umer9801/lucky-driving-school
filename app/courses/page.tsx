'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { CourseCard } from '@/components/course-card'
import { courses, courseCategories } from '@/lib/courses-data'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(0)

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  const coursesPerPage = 3
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const startIndex = currentPage * coursesPerPage
  const displayedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(0) // Reset to first page when category changes
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Premium Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="relative h-screen md:h-[700px] flex items-center justify-center overflow-hidden group"
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/images/courses-hero.jpg"
              alt="Lucky Driving School Courses - Professional Training Programs"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              quality={85}
            />
          </motion.div>
          
          {/* Premium Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          
          {/* Premium Content */}
          <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight"
            >
              Our Professional <span className="text-secondary">Driving Courses</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl mb-8 text-slate-200 text-pretty max-w-2xl leading-relaxed"
            >
              Find the perfect course to match your skills and goals with our comprehensive training programs
            </motion.p>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 right-8 text-white/60 z-20"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Premium About Courses Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Premium Image - Slide In Left */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-blue-500/20 z-10 pointer-events-none"></div>
                  <Image
                    src="/images/hero-driving.jpg"
                    alt="Lucky Driving School - Professional Driving Instruction"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </motion.div>

              {/* Premium Text - Slide In Right */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-4">Why Our Courses</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
                  Why Choose Our <span className="text-secondary">Courses</span>?
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  At Lucky Driving School, we offer comprehensive driving programs designed to build confidence, 
                  skill, and safety awareness. Our courses are tailored to meet the needs of every learner.
                </p>
                
                {/* Premium List items - Staggered Fade */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  {[
                    'Certified professional instructors with 10+ years experience',
                    'Modern vehicles equipped with dual controls for safety',
                    'Flexible scheduling to fit your busy lifestyle',
                    'High road test pass rates and proven teaching methods',
                    'Comprehensive theory and practical training',
                    'Insurance certificates and road test support included',
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <span className="text-secondary font-bold text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Button - Hover Scale + Shadow */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                  >
                    Book Your First Lesson
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course Categories Filter */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center mb-8 text-primary"
            >
              Browse by Category
            </motion.h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex justify-center gap-4 flex-wrap"
            >
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.1, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-primary border-2 border-primary'
                }`}
              >
                All Courses
              </motion.button>
              {courseCategories.map((category) => (
                <motion.button
                  key={category.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-primary border-2 border-primary'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Courses Grid - 3 at a time */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center mb-12 text-primary"
            >
              {selectedCategory === 'all' ? 'All Available Courses' : courseCategories.find(c => c.id === selectedCategory)?.name}
            </motion.h2>

            <motion.div
              key={`${selectedCategory}-${currentPage}`}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {displayedCourses.map((course) => (
                <motion.div 
                  key={course.id}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CourseCard
                    course={course}
                    pricingTier="silver"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex items-center justify-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-blue-700 shadow-lg'
                  }`}
                >
                  Previous
                </motion.button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentPage(i)}
                      className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                        currentPage === i
                          ? 'bg-secondary text-white shadow-lg'
                          : 'bg-white text-primary border-2 border-primary hover:bg-gray-100'
                      }`}
                    >
                      {i + 1}
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === totalPages - 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-blue-700 shadow-lg'
                  }`}
                >
                  Next
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Split Section - Course Benefits */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text - Slide In Left */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-4xl font-bold mb-6 text-primary">
                  What's Included in Every Course
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Every course at Lucky Driving School comes with comprehensive support and resources 
                  to ensure your success on the road and during your road test.
                </p>

                {/* List items - Staggered Fade */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {[
                    'Professional certified instructor',
                    'Vehicle with dual controls',
                    'Flexible scheduling options',
                    'Road test preparation',
                    'Mock test included',
                    'Insurance certificate',
                    'Theory materials',
                    'Progress tracking',
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                      className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-md transition-shadow duration-300"
                    >
                      <div className="text-secondary font-bold text-2xl flex-shrink-0">✓</div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image - Slide In Right */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/courses-hero.jpg"
                    alt="Driving course benefits"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Showcase */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center mb-12 text-primary"
            >
              Courses by Type
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {courseCategories.map((category) => (
                <motion.div
                  key={category.id}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                  className={`bg-gradient-to-br ${category.color} text-white rounded-lg p-8 shadow-lg transition-all duration-300`}
                >
                  <h3 className="font-serif text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="mb-6 text-opacity-90 leading-relaxed">{category.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    View Courses
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center mb-12 text-primary"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
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
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                  className="bg-white rounded-lg p-6 shadow-md transition-all duration-300"
                >
                  <h3 className="font-serif text-lg font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-blue-100 mb-8"
            >
              Book your first lesson today or contact us for more information about our courses.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                variants={fadeInUp}
                whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Book Now
              </motion.a>
              <motion.a
                variants={fadeInUp}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(29, 78, 216, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
