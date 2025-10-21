'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { HeartIcon, BanknotesIcon } from '@heroicons/react/24/outline'

export default function PaymentPage({ params }: { params: { username: string } }) {
  const [amount, setAmount] = useState('10')
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'paypal' | 'crypto' | null>(null)
  const [customAmount, setCustomAmount] = useState(false)

  const quickAmounts = ['5', '10', '25', '50', '100']

  const paymentMethods = [
    { 
      id: 'stripe', 
      name: 'Credit/Debit Card', 
      description: 'Powered by Stripe',
      icon: '💳',
      fee: '2.5%'
    },
    { 
      id: 'paypal', 
      name: 'PayPal', 
      description: 'Fast & secure',
      icon: '🅿️',
      fee: '2.9%'
    },
    { 
      id: 'crypto', 
      name: 'Crypto', 
      description: 'BTC, ETH, USDC',
      icon: '₿',
      fee: '1%'
    },
  ]

  const handlePayment = () => {
    if (!selectedMethod || !amount) return
    // Payment processing would go here
    alert(`Processing $${amount} payment via ${selectedMethod}...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Creator Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6 animate-slide-up">
          {/* Header with gradient */}
          <div className="h-32 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 relative">
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center text-4xl border-4 border-white">
                🎨
              </div>
            </div>
          </div>

          {/* Creator Info */}
          <div className="pt-16 px-8 pb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Support @{params.username}
            </h1>
            <p className="text-slate-600 mb-6">
              Your support helps me create amazing content and keep it free for everyone. Thank you! ❤️
            </p>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Choose Amount
              </label>
              <div className="grid grid-cols-5 gap-3 mb-3">
                {quickAmounts.map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => {
                      setAmount(quickAmount)
                      setCustomAmount(false)
                    }}
                    className={`py-3 rounded-xl font-semibold transition-all ${
                      amount === quickAmount && !customAmount
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    ${quickAmount}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCustomAmount(true)}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  customAmount
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {customAmount ? 'Custom Amount' : 'Other Amount'}
              </button>
              {customAmount && (
                <div className="mt-3">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-semibold">
                      $
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-lg font-semibold"
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Payment Method
              </label>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id as any)}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                      selectedMethod === method.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{method.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold text-slate-900">{method.name}</div>
                        <div className="text-sm text-slate-500">{method.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-semibold text-slate-500">{method.fee} fee</span>
                      {selectedMethod === method.id && (
                        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                          <CheckIcon className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              disabled={!selectedMethod || !amount}
              className="w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary-500/30 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
            >
              <HeartIcon className="h-6 w-6" />
              <span>Support with ${amount}</span>
            </button>

            {/* Trust Badges */}
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <BanknotesIcon className="h-4 w-4" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4" />
                <span>Instant delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Powered by */}
        <div className="text-center text-slate-500 text-sm">
          <a href="/" className="hover:text-primary-600 transition-colors font-medium">
            Powered by CreatorPay
          </a>
          {' '}• Save 7% vs Patreon
        </div>
      </div>
    </div>
  )
}