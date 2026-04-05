import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { Star, Award, Users, Target } from 'lucide-react'

export const metadata = {
  title: 'About Us | Lucky Driving School',
  description: 'Learn about Lucky Driving School, our mission, and our experienced instructors in Edmonton.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          title="About Lucky Driving School"
          subtitle="Building safe, confident drivers in Edmonton since day one"
          backgroundImage="/images/about-hero.jpg"
        />

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center text-primary mb-12">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Icon className="text-secondary mb-4" size={40} />
                    <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
              Our Expert Instructors
            </h2>

            <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-8 md:p-12">
              <h3 className="font-serif text-2xl font-bold mb-4">Meet Our Team</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Our instructors are certified professionals with years of real-world driving experience. They combine patience, expertise, and a genuine passion for helping students become confident drivers. Each instructor is dedicated to creating a supportive learning environment where you can develop the skills and confidence needed for safe, independent driving.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>All instructors are fully licensed and certified</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Average experience of 10+ years in professional driving</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Continuous training in latest teaching methods and safety standards</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Background checks and insurance certification completed</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: '500+', label: 'Students Trained' },
                { number: '95%', label: 'Road Test Pass Rate' },
                { number: '10+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-serif text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-lg text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold mb-6 text-primary">
              Ready to Learn from the Best?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Get started with Lucky Driving School today and discover why hundreds of students trust us for their driving education.
            </p>
            <a
              href="/courses"
              className="inline-block bg-secondary text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
            >
              Explore Our Courses
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
