'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const highlights = [
  { icon: '💻', title: 'Frontend Dev', desc: 'React, Next.js & modern CSS' },
  { icon: '🔧', title: 'Full Stack', desc: 'Node.js, Express & databases' },
  { icon: '🤖', title: 'AI / ML', desc: 'Python, Pandas & NumPy' },
  { icon: '🧠', title: 'DSA', desc: 'Data Structures, Algorithms & Problem Solving' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left — Text */}
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
              I'm a Computer Science & AI undergraduate who blends creativity with technical problem-solving. I specialize in building aesthetic, responsive full-stack web applications — from clean React frontends to robust Node.js backends.
            </p>
            <p>
              Beyond frontend, I'm growing my interest in AI/ML and data visualization — building intelligent solutions and presenting insights through clean, meaningful interfaces.
            </p>
            <p>
              Outside tech, I express creativity through content creation, dancing, and photography, which directly shapes my design sensibility and attention to detail.
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
                style={{ background: ['#f2eefb', '#e0eef7', '#fbeee8', '#f2eefb'][i] }}
              >
                <div className="text-xl mb-1.5">{h.icon}</div>
                <h5 className="text-[0.8rem] font-medium text-ink-dark mb-0.5">{h.title}</h5>
                <p className="text-[0.7rem] text-ink-soft">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Photo + Education card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-5"
        >
          {/* Photo card */}
          <div className="relative">
            {/* Decorative blob behind photo */}
            <div
              className="absolute -top-6 -right-6 w-64 h-64 rounded-full opacity-40 pointer-events-none"
              style={{ background: '#c9b8e8', filter: 'blur(50px)' }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full opacity-30 pointer-events-none"
              style={{ background: '#f5cdb8', filter: 'blur(40px)' }}
            />

            <div
              className="relative rounded-3xl overflow-hidden border border-white/80 shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #f2eefb, #e0eef7)' }}
            >
              {/* Offset border accent */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-lavender/30 -translate-x-2 translate-y-2 z-0"
              />
              <div className="relative z-10 aspect-[4/4.2] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/pragya.jpeg"
                  alt="Pragya Kashyap"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Overlay name tag */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="glass-card rounded-2xl px-4 py-3 flex items-center justify-between border border-white/80">
                  <div>
                    <p className="text-[0.82rem] font-medium text-ink-dark">Pragya Kashyap</p>
                    <p className="text-[0.65rem] uppercase tracking-widest text-ink-soft">CS & AI Undergraduate</p>
                  </div>
                  <div className="flex gap-1.5">
                    {['React', 'Next.js', 'Python'].map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-lavender-soft rounded-md text-[0.6rem] text-ink-mid border border-lavender/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div
            className="relative rounded-2xl p-6 overflow-hidden border border-white/70 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #f2eefb 0%, #e0eef7 55%, #fbeee8 100%)' }}
          >
            <div className="absolute top-0 right-4 text-[5rem] leading-none text-lavender/20 font-display pointer-events-none select-none">✦</div>
            <span className="inline-block px-4 py-1 bg-white rounded-full text-[0.65rem] tracking-widest uppercase text-ink-mid font-medium mb-4">
              Education
            </span>
            <h3 className="font-display text-xl font-light leading-snug text-ink-dark mb-1">
              B.Tech — CS & Artificial Intelligence
            </h3>
            <p className="text-[0.75rem] text-ink-soft mb-4">Newton School of Technology × Rishihood University</p>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-lavender/20">
              {[
                { label: 'Graduating', value: '2028' },
                { label: 'Status', value: '4th Sem' },
                { label: 'Focus', value: 'AI + Web' },
              ].map((m) => (
                <div key={m.label}>
                  <span className="block text-[0.62rem] uppercase tracking-widest text-ink-soft mb-0.5">{m.label}</span>
                  <span className="text-[0.85rem] font-medium text-ink-dark">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
