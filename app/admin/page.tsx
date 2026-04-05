'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setAdminSession } from '@/lib/admin-storage'
import { Eye, EyeOff } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))

    if (password === 'admin123') {
      setAdminSession()
      router.push('/admin/dashboard')
    } else {
      setError('Invalid password. Hint: Try "admin123"')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-600 to-secondary flex items-center justify-center px-4 animate-fade-in">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8 animate-slide-down">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="font-serif font-bold text-primary text-2xl">LD</span>
            </div>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white mb-2">Lucky Driving</h1>
          <p className="text-blue-100">Admin Access</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Enter your password to access the dashboard</p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Password Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm animate-shake">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Logging in...
                  </>
                ) : (
                  'Login to Dashboard'
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              Demo password: <span className="font-mono bg-gray-100 px-2 py-1 rounded">admin123</span>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { icon: '📊', label: 'Analytics' },
            { icon: '📋', label: 'Manage' },
            { icon: '📥', label: 'Export' }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center text-white animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <p className="text-sm font-medium">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
