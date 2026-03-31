import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Pragya Kashyap — Frontend Developer & AI/ML Enthusiast',
  description: 'Portfolio of Pragya Kashyap, a Computer Science & AI undergraduate specializing in React, Next.js, and modern full-stack development.',
  keywords: ['React Developer', 'Frontend Developer', 'Next.js', 'AI/ML', 'Full Stack'],
  openGraph: {
    title: 'Pragya Kashyap — Frontend Developer',
    description: 'Building aesthetic, responsive, and impactful web experiences.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${dmSans.variable} font-body bg-[#fdfcff] text-ink-dark overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
