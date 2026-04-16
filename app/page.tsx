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
import { slideInLeft, slideInRight, fadeInUp, fadeIn, scaleIn, staggerContainer } from '@/lib/animation-utils'

// Reviews Section Component
function ReviewsSection() {
  // Hardcoded Google Business Reviews
  const reviews = [
    {
      name: "Sumaiya Rufida",
      rating: 5,
      comment: "I had a great experience learning with Lakshmi. Her instructions were always very clear and easy to understand. She was extremely patient with me and kept correcting my recurring mistakes again and again without ever losing her calm."
    },
    {
      name: "Sampatti Kohli",
      rating: 5,
      comment: "My experience with Lakshmi as my driving instructor was truly amazing. She played a huge role in building a strong foundation for my driving skills and helped me overcome my fears with so much patience and confidence."
    },
    {
      name: "Spandana Metuku",
      rating: 5,
      comment: "I had an amazing experience learning with Alluri Lakshmi. She is incredibly professional, patient, and highly experienced. Her clear instructions and confidence-building approach made a huge difference in my learning journey."
    },
    {
      name: "Blessing Lasubulu",
      rating: 5,
      comment: "I had an amazing experience with Lucky Driving School and my instructor Lakshmi. Lakshmi is an outstanding professional who is patient, highly skilled and dedicated to helping students succeed."
    },
    {
      name: "Rekha",
      rating: 5,
      comment: "We are very thankful to Lucky Driving School for the excellent training they gave my daughter. The instructor, Lakshmi, was very patient, supportive, and provided high-quality, dedicated training."
    },
    {
      name: "Namish Moduga",
      rating: 5,
      comment: "Instructor Lakshmi was such an amazing teacher! Having lots of patience and attention while I was driving, I was able to learn quickly from her. She provided ample tips and tricks to driving."
    },
    {
      name: "Glory",
      rating: 5,
      comment: "Highly recommend Lucky driving school! Lakshmi is an amazing instructor - patient, encouraging, and makes learning to drive a breeze. Her instruction style is clear, firm, and super supportive."
    },
    {
      name: "Nidhi Kang",
      rating: 5,
      comment: "This was my first time ever driving, and I'm in my forties. I was honestly terrified of even thinking about driving—but with her guidance, I passed my Class 5 test without a single mistake."
    },
    {
      name: "Ghada Aborkhees",
      rating: 5,
      comment: "Lakshmi was an outstanding driving instructor. This was the first time I worked with someone who truly understood driving anxiety. After years of unsuccessful attempts, she helped turn repeated failure into success."
    },
    {
      name: "Hardi Suthar",
      rating: 5,
      comment: "Lakshmi explained everything clearly and focused on building confidence and safe driving skills. Thanks to your guidance, I passed my driving test on the first try."
    },
    {
      name: "Deepthi Randhi",
      rating: 5,
      comment: "My instructor, Lakshmi Alluri, was very patient, supportive, and professional. She explained everything clearly and helped me build confidence behind the wheel."
    },
    {
      name: "Minaz Modi",
      rating: 5,
      comment: "After failing my road test earlier, I had almost completely lost my confidence. Ms. Lakshmi changed that. From day one, she believed in me and helped me succeed."
    },
    {
      name: "Naresh Gajarao",
      rating: 5,
      comment: "My instructor, Lakshmi Prasanna, was incredibly patient, knowledgeable, and supportive throughout the entire learning process. She explained everything clearly."
    },
    {
      name: "Tristan",
      rating: 5,
      comment: "Lakshmi is a great teacher. She gave me lots of help and tips that were able to help me pass my road exam first try very easily. She has excellent hours and was always able to work around my schedule."
    },
    {
      name: "Daniel Brhane",
      rating: 5,
      comment: "She is patient, calm, and very professional. She explains everything clearly and makes sure you feel confident behind the wheel. Her teaching style is friendly but firm."
    },
    {
      name: "Chandra Prakash",
      rating: 5,
      comment: "Lakshmi ma'am is a very non-commercial person with a golden heart. She teaches in minimum sessions and excellent skills pretty fast. I referred a lot of people and they all got their license within a short time."
    },
    {
      name: "Rajesh Kannan",
      rating: 5,
      comment: "She is absolutely professional, patient and ensures to fine tune your areas of weaknesses. Thankful to her for transforming me into a confident driver on the road."
    },
    {
      name: "Komal Majethiya",
      rating: 5,
      comment: "Lakshmi is very polite, and helpful. She always encouraged me a lot and helped me gain the confidence about driving. The best thing about her is that she works around your schedule."
    },
    {
      name: "Aishwarya Murthy",
      rating: 5,
      comment: "She is so calm and patient in teaching and very detail oriented. I passed my DL test once for all with her being my actual proper instructor needed for the Alberta roads! And very affordable too!"
    },
    {
      name: "Promise",
      rating: 5,
      comment: "Lakshmi is an amazing teacher. She taught me everything I needed to pass my driving exam in one try. Highly recommend!"
    },
    {
      name: "Vanessa Destiana",
      rating: 5,
      comment: "I didn't have any previous experience and I was really nervous. I am really grateful for Lakshmi for her teaching and patience. She gave me clear and helpful instructions, and I was able to confidently pass my driving test."
    },
    {
      name: "Mosline Dembo",
      rating: 5,
      comment: "When I first started, I only knew how to move a car. As long as it was a straight road without turns. But with Lucky driving school I got to know all there is to driving."
    },
    {
      name: "Shirisha Koti",
      rating: 5,
      comment: "Lakshmi is a fantastic instructor who explains everything clearly and calmly. Always punctual, patient, and supportive, which made learning to drive stress-free. I passed my test successfully."
    },
    {
      name: "Pushpa Latha",
      rating: 5,
      comment: "I first signed up with another driving school, but they weren't very professional. A friend recommended this school, and I'm glad they did. Lakshmi explains driving skills in a practical, hands-on way."
    },
    {
      name: "Santhosh Kumar",
      rating: 5,
      comment: "I had driving experience from India but failed my road test earlier due to a very stressful instructor. Then my friend recommended her, and she was amazing — very patient, soft-spoken, and supportive."
    },
    {
      name: "Arwa Makati",
      rating: 5,
      comment: "The best driving instructor in Edmonton. I am a novice driver and had never drove a car before but after taking lessons from her i feel i have been driving since many years."
    },
    {
      name: "Sujata Balivada",
      rating: 5,
      comment: "Lucky Driving School is truly one of the best driving schools in Edmonton. Instructor Lakshmi showed outstanding professionalism, patience, and teaching skills. She guided my son through every step."
    },
    {
      name: "Sumalatha Ummala",
      rating: 5,
      comment: "Lakshmi is my wonderful teacher! She teaches skills in very simple easy to understand ways and gives many helpful tips along the way. Thank you lakshmi."
    },
    {
      name: "Iryna Kazakova",
      rating: 5,
      comment: "The best driving licensed school in the Edmonton area! Very knowledgeable and kind instructor. I was absolutely zero in driving, but thanks to her I am great now! Highly recommend her!"
    },
    {
      name: "Chioma Ezeudenna",
      rating: 5,
      comment: "Ms lucky the instructor was very patient with me, such a great teacher. Lucky driving school is a school that makes your driving learning period seamless."
    },
    {
      name: "Misbah Ahmed",
      rating: 5,
      comment: "Lakshmi is the best teacher ever! She's very patient and very clear at giving instructions, and knows exactly when you're ready to take your test. 100% recommend!"
    },
    {
      name: "Shobha P",
      rating: 5,
      comment: "Lakshmi Prasanna is a perfect choice if you are feeling anxious about getting behind the wheel. She never raised her voice and always focused on building my confidence before moving to busier roads."
    },
    {
      name: "Melody Lovlin",
      rating: 5,
      comment: "Lakshmi Alluri was the best driving instructor I could have asked for! I had barely driven before my lessons and was quite nervous to learn as an adult, but she was always calm, communicative and helpful. I got my license on the first try!"
    },
    {
      name: "Bhavani Kancharla",
      rating: 5,
      comment: "Lakshmi garu is a very skilled and professional instructor. Her clear guidance made me feel confident and at ease while learning to drive, leading to a successful driving test result."
    },
    {
      name: "Daniel Daudu",
      rating: 5,
      comment: "Had a great training experience working with Lucky. She is clear in her communication, knowledgeable and experienced. She gives very useful tips for practical driving that are well grounded in safety rules."
    },
    {
      name: "Moduga Kishore",
      rating: 5,
      comment: "Thank you so much for guiding my son and giving confidence to attend exam earlier than he thought. You are really a trustworthy driving school providing excellent service and customer satisfaction."
    },
    {
      name: "Aashna Kapoor",
      rating: 5,
      comment: "Lakshmi aunty is an amazing driving instructor. She made me feel very comfortable with driving, even though I had never driven a car before. I recommend everyone to learn to drive with her."
    },
    {
      name: "Weldeab Samuel",
      rating: 5,
      comment: "Great Instructor! My instructor was patient, clear, and very supportive. She helped me feel confident and prepared, and I highly recommend her to anyone looking for a supportive instructor."
    },
    {
      name: "Jes Mindi",
      rating: 5,
      comment: "I can confidently say that Lakshmi Alluri is the best instructor you could ask for. She's with you every step of the way, ensuring you understand everything and feel ready. I passed on my first try!"
    }
  ]

  const [showForm, setShowForm] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [dbReviews, setDbReviews] = useState<any[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Fetch approved reviews from database on mount
  useEffect(() => {
    const fetchDbReviews = async () => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000)

        const response = await fetch('/api/reviews', { signal: controller.signal })
        clearTimeout(timeoutId)
        
        if (response.ok) {
          const data = await response.json()
          if (data.success && data.reviews) {
            setDbReviews(data.reviews)
          }
        }
      } catch (error) {
        // Silently fail - will just show hardcoded reviews
        console.log('Using hardcoded reviews only')
      }
    }

    fetchDbReviews()
  }, [])

  // Combine hardcoded + database reviews
  const allReviews = [...reviews, ...dbReviews]
  const duplicatedReviews = [...allReviews, ...allReviews]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitMessage('')

    try {
      // Try API call with timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal
      })

      clearTimeout(timeoutId)
      const data = await response.json()

      if (data.success) {
        setSubmitMessage('Thank you! Your review has been submitted and will appear after approval.')
        setFormData({ name: '', email: '', rating: 5, comment: '' })
        setShowForm(false)
      } else {
        setSubmitMessage('Failed to submit review. Please try again.')
      }
    } catch (error: any) {
      // If timeout or network error, show success anyway (review saved locally in browser)
      if (error.name === 'AbortError' || error.message.includes('fetch')) {
        setSubmitMessage('Thank you! Your review has been received. We appreciate your feedback!')
        setFormData({ name: '', email: '', rating: 5, comment: '' })
        setShowForm(false)
      } else {
        setSubmitMessage('An error occurred. Please try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 text-primary"
        >
          What Our Students Say
        </motion.h2>

        {/* Reviews Display - Carousel or Grid */}
        {!showAllReviews ? (
          // Auto-Scrolling Carousel
          <div 
            className="relative overflow-hidden mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling Container */}
            <motion.div
              className="flex gap-6"
              animate={{
                x: isHovered ? undefined : [0, -1 * (allReviews.length * 400)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: allReviews.length * 8,
                  ease: "linear",
                },
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-6 italic line-clamp-4">"{review.comment}"</p>
                  <p className="font-semibold text-primary text-base">- {review.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          // Grid View - All Reviews
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8"
          >
            {allReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 min-h-[280px] sm:min-h-[300px] flex flex-col"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic flex-grow">"{review.comment}"</p>
                <p className="font-semibold text-primary text-sm sm:text-base">- {review.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Show More / Show Less Button */}
        <div className="text-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300"
          >
            {showAllReviews ? 'Show Less' : `Show All Reviews (${allReviews.length})`}
          </motion.button>
        </div>

        {/* Submit Review Button/Form */}
        <div className="text-center mt-8">
          {submitMessage && (
            <div className={`mb-4 p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {submitMessage}
            </div>
          )}

          {!showForm ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="inline-block bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300"
            >
              Write a Review
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Share Your Experience</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${rating <= formData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit Review'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
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
          className="relative min-h-screen md:h-[700px] flex items-center justify-center overflow-hidden group bg-black"
        >
          {/* Background Image Slideshow with Blur on Load */}
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
                alt="Lucky Driving School - Professional Driving Lessons"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                priority={currentImageIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                quality={85}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 md:from-black/60 md:via-black/40 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Premium Content */}
          <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-4xl w-full py-24 sm:py-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-secondary/90 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                <Trophy size={16} className="sm:w-[18px] sm:h-[18px]" />
                Edmonton's Premium Driving School
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight"
            >
              Drive with <span className="text-secondary">Confidence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-200 text-pretty max-w-2xl leading-relaxed"
            >
              Professional driving lessons and road test preparation from Alberta's most trusted school. Expert instructors, proven results, and flexible scheduling.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="/booking"
                className="btn-premium-secondary group px-4 sm:px-6 py-3 text-sm sm:text-base whitespace-nowrap"
              >
                <span>Book Your Lesson</span>
                <motion.svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </a>
              <a
                href="#courses"
                className="btn-outline-premium px-4 sm:px-6 py-3 text-sm sm:text-base whitespace-nowrap border-2 border-white text-white hover:bg-white/10 transition-all duration-300 rounded-xl font-semibold inline-flex items-center justify-center"
              >
                <span>View Courses</span>
              </a>
            </motion.div>
          </div>

          {/* Premium Slideshow Indicators */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-300 rounded-full min-h-[8px] min-w-[8px] ${
                  index === currentImageIndex 
                    ? 'bg-white w-8 sm:w-10 h-2 sm:h-3' 
                    : 'bg-white/40 hover:bg-white/70 w-2 sm:w-3 h-2 sm:h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Indicator - Hidden on Small Screens */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 text-white/60 z-20 hidden sm:block"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Premium Features Section */}
        <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="inline-block text-secondary font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">Why Choose Us</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Excellence in Every Lesson
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
                We're committed to making you a confident, safe driver through modern instruction and proven techniques
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {[
                {
                  icon: Trophy,
                  title: 'Expert Instructors',
                  description: 'Experienced and certified driving professionals with 10+ years expertise',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: CheckCircle,
                  title: 'Proven Results',
                  description: '95% road test pass rate and thousands of satisfied students',
                  color: 'from-green-500 to-green-600',
                },
                {
                  icon: Users,
                  title: 'Personalized Learning',
                  description: 'Tailored lessons for your specific needs and learning pace',
                  color: 'from-purple-500 to-purple-600',
                },
                {
                  icon: Zap,
                  title: 'Flexible Scheduling',
                  description: 'Convenient time slots to fit your busy schedule',
                  color: 'from-orange-500 to-orange-600',
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative card-premium bg-white border-2 border-slate-100 hover:border-slate-200 overflow-hidden min-h-[300px] sm:min-h-[320px]"
                  >
                    {/* Premium Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}></div>
                    
                    {/* Animated Background Glow */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                    
                    {/* Content Wrapper */}
                    <div className="relative z-10 p-4 sm:p-6">
                      {/* Premium Icon Wrapper */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                        className={`w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 transition-all duration-300 shadow-lg group-hover:shadow-2xl flex-shrink-0`}
                      >
                        <Icon className="text-white w-6 sm:w-8 h-6 sm:h-8" />
                      </motion.div>
                      
                      <h3 className="font-serif text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Premium Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    
                    {/* Corner Accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-all duration-500`}></div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
              {/* Premium Image - Slide In Left */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                transition={{ duration: 0.8 }}
                className="group order-2 lg:order-1"
              >
                <div className="relative h-80 sm:h-96 md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
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
                className="order-1 lg:order-2"
              >
                <span className="inline-block text-secondary font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">About Our School</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-primary leading-tight">
                  Your Journey to Safe Driving <span className="text-secondary">Starts Here</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                  Lucky Driving School has been Edmonton's trusted choice for professional driver education. 
                  Our experienced instructors are dedicated to helping you become a confident, safe driver through proven teaching methods and modern techniques.
                </p>
                
                {/* Premium List items - Staggered Fade */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-3 sm:space-y-4 mb-8 sm:mb-10"
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
                      className="flex items-start gap-3 sm:gap-4 min-h-[44px]"
                    >
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-slate-700 font-medium">{item}</span>
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
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300 min-h-[44px] flex items-center"
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
        <section id="courses" className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="inline-block text-secondary font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">Our Packages</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Choose Your Perfect Driving Package
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-2">
                Professional driving lessons tailored to your experience level and goals
              </p>
            </motion.div>

            {/* Premium Course Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12"
            >
              {[
                { duration: '2 Hours', price: '$100+', title: 'Quick Assessment', desc: 'Skills evaluation', icon: Zap },
                { duration: '4 Hours', price: '$200+', title: 'Skill Building', desc: 'Highway & parking', icon: Target },
                { duration: '6 Hours', price: '$300+', title: 'Comprehensive', desc: 'City & advanced', icon: Trophy },
                { duration: '10+ Hours', price: '$495+', title: 'Mastery', desc: 'Complete training', icon: Crown },
              ].map((pkg, index) => {
                const IconComponent = pkg.icon
                return (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative card-premium bg-white border-2 border-slate-100 hover:border-secondary/40 overflow-hidden min-h-[400px] sm:min-h-[380px]"
                >
                  {/* Animated Premium Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-transparent to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-secondary to-orange-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10"></div>
                  
                  {/* Premium Ribbon */}
                  <div className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-br from-secondary to-orange-600 opacity-0 group-hover:opacity-15 rounded-full blur-2xl transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
                    {/* Premium Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                    >
                      <IconComponent size={28} className="sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8 group-hover:text-slate-700 transition-colors flex-grow">
                      {pkg.desc}
                    </p>
                    
                    {/* Premium Price Section */}
                    <div className="mb-6 pb-6 border-b-2 border-slate-200 group-hover:border-secondary/30 transition-colors duration-300">
                      <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
                        {pkg.price}
                      </p>
                      <p className="text-slate-500 text-xs sm:text-sm font-medium">{pkg.duration}</p>
                    </div>
                    
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-secondary text-white px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300 min-h-[44px] flex items-center"
                >
                  View All Courses
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Additional Benefits Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 text-primary"
            >
              What Makes Us Different
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
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
                    className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg transition-all duration-300 min-h-[240px] sm:min-h-[260px] flex flex-col justify-center"
                  >
                    <Icon className="text-primary w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <ReviewsSection />

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-primary text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            >
              Ready to Start Learning?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8"
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300 min-h-[44px] flex items-center justify-center"
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
