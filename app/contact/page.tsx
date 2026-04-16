'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { initializeStorage } from '@/lib/admin-storage'

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

export default function Contact() {
  useEffect(() => {
    initializeStorage()
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Save contact message to database via API
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('API Error:', data)
        throw new Error(data.error || data.details || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error: any) {
      console.error('Error submitting form:', error)
      alert(`Error: ${error.message}\n\nPlease try again or contact us directly at:\nEmail: Lakshmi@luckydrivingschool.net`)
    } finally {
      setLoading(false)
    }
  }

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
            title="Get In Touch"
            subtitle="Have questions? We&apos;d love to hear from you. Reach out to Lucky Driving School today."
            backgroundImage="/images/contact-hero.jpg"
          />
        </motion.div>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {/* Address */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <MapPin className="text-secondary mx-auto mb-4" size={40} />
                </motion.div>
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  3119 158 Street SW<br />
                  Edmonton AB T6W5C9<br />
                  Canada
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                >
                  <Phone className="text-secondary mx-auto mb-4" size={40} />
                </motion.div>
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Phone</h3>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+15877124929" className="hover:text-primary font-semibold transition-colors duration-200">
                    +1 (587) 712-4929
                  </a>
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <Mail className="text-secondary mx-auto mb-4" size={40} />
                </motion.div>
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:Lakshmi@luckydrivingschool.net" className="hover:text-primary font-semibold transition-colors duration-200">
                    Lakshmi@luckydrivingschool.net
                  </a>
                </p>
              </motion.div>

              {/* Hours */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <Clock className="text-secondary mx-auto mb-4" size={40} />
                </motion.div>
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Hours</h3>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Mon - Sat:</span> 7:00 AM - 6:30 PM<br />
                  <span className="font-semibold">Sunday:</span> Holiday
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form - Slide In Left */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">Send us a Message</h2>

                {submitted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 font-semibold">
                      ✓ Thank you! Your message has been received. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="+1 (123) 456-7890"
                    />
                  </motion.div>

                  {/* Subject */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="booking">Book a Lesson</option>
                      <option value="road-test">Road Test Preparation</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300"
                      placeholder="Tell us more about your driving needs..."
                    ></textarea>
                  </motion.div>

                  {/* Submit Button - Hover Scale + Shadow */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-secondary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <Send size={20} />
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  <p className="text-xs text-gray-500">
                    We&apos;ll respond to your message within 24 hours during business hours.
                  </p>
                </form>
              </motion.div>

              {/* Info Section - Slide In Right */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">Why Contact Us?</h2>

                {/* List items - Staggered Fade */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  {[
                    {
                      title: 'Book a Lesson',
                      desc: 'Ready to start your driving journey? Contact us to schedule your first lesson. We offer flexible times to fit your schedule.',
                    },
                    {
                      title: 'Ask Questions',
                      desc: 'Unsure which course is right for you? Our team can help you choose the perfect package based on your experience and goals.',
                    },
                    {
                      title: 'Road Test Prep',
                      desc: 'Preparing for your road test? Get in touch to book specialized road test preparation lessons with our certified instructors.',
                    },
                    {
                      title: 'Special Requests',
                      desc: 'Need something specific? Let us know! We customize our lessons to meet individual needs and learning preferences.',
                    },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, backgroundColor: "#dbeafe", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                      className="bg-blue-50 p-6 rounded-lg transition-all duration-300"
                    >
                      <h3 className="font-serif text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quick Contact Options */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="mt-8 p-6 bg-primary text-white rounded-lg shadow-xl"
                >
                  <h3 className="font-serif text-xl font-bold mb-4">Quick Contact Options</h3>
                  <div className="space-y-3">
                    <div className="pt-4 border-t border-blue-400">
                      <p className="text-sm text-blue-100 mb-2">Chat with us on WhatsApp</p>
                      <motion.a
                        href="https://wa.me/15877124929"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-300"
                      >
                        Start WhatsApp Chat
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-center text-primary mb-12">
              Visit Us
            </h2>
            <div className="bg-gray-300 rounded-lg overflow-hidden h-96 md:h-[500px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.0938481651157!2d-113.53819!3d53.549139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0213e8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s3119%20158%20Street%20SW%2C%20Edmonton%2C%20AB%20T6W%205C9!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
