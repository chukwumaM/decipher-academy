# Wendy Luxury (Next.js E-commerce)

Modern, mobile-first luxury e-commerce website with product catalog, cart, checkout, admin dashboard, Paystack support, bank transfer flow, MongoDB order management, and optional Google Sheets sync.

## Features
- Luxury black/white/gold UI with responsive layout.
- Hero slider (admin-manageable via API).
- Category pages: Men's Wear, Female Wear, Corporate Wear, Shoes, Bags, Household Accessories.
- Product cards with image, price, sizes, quantity, auto stock status.
- Cart system (add/update/remove/total).
- Checkout with delivery logic + pickup days.
- Payment options: Paystack + manual bank transfer proof upload.
- Order save to MongoDB + optional Google Sheets append.
- Auto stock decrement after order creation.
- Admin login + weekly orders/revenue stats + order list.
- WhatsApp floating button with prefilled message.

## Tech Stack
- Next.js 14 (React + API routes)
- MongoDB (Mongoose)
- Paystack API
- Google Sheets API (optional)

## Quick Start
1. Install dependencies
   ```bash
   npm install
   ```
2. Copy env file
   ```bash
   cp .env.example .env.local
   ```
3. Fill `.env.local` values (MongoDB, Paystack, admin, optional Google Sheets).
4. Run dev server
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`.

## API Endpoints
- `GET/POST /api/products`
- `PUT/DELETE /api/products/:id`
- `GET/POST /api/orders`
- `GET/POST /api/slides`
- `POST /api/admin/login`
- `GET /api/admin/stats`
- `POST /api/paystack/init`
- `POST /api/upload`

## Deployment
### Vercel
- Import repo into Vercel.
- Set all env vars from `.env.example`.
- Deploy.

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Add env vars and deploy.

## Notes
- Ensure `/public/uploads` is writable for local proof/image uploads.
- For production image uploads, connect to Cloudinary/S3 for durable storage.
- Google Sheets integration appends each order row to `Orders!A:F` when credentials are set.
