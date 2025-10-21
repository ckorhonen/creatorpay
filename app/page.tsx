import Link from 'next/link'
import { ArrowRightIcon, BanknotesIcon, ChartBarIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BanknotesIcon className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
              CreatorPay
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-slate-600 hover:text-slate-900 font-medium">
              Dashboard
            </Link>
            <Link
              href="/signup"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <SparklesIcon className="h-4 w-4" />
            <span>Save 7% vs Patreon • Launch in 5 minutes</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 text-balance">
            One Link for
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> All Your Payments</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto text-balance">
            Stop losing money to fragmented payment systems. Consolidate Stripe, PayPal, and crypto into one beautiful branded page.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/signup"
              className="group bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/30 flex items-center space-x-2"
            >
              <span>Start for Free</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-lg border border-slate-200"
            >
              View Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">2-3%</div>
              <div className="text-sm text-slate-600">Platform Fee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">5 min</div>
              <div className="text-sm text-slate-600">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">∞</div>
              <div className="text-sm text-slate-600">Payment Methods</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything you need, nothing you don't</h2>
          <p className="text-xl text-slate-600">Built for creators who want results, not complexity</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow animate-slide-up">
            <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <BanknotesIcon className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Multiple Payment Methods</h3>
            <p className="text-slate-600">
              Accept Stripe, PayPal, and crypto payments all in one place. Your supporters choose their preferred method.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <ChartBarIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Unified Dashboard</h3>
            <p className="text-slate-600">
              See all your earnings in one place. Track performance, analyze trends, and make data-driven decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Lower Fees, Higher Earnings</h3>
            <p className="text-slate-600">
              Keep 97-98% of what you earn vs 90% on Patreon. That's an extra $700 on every $10,000 you make.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to save 7% on every payment?</h2>
          <p className="text-xl mb-8 opacity-90">Join creators who are keeping more of what they earn</p>
          <Link
            href="/signup"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl"
          >
            <span>Get Started Now</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BanknotesIcon className="h-6 w-6 text-primary-600" />
              <span className="font-bold text-slate-900">CreatorPay</span>
            </div>
            <div className="text-sm text-slate-600">
              © 2024 CreatorPay. Built for creators, by creators.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}