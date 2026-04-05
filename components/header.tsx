'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md shadow-2xl border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity duration-300">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Lucky Driving School"
                width={50}
                height={50}
                className="h-12 w-auto drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300">Lucky</h1>
              <p className="text-xs font-semibold text-slate-300 group-hover:text-secondary transition-colors duration-300">Driving School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-100 hover:text-secondary font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg hover:bg-white/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-secondary to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="hidden md:block bg-gradient-to-r from-secondary to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md"
            >
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300 text-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700/50 bg-slate-800/50 backdrop-blur-sm animate-slide-down">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-slate-100 hover:text-secondary hover:bg-white/10 transition-all duration-300 rounded-lg mx-2 mb-1"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="block mx-4 mt-4 bg-gradient-to-r from-secondary to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
