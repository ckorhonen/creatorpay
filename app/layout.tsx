import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CreatorPay - One Link for All Your Payments',
  description: 'Save 7% vs Patreon. Consolidate Stripe, PayPal, and crypto payments in one beautiful branded page.',
  keywords: 'creator payments, patreon alternative, payment consolidation, creator economy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}