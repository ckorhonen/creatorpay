'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckIcon, BanknotesIcon } from '@heroicons/react/24/outline'

export default function Signup() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Handle signup
      console.log('Signup:', formData)
      window.location.href = '/dashboard'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <BanknotesIcon className="h-10 w-10 text-primary-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
              CreatorPay
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Start Accepting Payments</h1>
          <p className="text-xl text-slate-600">Setup takes less than 5 minutes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Signup Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= s
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    {step > s ? <CheckIcon className="h-6 w-6" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        step > s ? 'bg-primary-600' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Create Your Account</h2>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Choose Your Username</h2>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Username
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                        creatorpay.link/
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                        className="w-full pl-36 pr-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="yourname"
                      />
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      This will be your payment page URL
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Choose Your Plan</h2>
                  <div className="space-y-3">
                    <button
                      type="button"
                      className="w-full p-6 rounded-xl border-2 border-primary-500 bg-primary-50 text-left hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-slate-900">Starter</span>
                        <span className="text-3xl font-bold text-primary-600">2.5%</span>
                      </div>
                      <p className="text-slate-600">Perfect for getting started</p>
                      <ul className="mt-4 space-y-2 text-sm text-slate-700">
                        <li className="flex items-center space-x-2">
                          <CheckIcon className="h-4 w-4 text-green-600" />
                          <span>All payment methods</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckIcon className="h-4 w-4 text-green-600" />
                          <span>Unified dashboard</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckIcon className="h-4 w-4 text-green-600" />
                          <span>Custom branding</span>
                        </li>
                      </ul>
                    </button>

                    <button
                      type="button"
                      className="w-full p-6 rounded-xl border-2 border-slate-200 bg-white text-left hover:border-slate-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-slate-900">Pro</span>
                        <span className="text-3xl font-bold text-slate-600">2%</span>
                      </div>
                      <p className="text-slate-600">For established creators</p>
                      <p className="mt-2 text-sm text-slate-500">Coming soon...</p>
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center space-x-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30"
                >
                  {step === 3 ? 'Create Account' : 'Continue'}
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
                Sign in
              </Link>
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Save 7% vs Patreon</h3>
              <p className="text-slate-600">
                Keep more of what you earn with our transparent 2.5% fee. That's $700 more per $10k.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Multiple Payment Methods</h3>
              <p className="text-slate-600">
                Accept credit cards, PayPal, and crypto. Let your supporters choose their preferred way to pay.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Beautiful Dashboard</h3>
              <p className="text-slate-600">
                Track all your earnings in one place with real-time analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}