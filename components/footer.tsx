import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Premium Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <motion.div 
              className="mb-6 p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl hover:from-white/20 hover:to-white/10 transition-all duration-300 w-fit border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/logo.png"
                alt="Lucky Driving School Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
                priority
                quality={90}
              />
            </motion.div>
            <h3 className="font-serif text-xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Lucky Driving School</h3>
            <p className="text-slate-300 leading-relaxed mb-6 text-sm">Professional driving training and education in Edmonton with a proven track record of excellence and student success.</p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 hover:from-secondary hover:to-orange-600 flex items-center justify-center transition-all duration-300 border border-white/20"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="font-serif text-lg font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/courses', label: 'Courses' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex gap-2 group text-sm"
                  >
                    <motion.svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="font-serif text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-blue-100 text-sm">
              <div className="flex gap-3 group cursor-pointer">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">3119 158 Street SW, Edmonton AB T6W5C9</span>
              </div>
              <div className="flex gap-3 group cursor-pointer">
                <Phone size={20} className="flex-shrink-0 text-secondary group-hover:scale-110 transition-transform" />
                <div className="group-hover:text-white transition-colors">
                  <div>+1 (780) 255-2999</div>
                  <div>+1 (587) 712-4929</div>
                </div>
              </div>
              <div className="flex gap-3 group cursor-pointer">
                <Mail size={20} className="flex-shrink-0 mt-0.5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Lakshmi@luckydrivingschool.net</span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="font-serif text-lg font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Business Hours</h4>
            <div className="space-y-4 text-slate-300 text-sm bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300">
              <div className="flex gap-3">
                <Clock size={20} className="flex-shrink-0 text-secondary" />
                <div>
                  <div className="font-semibold text-white">Mon - Sat</div>
                  <div>7:00 AM - 6:30 PM</div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="font-semibold text-white">Sunday</div>
                <div>Holiday</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Divider */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeInUp} 
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Lucky Driving School. All rights reserved. | Designed by Solvix Core
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
