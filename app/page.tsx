'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { CheckCircle, Users, Trophy, Zap, Clock, Shield, Award, Star, Target, Crown } from 'lucide-react'

// Enhanced Premium Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
}

const floatUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const gentleFloat = {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const rotateFloat = {
  rotate: [0, 5, -5, 0],
  y: [0, -5, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export default function Home() {
  // Slideshow state
  const heroImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
          {/* Floating Particles Background */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Background Image Slideshow with Enhanced Effects */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt="Lucky Driving School - Professional Driving Lessons"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
                priority={currentImageIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                quality={85}
              />
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-blue-500/10"></div>

          {/* Animated Mesh Gradient */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
            </motion.div>
          </AnimatePresence>
          
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          
          {/* Premium Content */}
          <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={floatUp}
              className="mb-8"
            >
              <motion.span
                className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/90 to-orange-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg border border-white/20"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)" }}
                animate={gentleFloat}
              >
                <motion.div animate={rotateFloat}>
                  <Trophy size={18} />
                </motion.div>
                Edmonton's Premium Driving School
              </motion.span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight"
            >
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                Drive with{" "}
              </motion.span>
              <motion.span
                className="text-secondary relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
              >
                Confidence
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-orange-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg md:text-xl mb-10 text-slate-200/90 text-pretty max-w-2xl leading-relaxed"
            >
              Professional driving lessons and road test preparation from Alberta's most trusted school.
              Expert instructors, proven results, and flexible scheduling.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#courses"
                className="btn-premium-secondary group relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative z-10">Book Your Lesson</span>
                <motion.svg
                  className="w-5 h-5 ml-2 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="#courses"
                className="btn-outline-premium group"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Courses</span>
                <motion.div
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Premium Slideshow Indicators */}
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

        {/* Premium Features Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-secondary/20 rounded-full"
            animate={gentleFloat}
          />
          <motion.div
            className="absolute bottom-32 right-32 w-6 h-6 bg-blue-500/20 rounded-full"
            animate={rotateFloat}
          />
          <motion.div
            className="absolute top-1/2 left-10 w-3 h-3 bg-purple-500/20 rounded-full"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Section Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.span
                className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-6 bg-secondary/10 px-4 py-2 rounded-full"
                animate={gentleFloat}
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Excellence in Every
                <motion.span
                  className="block text-secondary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                >
                  Lesson
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We're committed to making you a confident, safe driver through modern instruction and proven techniques
              </motion.p>
            </motion.div>

            {/* Enhanced Feature Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: Trophy,
                  title: 'Expert Instructors',
                  description: 'Experienced and certified driving professionals with 10+ years expertise',
                  color: 'from-blue-500 to-blue-600',
                  gradient: 'from-blue-50 to-blue-100',
                },
                {
                  icon: CheckCircle,
                  title: 'Proven Results',
                  description: '95% road test pass rate and thousands of satisfied students',
                  color: 'from-green-500 to-green-600',
                  gradient: 'from-green-50 to-green-100',
                },
                {
                  icon: Users,
                  title: 'Personalized Learning',
                  description: 'Tailored lessons for your specific needs and learning pace',
                  color: 'from-purple-500 to-purple-600',
                  gradient: 'from-purple-50 to-purple-100',
                },
                {
                  icon: Zap,
                  title: 'Flexible Scheduling',
                  description: 'Convenient time slots to fit your busy schedule',
                  color: 'from-orange-500 to-orange-600',
                  gradient: 'from-orange-50 to-orange-100',
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{
                      y: -16,
                      scale: 1.05,
                      rotateY: 5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="group relative card-premium bg-white border-2 border-slate-100 hover:border-slate-200 overflow-hidden cursor-pointer"
                  >
                    {/* Premium Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                    {/* Animated Background Glow */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10`}></div>

                    {/* Floating Particles on Hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 p-8">
                      {/* Premium Icon Wrapper */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 mx-auto`}
                      >
                        <Icon className="text-white text-3xl" />
                      </motion.div>

                      <motion.h3
                        className="font-serif text-2xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors duration-300 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {feature.title}
                      </motion.h3>

                      <motion.p
                        className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        {feature.description}
                      </motion.p>
                    </div>

                    {/* Premium Bottom Accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />

                    {/* Corner Decorative Elements */}
                    <motion.div
                      className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      animate={gentleFloat}
                    />
                    <motion.div
                      className={`absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      animate={rotateFloat}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Premium About Section */}
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
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-blue-500/20 z-10 pointer-events-none"></div>
                  <Image
                    src="/images/about-hero.jpg"
                    alt="Lucky Driving School - Professional Driving Instructors"
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
                <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-4">About Our School</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
                  Your Journey to Safe Driving <span className="text-secondary">Starts Here</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Lucky Driving School has been Edmonton's trusted choice for professional driver education. 
                  Our experienced instructors are dedicated to helping you become a confident, safe driver through proven teaching methods and modern techniques.
                </p>
                
                {/* Premium List items - Staggered Fade */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-4 mb-10"
                >
                  {[
                    '500+ students successfully trained',
                    '95% road test pass rate',
                    '10+ years of teaching experience',
                    'Modern vehicles with dual controls',
                    'Flexible scheduling 7 days a week',
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Button - Hover Scale + Shadow */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: 0.5 }}
                >
                  <Link href="/about">
                    <motion.span
                      whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg"
                    >
                      Learn More About Us
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Premium Courses Section */}
        <section id="courses" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

          {/* Floating Geometric Elements */}
          <motion.div
            className="absolute top-32 left-16 w-8 h-8 border-2 border-secondary/20 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-6 h-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
            animate={rotateFloat}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.span
                className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-6 bg-secondary/10 px-4 py-2 rounded-full"
                animate={gentleFloat}
              >
                Our Packages
              </motion.span>
              <motion.h2
                className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Choose Your Perfect
                <motion.span
                  className="block text-secondary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                >
                  Driving Package
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Professional driving lessons tailored to your experience level and goals
              </motion.p>
            </motion.div>

            {/* Enhanced Premium Course Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {[
                {
                  duration: '2 Hours',
                  price: '$100+',
                  title: 'Quick Assessment',
                  desc: 'Skills evaluation and road readiness check',
                  icon: Zap,
                  color: 'from-yellow-500 to-orange-500',
                  gradient: 'from-yellow-50 to-orange-50',
                  features: ['Road test readiness', 'Skill assessment', 'Confidence building']
                },
                {
                  duration: '4 Hours',
                  price: '$200+',
                  title: 'Skill Building',
                  desc: 'Highway driving and parking techniques',
                  icon: Target,
                  color: 'from-blue-500 to-indigo-500',
                  gradient: 'from-blue-50 to-indigo-50',
                  features: ['Highway driving', 'Parking mastery', 'Traffic navigation']
                },
                {
                  duration: '6 Hours',
                  price: '$300+',
                  title: 'Comprehensive',
                  desc: 'City driving and advanced maneuvers',
                  icon: Trophy,
                  color: 'from-green-500 to-emerald-500',
                  gradient: 'from-green-50 to-emerald-50',
                  features: ['City driving', 'Advanced maneuvers', 'Safety protocols']
                },
                {
                  duration: '10+ Hours',
                  price: '$495+',
                  title: 'Mastery',
                  desc: 'Complete training for confident driving',
                  icon: Crown,
                  color: 'from-purple-500 to-pink-500',
                  gradient: 'from-purple-50 to-pink-50',
                  features: ['Complete training', 'Road test prep', 'Lifetime support']
                },
              ].map((pkg, index) => {
                const IconComponent = pkg.icon
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{
                      y: -20,
                      scale: 1.08,
                      rotateY: 5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="group relative card-premium bg-white border-2 border-slate-100 hover:border-slate-200 overflow-hidden cursor-pointer"
                  >
                    {/* Premium Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                    {/* Animated Background Glow */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10`}></div>

                    {/* Floating Particles on Hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${pkg.color} rounded-full`}
                          style={{
                            left: `${15 + Math.random() * 70}%`,
                            top: `${15 + Math.random() * 70}%`,
                          }}
                          animate={{
                            y: [0, -25, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.2, 0],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Premium Ribbon */}
                    <div className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-secondary to-orange-600 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-all duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {/* Premium Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.25, type: "spring", stiffness: 200 }}
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.8, ease: "easeInOut" }
                        }}
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 mx-auto`}
                      >
                        <IconComponent className="text-white text-3xl" />
                      </motion.div>

                      <motion.h3
                        className="font-serif text-2xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors duration-300 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.25 + 0.3 }}
                      >
                        {pkg.title}
                      </motion.h3>

                      <motion.p
                        className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-center mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.25 + 0.5 }}
                      >
                        {pkg.desc}
                      </motion.p>

                      {/* Features List */}
                      <motion.ul
                        className="space-y-2 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.25 + 0.7 }}
                      >
                        {pkg.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-slate-600"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.25 + 0.7 + featureIndex * 0.1 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pkg.color}`}></div>
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* Premium Price Section */}
                      <div className="mb-8 pb-8 border-b-2 border-slate-200 group-hover:border-secondary/30 transition-colors duration-300">
                        <motion.p
                          className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.25 + 0.9, type: "spring", stiffness: 200 }}
                        >
                          {pkg.price}
                        </motion.p>
                        <motion.p
                          className="text-slate-500 text-sm font-medium text-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.25 + 1.1 }}
                        >
                          {pkg.duration}
                        </motion.p>
                      </div>

                      {/* Premium CTA Button */}
                      <motion.button
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-secondary font-bold hover:text-secondary/70 transition-all duration-300 group/btn w-full justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.25 + 1.3 }}
                      >
                        <span>Explore Package</span>
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </motion.button>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />

                    {/* Corner Decorative Elements */}
                    <motion.div
                      className={`absolute top-6 right-6 w-4 h-4 bg-gradient-to-br ${pkg.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      animate={gentleFloat}
                    />
                    <motion.div
                      className={`absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-br ${pkg.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      animate={rotateFloat}
                    />
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/courses">
                  <motion.span
                    className="inline-block bg-gradient-to-r from-secondary to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                    animate={{
                      boxShadow: [
                        "0 20px 40px rgba(239, 68, 68, 0.3)",
                        "0 25px 50px rgba(239, 68, 68, 0.4)",
                        "0 20px 40px rgba(239, 68, 68, 0.3)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    View All Courses
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>
                    
                    <h3 className="font-serif text-2xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 group-hover:text-slate-700 transition-colors">
                      {pkg.desc}
                    </p>
                    
                    {/* Premium Price Section */}
                    <div className="mb-8 pb-8 border-b-2 border-slate-200 group-hover:border-secondary/30 transition-colors duration-300">
                      <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                        {pkg.price}
                      </p>
                      <p className="text-slate-500 text-sm font-medium">{pkg.duration}</p>
                    </div>
                    
                    {/* Premium CTA Button */}
                    <motion.button
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-secondary font-bold hover:text-secondary/70 transition-all duration-300 group/btn"
                    >
                      <span>Explore Package</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </motion.button>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Link href="/courses">
                <motion.span
                  whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  View All Courses
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Additional Benefits Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Premium Decorative Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/5 to-orange-500/5 rounded-full blur-3xl -z-10"></div>

          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-secondary/20 rounded-xl"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1],
              transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"
            animate={gentleFloat}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.span
                className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-6 bg-secondary/10 px-4 py-2 rounded-full"
                animate={gentleFloat}
              >
                Why Choose Lucky Driving School
              </motion.span>
              <motion.h2
                className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                What Makes Us
                <motion.span
                  className="block text-secondary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                >
                  Different
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Experience the difference with our premium driving education approach
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: Clock,
                  title: '7 Days a Week',
                  description: 'Flexible scheduling including weekends and evenings to fit your busy lifestyle',
                  color: 'from-blue-500 to-indigo-500',
                  gradient: 'from-blue-50 to-indigo-50'
                },
                {
                  icon: Shield,
                  title: 'Safety First',
                  description: 'Dual control vehicles and certified instructors ensuring maximum safety',
                  color: 'from-green-500 to-emerald-500',
                  gradient: 'from-green-50 to-emerald-50'
                },
                {
                  icon: Award,
                  title: 'Certified Team',
                  description: 'All instructors fully licensed, insured, and experienced professionals',
                  color: 'from-purple-500 to-violet-500',
                  gradient: 'from-purple-50 to-violet-50'
                },
                {
                  icon: Star,
                  title: 'Best Value',
                  description: 'Competitive pricing with no hidden fees and lifetime support included',
                  color: 'from-orange-500 to-red-500',
                  gradient: 'from-orange-50 to-red-50'
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{
                      y: -12,
                      scale: 1.05,
                      rotateY: 3,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 overflow-hidden"
                  >
                    {/* Premium Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                    {/* Animated Background Glow */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10`}></div>

                    {/* Floating Particles on Hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${benefit.color} rounded-full`}
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 mx-auto`}
                      >
                        <Icon className="text-white text-2xl" />
                      </motion.div>

                      <motion.h3
                        className="font-serif text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors duration-300 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {benefit.title}
                      </motion.h3>

                      <motion.p
                        className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        {benefit.description}
                      </motion.p>
                    </div>

                    {/* Premium Bottom Accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />

                    {/* Corner Decorative Elements */}
                    <motion.div
                      className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${benefit.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      animate={gentleFloat}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center mb-12 text-primary"
            >
              What Our Students Say
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  name: 'Sarah M.',
                  text: 'Passed my road test on the first try! The instructors are patient and really know how to teach.',
                  rating: 5,
                },
                {
                  name: 'James T.',
                  text: 'Best driving school in Edmonton. Flexible scheduling and professional service throughout.',
                  rating: 5,
                },
                {
                  name: 'Emily R.',
                  text: 'I was nervous about driving, but my instructor made me feel comfortable and confident.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
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
              Ready to Start Learning?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-blue-100 mb-8"
            >
              Book your first lesson today and take the first step towards becoming a confident, safe driver.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  Book Your Lesson Now
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
