'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { Star, Award, Users, Target, Clock, Shield, Heart, TrendingUp } from 'lucide-react'
import { slideInLeft, slideInRight, fadeInUp, fadeIn, scaleIn, staggerContainer } from '@/lib/animation-utils'

export default function About() {
  // Slideshow state
  const heroImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isStudentGalleryHovered, setIsStudentGalleryHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Premium Hero Section with Image Slideshow */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="relative h-screen md:h-[700px] flex items-center justify-center overflow-hidden group"
        >
          {/* Background Image Slideshow with Effects */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt="About Lucky Driving School - Professional Driving Instructors"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                priority={currentImageIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                quality={85}
              />
            </motion.div>
          </AnimatePresence>
          
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
              About <span className="text-secondary">Lucky</span> Driving School
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl mb-8 text-slate-200 text-pretty max-w-2xl leading-relaxed"
            >
              Building safe, confident drivers in Edmonton since day one through professional instruction and proven techniques.
            </motion.p>
          </div>

          {/* Enhanced Slideshow Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentImageIndex 
                    ? 'bg-white w-10 h-3' 
                    : 'bg-white/40 hover:bg-white/70 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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

        {/* Our Story - Split Section */}
        <section className="py-16 md:py-24 bg-white">
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
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Lucky Driving School was founded with a simple mission: to make professional driver education accessible and effective for everyone in Edmonton. Our team of experienced instructors has helped hundreds of students master the skills they need to become confident, safe drivers.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  We believe that driving education is more than just passing a test—it&apos;s about building habits, confidence, and a genuine commitment to road safety. That&apos;s why we combine proven teaching methods with personalized attention to ensure every student reaches their full potential.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you&apos;re a complete beginner or looking to refresh your skills, Lucky Driving School has the right program for you.
                </p>
              </motion.div>

              {/* Image - Slide In Right */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-driving.jpg"
                    alt="Lucky Driving School story"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading - Fade In Up */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center text-primary mb-12"
            >
              Our Values
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: Target,
                  title: 'Excellence',
                  description: 'We&apos;re committed to the highest standards of instruction and customer service.',
                },
                {
                  icon: Users,
                  title: 'Personal Touch',
                  description: 'Every student is unique. We tailor our teaching to your individual needs and learning style.',
                },
                {
                  icon: Award,
                  title: 'Safety First',
                  description: 'Safety is our top priority, for our students and everyone on the road.',
                },
                {
                  icon: Star,
                  title: 'Reliability',
                  description: 'You can count on us to be professional, punctual, and prepared every single time.',
                },
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div 
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Icon className="text-secondary mb-4" size={40} />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us - Split Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image - Slide In Left */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/contact-hero.jpg"
                    alt="Why choose Lucky Driving School"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Text - Slide In Right */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-4xl font-bold mb-6 text-primary">
                  Why Students Choose Us
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We're more than just a driving school. We're your partner in building lifelong safe driving habits.
                </p>
                
                {/* List items - Staggered Fade */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  {[
                    {
                      icon: Clock,
                      title: 'Flexible Scheduling',
                      desc: 'Book lessons that fit your schedule, 7 days a week',
                    },
                    {
                      icon: Shield,
                      title: 'Safety Guaranteed',
                      desc: 'All vehicles equipped with dual controls and fully insured',
                    },
                    {
                      icon: Heart,
                      title: 'Patient Instructors',
                      desc: 'Supportive teaching approach for nervous beginners',
                    },
                    {
                      icon: TrendingUp,
                      title: 'Proven Track Record',
                      desc: '95% pass rate and hundreds of satisfied students',
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, backgroundColor: "#ffffff", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                        className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg transition-all duration-300"
                      >
                        <Icon className="text-secondary flex-shrink-0 mt-1" size={28} />
                        <div>
                          <h3 className="font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-primary mb-12 text-center"
            >
              Our Expert Instructors
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-8 md:p-12 shadow-xl"
            >
              <h3 className="font-serif text-2xl font-bold mb-4">Meet Our Team</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Our instructors are certified professionals with years of real-world driving experience. They combine patience, expertise, and a genuine passion for helping students become confident drivers. Each instructor is dedicated to creating a supportive learning environment where you can develop the skills and confidence needed for safe, independent driving.
              </p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-3 text-blue-100"
              >
                {[
                  'All instructors are fully licensed and certified',
                  'Average experience of 10+ years in professional driving',
                  'Continuous training in latest teaching methods and safety standards',
                  'Background checks and insurance certification completed',
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center mb-12"
            >
              Our Achievements
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {[
                { number: '500+', label: 'Students Trained' },
                { number: '95%', label: 'Road Test Pass Rate' },
                { number: '10+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    className="font-serif text-4xl md:text-5xl font-bold mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-lg text-blue-100">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Success Stories Gallery Section - Auto-Scrolling Carousel */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">
                Our Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet some of our proud graduates who successfully earned their driver's license with Lucky Driving School
              </p>
            </motion.div>

            {/* Auto-Scrolling Carousel */}
            <div 
              className="relative overflow-hidden"
              onMouseEnter={() => setIsStudentGalleryHovered(true)}
              onMouseLeave={() => setIsStudentGalleryHovered(false)}
            >
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling Container */}
              <motion.div
                className="flex gap-6"
                animate={{
                  x: isStudentGalleryHovered ? undefined : [0, -1 * (4 * 320)],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate images for infinite scroll */}
                {[...Array(3)].map((_, duplicateIndex) => (
                  [5, 6, 7, 8].map((item, index) => (
                    <div
                      key={`${duplicateIndex}-${index}`}
                      className="flex-shrink-0 w-[300px] relative group overflow-hidden rounded-lg shadow-lg aspect-square bg-gray-100 cursor-pointer"
                    >
                      <Image
                        src={`/images/students/${item}.jpeg`}
                        alt={`Success story - Student ${item}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay with student info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white">
                          <p className="font-semibold text-sm">Proud Graduate</p>
                          <p className="text-xs text-gray-300">Licensed Driver ✓</p>
                        </div>
                      </div>
                    </div>
                  ))
                ))}
              </motion.div>
            </div>

            {/* Success Message */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 text-lg">
                Join our growing family of successful drivers! 🎉
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold mb-6 text-primary"
            >
              Ready to Learn from the Best?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-700 mb-8"
            >
              Get started with Lucky Driving School today and discover why hundreds of students trust us for their driving education.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="/courses"
                whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Explore Our Courses
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
