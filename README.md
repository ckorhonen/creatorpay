# 💸 CreatorPay - One Link for All Your Payments

**Save 7% vs Patreon.** A premium payment consolidation platform for creators that accepts Stripe, PayPal, and crypto in one beautiful branded page.

![CreatorPay](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### For Creators
- 🔗 **Single Branded Payment Page** - One link for all your payment methods
- 💳 **Multiple Payment Methods** - Accept Stripe, PayPal, and crypto
- 📊 **Unified Dashboard** - See all earnings in one place with real-time analytics
- 💰 **Lower Fees** - Keep 97.5% of earnings (2.5% fee) vs 90% on Patreon
- 🎨 **Premium Design** - Beautiful, modern UI that creators are proud to share
- ⚡ **Fast Setup** - Launch in 5 minutes

### For Supporters
- 🚀 **One-Click Support** - Choose your preferred payment method
- 🔒 **Secure Payments** - Industry-standard security
- 💱 **Mobile Optimized** - Perfect experience on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI, Heroicons
- **Charts**: Recharts
- **Payments**: Stripe, PayPal, Web3 (planned)
- **Deployment**: Vercel / Cloudflare Workers ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ckorhonen/creatorpay.git
cd creatorpay

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📚 Project Structure

```
creatorpay/
├── app/
│   ├── api/              # API routes
│   │   ├── payments/     # Payment processing
│   │   ├── webhooks/     # Payment webhooks
│   │   └── earnings/     # Earnings data
│   ├── dashboard/        # Creator dashboard
│   ├── pay/[username]/  # Payment pages
│   ├── signup/           # Onboarding flow
│   ├── demo/             # Live demo
│   └── page.tsx          # Landing page
├── components/          # Reusable components
│   ├── EarningsChart.tsx
│   └── PaymentMethodCard.tsx
└── public/             # Static assets
```

## 🎯 Core Pages

### 1. Landing Page (`/`)
- Hero section with value proposition
- Feature highlights
- Social proof and stats
- CTA for signup

### 2. Payment Page (`/pay/[username]`)
- Beautiful branded payment interface
- Multiple payment method selection
- Quick amount buttons + custom amount
- Real-time fee calculation
- Trust badges

### 3. Dashboard (`/dashboard`)
- Earnings overview with charts
- Payment method management
- Growth metrics
- Copyable payment link

### 4. Signup Flow (`/signup`)
- 3-step onboarding
- Username reservation
- Plan selection
- Instant activation

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Cloudflare Workers

```bash
# Build for production
npm run build

# Deploy to Cloudflare
npx wrangler deploy
```

### Environment Variables

Create a `.env.local` file:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...

# Database (Optional)
DATABASE_URL=...

# Authentication (Optional)
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

## 💰 Fee Structure

| Plan | Platform Fee | vs Patreon | Savings on $10k |
|------|-------------|-----------|----------------|
| Starter | 2.5% | 7.5% less | **$700** |
| Pro | 2.0% | 8% less | **$800** |
| Patreon | 10% | - | - |

*Plus payment processor fees (Stripe/PayPal/Crypto standard rates)*

## 🖌️ Design Philosophy

### 80% UX/Design, 20% Technical
- Every interaction feels premium
- Smooth animations and transitions
- Clear visual hierarchy
- Mobile-first responsive design
- Accessible color contrast

### Design Principles
1. **Clarity** - Users always know what to do next
2. **Speed** - Fast load times and instant feedback
3. **Trust** - Professional design builds confidence
4. **Simplicity** - Remove friction at every step

## 🛣️ Roadmap

### Phase 1 (Current MVP)
- [x] Landing page
- [x] Payment page with multiple methods
- [x] Dashboard with analytics
- [x] Signup flow
- [ ] Stripe integration
- [ ] PayPal integration

### Phase 2
- [ ] Crypto payments (BTC, ETH, USDC)
- [ ] Custom domains
- [ ] Email notifications
- [ ] Supporter management
- [ ] Subscription support

### Phase 3
- [ ] Mobile apps (iOS/Android)
- [ ] Advanced analytics
- [ ] A/B testing tools
- [ ] Team accounts
- [ ] API for integrations

## 📊 Key Metrics to Track

- **Conversion Rate**: Landing → Signup
- **Time to First Payment**: Signup → First $
- **Average Transaction**: Per payment
- **Payment Method Split**: Stripe vs PayPal vs Crypto
- **Creator Retention**: 30/60/90 day

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 📧 Contact

Chris Korhonen - [@ckorhonen](https://github.com/ckorhonen)

Project Link: [https://github.com/ckorhonen/creatorpay](https://github.com/ckorhonen/creatorpay)

---

**Built with ❤️ for creators who want to keep more of what they earn.**

*Save 7% vs Patreon • One link for all payments • Setup in 5 minutes*