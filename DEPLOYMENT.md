# 🚀 Deployment Guide

This guide covers deploying CreatorPay to various platforms.

## Table of Contents
- [Vercel (Recommended)](#vercel-recommended)
- [Cloudflare Workers](#cloudflare-workers)
- [Self-Hosted](#self-hosted)
- [Environment Variables](#environment-variables)
- [Payment Integration](#payment-integration)

## Vercel (Recommended)

### Why Vercel?
- Zero-config Next.js deployment
- Global CDN
- Automatic HTTPS
- Preview deployments
- Free tier available

### Steps

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Set Environment Variables**
```bash
vercel env add STRIPE_SECRET_KEY
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
# Add all other env vars...
```

5. **Deploy to Production**
```bash
vercel --prod
```

### Custom Domain
```bash
vercel domains add yourdomain.com
```

## Cloudflare Workers

### Prerequisites
- Cloudflare account
- Wrangler CLI installed

### Steps

1. **Install Wrangler**
```bash
npm install -g wrangler
```

2. **Login to Cloudflare**
```bash
wrangler login
```

3. **Configure wrangler.toml**
```toml
name = "creatorpay"
main = "./worker.js"
compatibility_date = "2024-01-01"

[env.production]
route = "creatorpay.com/*"
```

4. **Deploy**
```bash
npm run build
wrangler deploy
```

## Self-Hosted

### Using Docker

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

2. **Build and Run**
```bash
docker build -t creatorpay .
docker run -p 3000:3000 creatorpay
```

### Using PM2

```bash
npm install -g pm2
npm run build
pm2 start npm --name "creatorpay" -- start
```

## Environment Variables

### Required
```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
```

### Optional
```env
# Database
DATABASE_URL=postgresql://...

# Auth
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://yourdomain.com

# Analytics
NEXT_PUBLIC_GA_ID=G-...
```

## Payment Integration

### Stripe Setup

1. **Create Stripe Account**: https://stripe.com
2. **Get API Keys**: Dashboard → Developers → API Keys
3. **Setup Webhook**: 
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `payment_intent.succeeded`, `payment_intent.payment_failed`
4. **Add Keys to Environment**

### PayPal Setup

1. **Create PayPal App**: https://developer.paypal.com
2. **Get Client ID & Secret**
3. **Configure Return URL**: `https://yourdomain.com/api/webhooks/paypal`
4. **Add Keys to Environment**

### Testing Payments

**Stripe Test Cards**:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

**PayPal Sandbox**:
- Use sandbox account credentials

## Post-Deployment Checklist

- [ ] Test all payment methods
- [ ] Verify webhook endpoints
- [ ] Check SSL certificate
- [ ] Test mobile responsiveness
- [ ] Setup monitoring/alerts
- [ ] Configure custom domain
- [ ] Add Google Analytics
- [ ] Test signup flow
- [ ] Verify dashboard loads
- [ ] Check all API routes

## Monitoring

### Vercel Analytics
Enable in Vercel dashboard for free performance monitoring.

### Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
```

### Uptime Monitoring
Use services like:
- UptimeRobot (free)
- Pingdom
- StatusCake

## Performance Optimization

1. **Enable Caching**
```javascript
// next.config.js
module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
```

2. **Use CDN for Static Assets**
3. **Enable Gzip/Brotli Compression**
4. **Lazy Load Images**
5. **Minimize JavaScript Bundle**

## Security

1. **HTTPS Only** - Enforce SSL
2. **Security Headers** - CSP, HSTS, etc.
3. **Rate Limiting** - Prevent abuse
4. **Input Validation** - Sanitize all inputs
5. **Webhook Verification** - Verify all payment webhooks

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Loading
- Check spelling
- Restart server after changes
- Verify in deployment dashboard

### Payment Webhook Issues
- Verify webhook URL is accessible
- Check webhook secret matches
- Review webhook logs in payment provider dashboard

## Support

For deployment issues:
- Check GitHub Issues
- Review Next.js deployment docs
- Contact platform support (Vercel/Cloudflare)

---

**Ready to launch? Choose your platform and follow the guide above!**