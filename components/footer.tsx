import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Premium Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20 hidden sm:block"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 hidden sm:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <motion.div 
              className="p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-xl w-fit border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/logo.png"
                alt="Lucky Driving School Logo"
                width={50}
                height={50}
                className="h-10 sm:h-12 w-auto"
                priority
                quality={90}
              />
            </motion.div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Lucky Driving School</h3>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">Professional driving training with a proven track record of excellence and student success.</p>
            </div>
            <motion.div variants={containerVariants} className="flex gap-3">
              {[
                { Icon: Facebook, href: '#facebook' },
                { Icon: Twitter, href: '#twitter' },
                { Icon: Instagram, href: '#instagram' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  aria-label="Social media link"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-gradient-to-br from-white/20 to-white/10 hover:from-secondary hover:to-orange-600 flex items-center justify-center transition-all duration-300 border border-white/20"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-serif text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/courses', label: 'Courses' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex gap-2 group text-sm min-h-[44px] items-center"
                  >
                    <motion.svg 
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-serif text-lg font-bold">Contact Info</h4>
            <div className="space-y-3 text-blue-100 text-sm">
              <div className="flex gap-3 group cursor-pointer hover:text-white transition-colors">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm">3119 158 Street SW, Edmonton AB T6W5C9</span>
              </div>
              <div className="flex gap-3 group cursor-pointer hover:text-white transition-colors">
                <Phone size={20} className="flex-shrink-0 text-secondary group-hover:scale-110 transition-transform" />
                <div className="text-xs sm:text-sm">
                  <div className="min-h-[22px] flex items-center">+1 (587) 712-4929</div>
                </div>
              </div>
              <div className="flex gap-3 group cursor-pointer hover:text-white transition-colors">
                <Mail size={20} className="flex-shrink-0 mt-0.5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm break-all">Lakshmi@luckydrivingschool.net</span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-serif text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Hours</h4>
            <div className="space-y-3 text-slate-300 text-sm bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300">
              <div className="flex gap-3 min-h-[44px]">
                <Clock size={20} className="flex-shrink-0 text-secondary" />
                <div>
                  <div className="font-semibold text-white text-sm">Mon - Sat</div>
                  <div className="text-xs">7:00 AM - 6:30 PM</div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="font-semibold text-white text-sm">Sunday</div>
                <div className="text-xs">Holiday</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Divider */}
        <motion.div 
          variants={fadeInUp}
          className="border-t border-white/10 pt-6 sm:pt-8"
        >
          <p className="text-center text-slate-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Lucky Driving School. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
