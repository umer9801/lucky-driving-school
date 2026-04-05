import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Lucky Driving School"
              width={50}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <h3 className="font-serif text-xl font-bold mb-2">Lucky Driving School</h3>
            <p className="text-blue-100">Professional driving training and education in Edmonton.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-blue-100 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-blue-100 text-sm">
              <div className="flex gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>3119 158 Street SW, Edmonton AB T6W5C9</span>
              </div>
              <div className="flex gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <div>
                  <div>+1 (780) 255-2999</div>
                  <div>+1 (587) 712-4929</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>Lakshmi@luckydrivingschool.net</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Hours</h4>
            <div className="space-y-2 text-blue-100 text-sm">
              <div className="flex gap-2">
                <Clock size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon - Sat: 7:00 AM - 6:30 PM</div>
                  <div>Sunday: Holiday</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-8">
          <p className="text-center text-blue-100 text-sm">
            &copy; {new Date().getFullYear()} Lucky Driving School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
