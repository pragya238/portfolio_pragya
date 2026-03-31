'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'

const bgMap: Record<string, string> = {
  lavender: '#f2eefb',
  blue: '#e0eef7',
  peach: '#fbeee8',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-16 mx-4 md:mx-8 rounded-[2rem]"
      style={{ background: 'linear-gradient(145deg, #f2eefb 0%, #e8e0f5 100%)' }}
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-ink-soft" />
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">Skills</span>
          </div>
          <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            Technologies I<br /><em className="text-ink-mid">work with</em>
          </h2>
          <p className="mt-4 text-ink-soft text-[0.88rem] max-w-lg leading-relaxed">
            A diverse toolkit spanning frontend, backend, AI/ML, and design — always learning, always shipping.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass-card rounded-2xl p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <h4 className="text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft mb-3 font-medium">
                {cat.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white rounded-lg text-[0.72rem] text-ink-mid border border-lavender/25 hover:bg-lavender hover:text-white hover:border-lavender cursor-default transition-all duration-200 hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
