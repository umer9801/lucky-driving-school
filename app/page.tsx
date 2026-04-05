import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { CheckCircle, Users, Trophy, Zap } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          title="Learn to Drive with Confidence"
          subtitle="Professional driving lessons and road test preparation in Edmonton"
          backgroundImage="/images/hero-driving.jpg"
          ctaText="Start Your Journey"
          ctaLink="#courses"
        />

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary animate-slide-down">
              Why Choose Lucky Driving School?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center animate-slide-up transform hover:scale-105 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="text-secondary mx-auto mb-4 animate-bounce-in" size={40} style={{ animationDelay: `${index * 100}ms` }} />
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Courses Preview Section */}
        <section className="py-16 md:py-24 bg-white animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary animate-slide-down">
              Our Courses
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 text-pretty animate-slide-up">
              Choose from a variety of driving packages tailored to your experience level and goals
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { duration: '2 Hours', price: '$100+', title: 'Quick Assessment' },
                { duration: '4 Hours', price: '$200+', title: 'Skill Building' },
                { duration: '6 Hours', price: '$300+', title: 'Comprehensive' },
                { duration: '10+ Hours', price: '$495+', title: 'Mastery' },
              ].map((pkg, index) => (
                <div key={index} className="bg-gradient-to-br from-primary to-blue-600 text-white p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="font-serif text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-2xl font-bold mb-2">{pkg.price}</p>
                  <p className="text-blue-100 text-sm">{pkg.duration}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/courses"
                className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold mb-6 animate-slide-down">Ready to Start Learning?</h2>
            <p className="text-lg text-blue-100 mb-8 animate-slide-up">
              Book your first lesson today and take the first step towards becoming a confident, safe driver.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold text-lg transform hover:scale-110 active:scale-95 animate-bounce-in"
            >
              Book Your Lesson Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
