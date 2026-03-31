'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { icon: '💻', title: 'Frontend Dev', desc: 'React, Next.js & modern CSS' },
  { icon: '🔧', title: 'Full Stack', desc: 'Node.js, Express & databases' },
  { icon: '🤖', title: 'AI / ML', desc: 'Python, Pandas & NumPy' },
  { icon: '🧠', title: 'DSA', desc: 'Data Structures & Algorithms, Problem Solving'},
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-ink-soft" />
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">About Me</span>
          </div>
          <h2 className="font-display font-light leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            Creative dev with an<br /><em className="text-ink-mid">eye for design</em>
          </h2>
          <div className="space-y-4 text-ink-soft text-[0.88rem] leading-relaxed mb-8">
            <p>
              I'm a Computer Science & AI undergraduate who blends creativity with technical problem-solving. I specialize in building aesthetic, responsive full-stack web applications — from clean React frontends to robust Node.js backends and database schemas.
            </p>
            <p>
              Beyond frontend, I'm growing my interest in AI/ML and data visualization — building intelligent solutions and presenting insights through clean, meaningful interfaces.
            </p>
            <p>
              Outside tech, I express creativity through editing, dancing, and photography, which directly shapes my design sensibility and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-2xl border border-lavender/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
                style={{
                  background: ['#f2eefb', '#e0eef7', '#fbeee8', '#f2eefb'][i],
                }}
              >
                <div className="text-xl mb-1.5">{h.icon}</div>
                <h5 className="text-[0.8rem] font-medium text-ink-dark mb-0.5">{h.title}</h5>
                <p className="text-[0.7rem] text-ink-soft">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div
            className="relative rounded-3xl p-8 overflow-hidden border border-white/70 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #f2eefb 0%, #e0eef7 55%, #fbeee8 100%)' }}
          >
            <div className="absolute top-0 right-6 text-[7rem] leading-none text-lavender/25 font-display pointer-events-none select-none">
              ✦
            </div>
            <span className="inline-block px-4 py-1.5 bg-white rounded-full text-[0.68rem] tracking-widest uppercase text-ink-mid font-medium mb-6">
              Education
            </span>
            <h3 className="font-display text-2xl font-light leading-snug text-ink-dark mb-2">
              B.Tech in Computer Science<br />& Artificial Intelligence
            </h3>
            <p className="text-[0.8rem] text-ink-soft mb-6">
              Newton School of Technology × Rishihood University
            </p>
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-lavender/20">
              {[
                { label: 'Graduating', value: '2028' },
                { label: 'Status', value: '4th Sem' },
                { label: 'Focus', value: 'AI + Web' },
              ].map((m) => (
                <div key={m.label}>
                  <span className="block text-[0.65rem] uppercase tracking-widest text-ink-soft mb-1">{m.label}</span>
                  <span className="text-[0.9rem] font-medium text-ink-dark">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['React Developer', 'Full Stack', 'AI/ML Enthusiast', 'Open Source'].map((t) => (
                <span key={t} className="px-3 py-1 bg-white/70 rounded-full text-[0.68rem] text-ink-mid border border-lavender/25">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
