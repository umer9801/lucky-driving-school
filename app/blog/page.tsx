'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { blogPosts } from '@/lib/blog-data'
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react'

const categories = ['All', 'Tips', 'Road Test', 'Beginner', 'Safety']

const categoryColorMap: Record<string, string> = {
  Tips: 'bg-blue-100 text-blue-700',
  'Road Test': 'bg-orange-100 text-orange-700',
  Beginner: 'bg-green-100 text-green-700',
  Safety: 'bg-red-100 text-red-700',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <BookOpen size={16} />
              Edmonton Driving Resources
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Driving Tips &amp; <span className="text-secondary">Resources</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Expert driving advice, Class 5 road test guides, winter driving tips, and everything you need to become a confident, safe driver in Edmonton, Alberta.
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-20 z-30 bg-white border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 hover:border-slate-200 overflow-hidden transition-all duration-500 flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          categoryColorMap[post.category] ?? 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-lg font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-secondary transition-colors duration-300 mt-auto group/link"
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                <p className="text-lg">No posts in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Driving Journey?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Book a lesson with Edmonton&apos;s most trusted driving instructor — Lakshmi Alluri at Lucky Driving School.
            </p>
            <Link
              href="/booking"
              className="btn-premium-secondary px-8 py-4 text-base"
            >
              Book a Lesson Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
