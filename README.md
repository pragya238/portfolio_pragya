# Pragya Kashyap — Portfolio

A Next.js 14 portfolio with Framer Motion animations, Tailwind CSS, and TypeScript.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → open http://localhost:3000

# Build for production
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → click **Deploy**
4. Done! Vercel auto-detects Next.js ✓

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx       # Sticky nav + scroll progress
│   ├── Hero.tsx         # Landing section
│   ├── Marquee.tsx      # Scrolling tech strip
│   ├── About.tsx        # About + education card
│   ├── Skills.tsx       # Skills grid
│   ├── Projects.tsx     # Project cards
│   ├── Stack.tsx        # Full stack with filter tabs
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
└── lib/
    └── data.ts          # All content/data in one place
```

## Customisation

All content lives in `lib/data.ts` — update projects, skills, and stack there.
