'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-md shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity duration-300">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/logo.png"
                alt="Lucky Driving School Logo"
                width={50}
                height={50}
                className="h-12 w-auto drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                priority
                quality={90}
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="font-serif text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-secondary transition-all duration-300">Lucky</h1>
                <p className="text-xs font-semibold text-slate-400 group-hover:text-secondary/80 transition-colors duration-300">Driving School</p>
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
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
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/booking"
                className="hidden md:block btn-premium-secondary"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300 text-slate-200"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 border-t border-slate-700/50 bg-slate-800/50 backdrop-blur-sm"
            >
              {navLinks.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05 }}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg mx-2 mb-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: navLinks.length * 0.05 }}>
                <Link
                  href="/booking"
                  className="block mx-4 mt-4 btn-premium-secondary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
