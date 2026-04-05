'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { addContact, initializeStorage } from '@/lib/admin-storage'

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
      // Save contact message to admin storage
      addContact({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          title="Get In Touch"
          subtitle="Have questions? We&apos;d love to hear from you. Reach out to Lucky Driving School today."
          backgroundImage="/images/contact-hero.jpg"
        />

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-gray-50 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Address */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center transition-all duration-300 transform hover:scale-105 animate-slide-up">
                <MapPin className="text-secondary mx-auto mb-4 animate-bounce-in" size={40} />
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  3119 158 Street SW<br />
                  Edmonton AB T6W5C9<br />
                  Canada
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '100ms' }}>
                <Phone className="text-secondary mx-auto mb-4 animate-bounce-in" style={{ animationDelay: '100ms' }} size={40} />
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Phone</h3>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+17802552999" className="hover:text-primary font-semibold transition-colors duration-200">
                    +1 (780) 255-2999
                  </a>
                  <br />
                  <a href="tel:+15877124929" className="hover:text-primary font-semibold transition-colors duration-200">
                    +1 (587) 712-4929
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <Mail className="text-secondary mx-auto mb-4 animate-bounce-in" style={{ animationDelay: '200ms' }} size={40} />
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:Lakshmi@luckydrivingschool.net" className="hover:text-primary font-semibold transition-colors duration-200">
                    Lakshmi@luckydrivingschool.net
                  </a>
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '300ms' }}>
                <Clock className="text-secondary mx-auto mb-4 animate-bounce-in" style={{ animationDelay: '300ms' }} size={40} />
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Hours</h3>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Mon - Sat:</span> 7:00 AM - 6:30 PM<br />
                  <span className="font-semibold">Sunday:</span> Holiday
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 md:py-24 bg-white animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-left">
                <h2 className="font-serif text-3xl font-bold text-primary mb-8 animate-slide-down">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      ✓ Thank you! Your message has been received. We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="booking">Book a Lesson</option>
                      <option value="road-test">Road Test Preparation</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your driving needs..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-xs text-gray-500">
                    We&apos;ll respond to your message within 24 hours during business hours.
                  </p>
                </form>
              </div>

              {/* Info Section */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">Why Contact Us?</h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Book a Lesson</h3>
                    <p className="text-gray-700">
                      Ready to start your driving journey? Contact us to schedule your first lesson. We offer flexible times to fit your schedule.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Ask Questions</h3>
                    <p className="text-gray-700">
                      Unsure which course is right for you? Our team can help you choose the perfect package based on your experience and goals.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Road Test Prep</h3>
                    <p className="text-gray-700">
                      Preparing for your road test? Get in touch to book specialized road test preparation lessons with our certified instructors.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Special Requests</h3>
                    <p className="text-gray-700">
                      Need something specific? Let us know! We customize our lessons to meet individual needs and learning preferences.
                    </p>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="mt-8 p-6 bg-primary text-white rounded-lg">
                  <h3 className="font-serif text-xl font-bold mb-4">Quick Contact Options</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-blue-100">Call or Text Us</p>
                      <p className="text-lg font-semibold">
                        <a href="tel:+17802552999" className="hover:text-secondary">
                          +1 (780) 255-2999
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-100">Email Us</p>
                      <p className="text-lg font-semibold">
                        <a href="mailto:Lakshmi@luckydrivingschool.net" className="hover:text-secondary">
                          Lakshmi@luckydrivingschool.net
                        </a>
                      </p>
                    </div>
                    <div className="pt-4 border-t border-blue-400">
                      <p className="text-sm text-blue-100 mb-2">Chat with us on WhatsApp</p>
                      <a
                        href="https://wa.me/17802552999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                      >
                        Start WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
