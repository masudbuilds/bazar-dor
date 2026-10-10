# বাজার দর (BazarDor)  
A modern real-time commodity price tracking and market analysis platform for daily essentials in Bangladesh.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation️ & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Contributions](#contributions)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)

---

## About the Project 
**বাজার দর (BazarDor)** is a web application designed to bring transparency and accessibility to daily commodity and grocery prices in Bangladesh. By tracking price fluctuations across major wet markets and wholesale centers (such as Karwan Bazar, Mirpur-1, and Mohakhali), the platform empowers consumers and households to stay informed on real-time market rates, detect rising and falling price trends, and make informed purchasing decisions.

---

## Project Overview  
The objective of BazarDor is to eliminate price asymmetry for daily necessities like rice, vegetables, fish, meat, and pantry essentials.

- **Real-Time Visibility:** Instant access to updated market prices with Bengali numeral formatting.
- **Trend Detection:** Automated calculation of daily price changes to highlight top gainers and fallers.
- **Market Comparison:** Side-by-side comparison across multiple city markets to help consumers locate the best rates.
- **Seamless Experience:** Built with Next.js 16 and Tailwind CSS v4 for fast page transitions and mobile responsiveness.

---

## Key Features  
- **Live Price Marquee Ticker:** A smooth, real-time scrolling marquee ticker displaying current prices of essential commodities across the top of the platform.
- **Daily Risers & Fallers (দর বৃদ্ধি ও হ্রাস):** Automatically highlights the top 6 price risers (▲) and top 6 price fallers (▼) with clear delta badges and percentage changes.
- **Category Filtering & Dynamic Bengali Sorting:** Effortlessly browse commodities by category with numerical price sorting options (*কম থেকে বেশি*, *বেশি থেকে কম*, *সাধারণ*).
- **Comprehensive Product Details & Market Comparison:** Detailed product breakdown featuring minimum/maximum price summaries, unit indicators, and market-by-market comparison tables.
- **Secure Authentication & User Profile:** Complete authentication powered by BetterAuth supporting Email/Password, Google OAuth, and GitHub OAuth, alongside profile update capabilities.
- **Next.js 16 Route Protection:** Proxy-based route protection (`proxy.ts`) ensuring authorized access to detailed commodity analytics and user account management.

---

## Tech Stack  
**Frontend:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · DaisyUI 5  
**Backend:** Next.js Server Components & API Routes · BetterAuth · MongoDB Driver  
**Database:** MongoDB  
**Tools:** Git · GitHub · Vercel · VS Code  

---

## Dependencies  
Major production dependencies used in this project:

```json
{
  "next": "16.4.0",
  "react": "19.3.0",
  "react-dom": "19.3.0",
  "better-auth": "^1.7.7",
  "@better-auth/mongo-adapter": "^1.7.7",
  "mongodb": "^7.7.0",
  "react-hot-toast": "^2.6.1",
  "react-marquee-text": "^1.0.6",
  "tailwindcss": "^4",
  "daisyui": "^5.7.47"
}
```

---

## Installation️ & Setup
1. Clone the repository and install dependencies:

```bash
git clone https://github.com/masudbuilds/bazar-dor.git
cd bazar-dor
npm install
```

2. Set up environment variables by creating a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Social Authentication (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Folder Structure

```plaintext
bazar-dor/
│
├── public/                 # Static assets and icons
├── src/
│   ├── app/                # Next.js App Router pages and route handlers
│   │   ├── api/            # API endpoints (BetterAuth route handlers)
│   │   ├── category/       # Category dynamic routes
│   │   ├── product/        # Protected product details dynamic routes
│   │   ├── profile/        # User profile view and edit page
│   │   ├── sign-in/        # Sign-in authentication page
│   │   ├── sign-up/        # Sign-up registration page
│   │   ├── loading.tsx     # Global skeleton loading state
│   │   ├── not-found.tsx   # Custom 404 error page
│   │   ├── layout.tsx      # Root application layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Modular UI components
│   │   ├── cards/          # Reusable product cards
│   │   ├── category/       # Category views & filters
│   │   ├── common/         # Navbar, PriceTicker, Footer
│   │   ├── home/           # Hero, Risers, Fallers, All Products
│   │   ├── others/         # Sorting dropdowns & UI widgets
│   │   └── product/        # Price summary & market comparison tables
│   ├── lib/                # Auth configurations & database client
│   ├── types/              # TypeScript interfaces and schemas
│   ├── utils/              # API helpers and data formatters
│   └── proxy.ts            # Next.js 16 route protection proxy
├── package.json
└── README.md
```

---

## Contributions
Contributions are welcome!

| Name            | Role                | Contributions                            |  
|-----------------|---------------------|------------------------------------------|  
| Masud Rana      | Lead Developer      | Architecture, Fullstack Development, UI/UX |  

---

## How to Contribute

  - Fork the Project
  - Create a branch (`git checkout -b feature/AmazingFeature`)
  - Commit changes (`git commit -m 'Add some AmazingFeature'`)
  - Push the branch (`git push origin feature/AmazingFeature`)
  - Open a Pull Request

---

## License
Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Live URL:** https://bazar-dor-phi.vercel.app/
