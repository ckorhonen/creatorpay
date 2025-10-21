'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowTrendingUpIcon, 
  BanknotesIcon, 
  ChartBarIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'
import EarningsChart from '@/components/EarningsChart'
import PaymentMethodCard from '@/components/PaymentMethodCard'

export default function Dashboard() {
  const [copiedLink, setCopiedLink] = useState(false)

  const copyPaymentLink = () => {
    navigator.clipboard.writeText('https://creatorpay.link/yourname')
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  // Mock data
  const stats = {
    totalEarnings: 12450,
    thisMonth: 3280,
    growth: 23.5,
    supporters: 156,
  }

  const paymentMethods = [
    { id: 1, name: 'Stripe', status: 'active', earnings: 8920, icon: 'stripe' },
    { id: 2, name: 'PayPal', status: 'active', earnings: 2340, icon: 'paypal' },
    { id: 3, name: 'Crypto', status: 'pending', earnings: 1190, icon: 'crypto' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BanknotesIcon className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
              CreatorPay
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors">
              <Cog6ToothIcon className="h-6 w-6" />
            </button>
            <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full" />
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">Track your earnings and manage payment methods</p>
        </div>

        {/* Payment Link Card */}
        <div className="bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Your Payment Page</div>
              <div className="text-2xl font-bold mb-4">creatorpay.link/yourname</div>
              <p className="text-sm opacity-90">Share this link to start receiving payments</p>
            </div>
            <button
              onClick={copyPaymentLink}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2"
            >
              <LinkIcon className="h-5 w-5" />
              <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-600">Total Earnings</div>
              <BanknotesIcon className="h-5 w-5 text-slate-400" />
            </div>
            <div className="text-3xl font-bold text-slate-900">${stats.totalEarnings.toLocaleString()}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-600">This Month</div>
              <ChartBarIcon className="h-5 w-5 text-slate-400" />
            </div>
            <div className="text-3xl font-bold text-slate-900">${stats.thisMonth.toLocaleString()}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-600">Growth</div>
              <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-green-600">+{stats.growth}%</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-600">Supporters</div>
              <CreditCardIcon className="h-5 w-5 text-slate-400" />
            </div>
            <div className="text-3xl font-bold text-slate-900">{stats.supporters}</div>
          </div>
        </div>

        {/* Charts & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Earnings Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Earnings Overview</h2>
            <EarningsChart />
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Methods</h2>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <PaymentMethodCard key={method.id} method={method} />
              ))}
              <button className="w-full border-2 border-dashed border-slate-300 rounded-lg p-4 text-slate-600 hover:border-primary-500 hover:text-primary-600 transition-colors font-medium">
                + Add Payment Method
              </button>
            </div>
          </div>
        </div>

        {/* Fee Comparison */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="bg-green-500 text-white rounded-full p-2">
              <ArrowTrendingUpIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-green-900 mb-1">You're saving $700/month vs Patreon</h3>
              <p className="text-green-800">With CreatorPay's 2.5% fee, you keep an extra 7.5% of your earnings. That's ${((stats.thisMonth * 0.075)).toFixed(0)} more in your pocket this month.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}