'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, BanknotesIcon } from '@heroicons/react/24/outline'

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState<'page' | 'dashboard'>('page')

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
          <Link
            href="/signup"
            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30"
          >
            Get Started
          </Link>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">See CreatorPay in Action</h1>
          <p className="text-xl text-slate-600">Experience what your supporters and you will see</p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl shadow-sm border border-slate-200 p-1">
            <button
              onClick={() => setSelectedDemo('page')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedDemo === 'page'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Payment Page
            </button>
            <button
              onClick={() => setSelectedDemo('dashboard')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedDemo === 'dashboard'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dashboard
            </button>
          </div>
        </div>

        {/* Demo Preview */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 text-center text-sm text-slate-600 font-mono">
              {selectedDemo === 'page' 
                ? 'creatorpay.link/yourname'
                : 'creatorpay.com/dashboard'
              }
            </div>
          </div>
          <div className="aspect-video bg-slate-50 flex items-center justify-center">
            <iframe
              src={selectedDemo === 'page' ? '/pay/demo' : '/dashboard'}
              className="w-full h-full border-0"
              title="Demo"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/signup"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/30"
          >
            <span>Create Your Page Now</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-slate-600">Setup takes less than 5 minutes • No credit card required</p>
        </div>
      </div>
    </div>
  )
}