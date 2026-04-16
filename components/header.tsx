'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/contact', label: 'Contact' },
  ]

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
  }

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl shadow-2xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 group hover:opacity-90 transition-opacity duration-300"
          >
            <motion.div 
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/logo.png"
                alt="Lucky Driving School Logo"
                width={50}
                height={50}
                className="h-12 sm:h-14 w-auto drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                priority
                quality={90}
              />
            </motion.div>
            <div className="hidden xs:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <h1 className="font-serif text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-secondary transition-all duration-300">Lucky</h1>
                <p className="text-xs font-semibold text-slate-400 group-hover:text-secondary/80 transition-colors duration-300 whitespace-nowrap">Driving School</p>
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.href} 
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  href={link.href}
                  className="text-slate-200 hover:text-white font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg hover:bg-white/10"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-secondary to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link
                href="/booking"
                className="btn-premium-secondary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 hover:bg-white/10 rounded-lg transition-all duration-300 text-slate-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden border-t border-slate-700/50 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.href} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all duration-200 rounded-lg font-medium min-h-[44px] flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  className="pt-2 mt-2 border-t border-slate-700/30"
                >
                  <Link
                    href="/booking"
                    className="block w-full btn-premium-secondary text-center py-3 text-sm font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
