'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import type { BlogPost } from '@/lib/blog-data'
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react'

const categoryColorMap: Record<string, string> = {
  Tips: 'bg-blue-100 text-blue-700',
  'Road Test': 'bg-orange-100 text-orange-700',
  Beginner: 'bg-green-100 text-green-700',
  Safety: 'bg-red-100 text-red-700',
}

interface Props {
  post: BlogPost
  related: BlogPost[]
}

export function BlogPostClient({ post, related }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 md:h-96 w-full overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block ${
                categoryColorMap[post.category] ?? 'bg-slate-100 text-slate-700'
              }`}
            >
              {post.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight"
            >
              {post.title}
            </motion.h1>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
                <span className="flex items-center gap-1.5">
                  <User size={15} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={15} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={15} />
                  {post.readTime}
                </span>
              </div>

              {/* HTML Content */}
              <div
                className="prose prose-slate prose-lg max-w-none
                  prose-headings:font-serif prose-headings:text-primary
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-7 prose-h3:mb-3
                  prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-li:text-slate-700 prose-li:mb-1
                  prose-strong:text-slate-800 prose-strong:font-semibold
                  prose-ul:my-4 prose-ol:my-4
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag size={15} className="text-slate-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Book a Lesson CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl p-6 shadow-lg sticky top-28"
              >
                <h3 className="font-serif text-xl font-bold mb-3">Ready to Hit the Road?</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Book a driving lesson with Lakshmi Alluri — Edmonton&apos;s trusted, patient, certified instructor.
                </p>
                <ul className="space-y-2 text-sm text-blue-100 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> 95% first-attempt pass rate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Female instructor available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Flexible scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Packages from $100
                  </li>
                </ul>
                <Link
                  href="/booking"
                  className="block w-full btn-premium-secondary text-center py-3 text-sm"
                >
                  Book a Lesson
                </Link>
                <a
                  href="tel:+15877124929"
                  className="block w-full text-center mt-3 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  📞 +1 (587) 712-4929
                </a>
              </motion.div>

              {/* Related Posts */}
              <div>
                <h3 className="font-serif text-lg font-bold text-primary mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="flex gap-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                          <Clock size={11} /> {rel.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-secondary mt-4 font-semibold transition-colors"
                >
                  View All Posts <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-slate-900 to-primary text-white py-16 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Driving?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Turn what you just read into real skills. Book a lesson with Lucky Driving School Edmonton today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-premium-secondary px-8 py-4 text-base">
                Book a Lesson
              </Link>
              <Link href="/courses" className="btn-outline-premium px-8 py-4 text-base">
                View Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
