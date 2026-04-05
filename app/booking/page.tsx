'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { courses } from '@/lib/courses-data'
import { addBooking, initializeStorage } from '@/lib/admin-storage'
import { useEffect } from 'react'

export default function Booking() {
  useEffect(() => {
    initializeStorage()
  }, [])

  const searchParams = useSearchParams()
  const router = useRouter()
  const courseId = searchParams.get('courseId')
  
  const selectedCourse = courses.find(c => c.id === courseId)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: courseId || '',
    preferredDate: '',
    preferredTime: '',
    experience: 'beginner',
    licenseStatus: 'no-license',
    specialRequests: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save booking to admin storage
      addBooking({
        courseId: selectedCourse?.id || '',
        courseName: selectedCourse?.name || 'Not specified',
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        licenseStatus: formData.licenseStatus,
        message: formData.specialRequests,
      })

      // Redirect to WhatsApp with pre-filled message
      const whatsappMessage = `Hi, I'd like to book the ${selectedCourse?.name || 'a driving course'} course. My name is ${formData.fullName} and my phone number is ${formData.phone}.`
      const whatsappUrl = `https://wa.me/17802552999?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, '_blank')
      
      setSubmitMessage('Booking request submitted! Your booking has been saved in our system. Check WhatsApp for confirmation.')
      
      setTimeout(() => {
        router.push('/courses')
      }, 2000)
    } catch (error) {
      setSubmitMessage('Error submitting booking. Please try again or contact us directly.')
      console.error('Booking error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection
          title="Book Your Driving Course"
          subtitle="Fill in your details and we'll get back to you shortly"
          backgroundImage="/images/contact-hero.jpg"
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Course Selection */}
              <div className="bg-blue-50 p-8 rounded-lg border-2 border-primary">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Selected Course
                </h3>
                <select
                  name="courseId"
                  value={formData.courseId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-secondary font-medium"
                >
                  <option value="">Choose a course...</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>
                      {course.name} - {course.duration}
                    </option>
                  ))}
                </select>
                {selectedCourse && (
                  <div className="mt-4 p-4 bg-white rounded border-l-4 border-secondary">
                    <p className="text-gray-700"><strong>Course:</strong> {selectedCourse.name}</p>
                    <p className="text-gray-700"><strong>Duration:</strong> {selectedCourse.duration}</p>
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3">
                  Your Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                      placeholder="+1 (780) 255-2999"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Driving Experience Level *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                    >
                      <option value="beginner">Beginner (no experience)</option>
                      <option value="some">Some experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Scheduling Information */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3">
                  Schedule Your Lessons
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                    >
                      <option value="">Select a time slot</option>
                      <option value="7:00-9:00 AM">7:00 - 9:00 AM</option>
                      <option value="9:00-11:00 AM">9:00 - 11:00 AM</option>
                      <option value="11:00-1:00 PM">11:00 - 1:00 PM</option>
                      <option value="1:00-3:00 PM">1:00 - 3:00 PM</option>
                      <option value="3:00-5:00 PM">3:00 - 5:00 PM</option>
                      <option value="5:00-6:30 PM">5:00 - 6:30 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    License Status *
                  </label>
                  <select
                    name="licenseStatus"
                    value={formData.licenseStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                  >
                    <option value="no-license">No driver's license</option>
                    <option value="learning-permit">Learning permit (L)</option>
                    <option value="graduated-license">Graduated license (GDL)</option>
                    <option value="has-license">Already have license</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
                  Additional Information
                </h3>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Special Requests or Questions
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors resize-none"
                    placeholder="Any special requests, concerns, or questions about your course..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.includes('Error')
                    ? 'bg-red-50 text-red-700 border-2 border-red-300'
                    : 'bg-green-50 text-green-700 border-2 border-green-300'
                }`}>
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse-custom"
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Booking'}
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex-1 border-2 border-primary text-primary py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Questions? Contact Us Directly
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (780) 255-2999
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>WhatsApp:</strong> +1 (587) 712-4929
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> Lakshmi@luckydrivingschool.net
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Hours:</strong>
                </p>
                <p className="text-gray-700">Monday - Saturday: 7:00 AM - 6:30 PM</p>
                <p className="text-gray-700">Sunday: Holiday</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
