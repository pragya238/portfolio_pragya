'use client'
import { marqueeItems } from '@/lib/data'

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div
      className="py-5 overflow-hidden border-y border-lavender/20"
      style={{ background: 'linear-gradient(90deg, #f2eefb, #e0eef7, #fbeee8, #f2eefb)' }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-4 whitespace-nowrap text-[0.75rem] uppercase tracking-[0.14em] font-medium ${
              item === '✦' ? 'text-lavender text-base' : 'text-ink-soft'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
