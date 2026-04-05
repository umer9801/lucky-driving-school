'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getBookings, getContacts } from '@/lib/admin-storage'
import { TrendingUp, Calendar, Mail, Clock } from 'lucide-react'

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration
      const result = Math.min(Math.floor(progress * end), end)
      setCount(result)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

// Stat Card Component
function StatCard({
  icon: Icon,
  label,
  value,
  href,
  color,
  delay,
}: {
  icon: any
  label: string
  value: number
  href: string
  color: string
  delay: number
}) {
  return (
    <Link
      href={href}
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-slide-up border-l-4 ${color}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">{label}</p>
          <p className="text-4xl font-bold text-foreground">
            <AnimatedCounter end={value} />
          </p>
        </div>
        <div className={`p-4 rounded-lg ${color} bg-opacity-10`}>
          <Icon size={32} className={`text-${color.split('-')[1]}-600`} />
        </div>
      </div>
    </Link>
  )
}

// Recent Activity Item
function ActivityItem({
  type,
  title,
  time,
  delay,
}: {
  type: 'booking' | 'contact'
  title: string
  time: string
  delay: number
}) {
  const icon = type === 'booking' ? '📋' : '📧'
  const color = type === 'booking' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'

  return (
    <div
      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`text-2xl mt-1`}>{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground truncate">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
        {type === 'booking' ? 'Booking' : 'Contact'}
      </div>
    </div>
  )
}

export default function DashboardHome() {
  const [bookings, setBookings] = useState<any[]>([])
  const [contacts, setContacts] = useState<any[]>([])

  useEffect(() => {
    setBookings(getBookings())
    setContacts(getContacts())
  }, [])

  const pendingBookings = bookings.filter(b => b.status === 'pending').length
  const unreadContacts = contacts.filter(c => c.status === 'unread').length

  // Recent activity - combine and sort by date
  const recentActivity = [
    ...bookings.slice(-5).map(b => ({
      type: 'booking' as const,
      title: `${b.fullName} - ${b.courseName}`,
      time: new Date(b.createdAt).toLocaleDateString(),
    })),
    ...contacts.slice(-5).map(c => ({
      type: 'contact' as const,
      title: `${c.fullName} - ${c.subject}`,
      time: new Date(c.createdAt).toLocaleDateString(),
    })),
  ]
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    .slice(0, 8)

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <div className="animate-slide-down">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Here&apos;s what&apos;s happening with your driving school today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Calendar}
          label="Total Bookings"
          value={bookings.length}
          href="/admin/dashboard/bookings"
          color="border-blue-500"
          delay={0}
        />
        <StatCard
          icon={Clock}
          label="Pending Bookings"
          value={pendingBookings}
          href="/admin/dashboard/bookings"
          color="border-yellow-500"
          delay={100}
        />
        <StatCard
          icon={Mail}
          label="Total Contacts"
          value={contacts.length}
          href="/admin/dashboard/contacts"
          color="border-green-500"
          delay={200}
        />
        <StatCard
          icon={TrendingUp}
          label="Unread Messages"
          value={unreadContacts}
          href="/admin/dashboard/contacts"
          color="border-red-500"
          delay={300}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/dashboard/bookings"
              className="block w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              View All Bookings
            </Link>
            <Link
              href="/admin/dashboard/contacts"
              className="block w-full bg-gradient-to-r from-secondary to-red-600 text-white py-3 rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              View All Contacts
            </Link>
          </div>

          {/* Summary Stats */}
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-blue-600 h-full rounded-full transition-all duration-1000 animate-scale-in" style={{ width: `${(pendingBookings / Math.max(bookings.length, 1)) * 100}%` }}></div>
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {bookings.length === 0 ? '0' : Math.round((pendingBookings / bookings.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {recentActivity.length > 0 ? (
              recentActivity.map((activity, index) => (
                <ActivityItem
                  key={index}
                  type={activity.type}
                  title={activity.title}
                  time={activity.time}
                  delay={index * 50}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-sm">No activity yet</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Manage Bookings',
            description: 'View, edit, and manage all course bookings',
            icon: '📋',
            href: '/admin/dashboard/bookings',
            color: 'from-blue-500 to-blue-600',
            delay: '0ms',
          },
          {
            title: 'Manage Contacts',
            description: 'View and respond to contact form submissions',
            icon: '📧',
            href: '/admin/dashboard/contacts',
            color: 'from-green-500 to-green-600',
            delay: '100ms',
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up`}
            style={{ animationDelay: card.delay }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90`}></div>
            <div className="relative p-6 text-white">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-blue-50 text-sm mb-4">{card.description}</p>
              <div className="inline-block bg-white text-primary px-4 py-2 rounded-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                Go Now
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
