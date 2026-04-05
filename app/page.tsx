'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { CheckCircle, Users, Trophy, Zap, Clock, Shield, Award, Star } from 'lucide-react'

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

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Fade In */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <HeroSection
            title="Learn to Drive with Confidence"
            subtitle="Professional driving lessons and road test preparation in Edmonton"
            backgroundImage="/images/hero-driving.jpg"
            ctaText="Start Your Journey"
            ctaLink="#courses"
          />
        </motion.div>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading - Fade In Up */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center mb-12 text-primary"
            >
              Why Choose Lucky Driving School?
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: Trophy,
                  title: 'Expert Instructors',
                  description: 'Experienced and certified driving professionals',
                },
                {
                  icon: CheckCircle,
                  title: 'Proven Results',
                  description: 'High road test pass rates and satisfied students',
                },
                {
                  icon: Users,
                  title: 'Personalized Learning',
                  description: 'Tailored lessons for your specific needs and pace',
                },
                {
                  icon: Zap,
                  title: 'Flexible Scheduling',
                  description: 'Convenient time slots to fit your busy schedule',
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-8 rounded-lg shadow-md text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Icon className="text-secondary mx-auto mb-4" size={40} />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Split Section - About Us */}
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
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/about-hero.jpg"
                    alt="Lucky Driving School instructors"
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
                  Your Journey to Safe Driving Starts Here
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Lucky Driving School has been Edmonton's trusted choice for professional driver education. 
                  Our experienced instructors are dedicated to helping you become a confident, safe driver.
                </p>
                
                {/* List items - Staggered Fade */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-4 mb-8"
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

        {/* Courses Preview Section */}
        <section id="courses" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading - Fade In Up */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl font-bold text-center mb-4 text-primary"
            >
              Our Courses
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center text-gray-600 text-lg mb-12 text-pretty"
            >
              Choose from a variety of driving packages tailored to your experience level and goals
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {[
                { duration: '2 Hours', price: '$100+', title: 'Quick Assessment', desc: 'Skills evaluation' },
                { duration: '4 Hours', price: '$200+', title: 'Skill Building', desc: 'Highway & parking' },
                { duration: '6 Hours', price: '$300+', title: 'Comprehensive', desc: 'City & advanced' },
                { duration: '10+ Hours', price: '$495+', title: 'Mastery', desc: 'Complete training' },
              ].map((pkg, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-br from-primary to-blue-600 text-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="font-serif text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-2xl font-bold mb-2">{pkg.price}</p>
                  <p className="text-blue-100 text-sm mb-1">{pkg.duration}</p>
                  <p className="text-blue-200 text-xs">{pkg.desc}</p>
                </motion.div>
              ))}
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

        {/* Additional Benefits Section */}
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
              What Makes Us Different
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
                  icon: Clock,
                  title: '7 Days a Week',
                  description: 'Flexible scheduling including weekends',
                },
                {
                  icon: Shield,
                  title: 'Safety First',
                  description: 'Dual control vehicles for maximum safety',
                },
                {
                  icon: Award,
                  title: 'Certified Team',
                  description: 'All instructors fully licensed and insured',
                },
                {
                  icon: Star,
                  title: 'Best Value',
                  description: 'Competitive pricing with no hidden fees',
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, backgroundColor: "#ffffff", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                    className="text-center p-6 bg-gray-50 rounded-lg transition-all duration-300"
                  >
                    <Icon className="text-primary mx-auto mb-4" size={48} />
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                )
              })}
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
