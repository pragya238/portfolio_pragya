'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stack } from '@/lib/data'

const categories = ['All', 'Frontend', 'Backend', 'Language', 'AI/ML', 'Database', 'Design', 'Tools']

const catColors: Record<string, string> = {
  Frontend: '#c9b8e8',
  Backend: '#b8d4e8',
  Language: '#f5cdb8',
  'AI/ML': '#d4c9e8',
  Database: '#c8dde8',
  Design: '#f0d4c8',
  Tools: '#d4e8c8',
}

export default function Stack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? stack : stack.filter((s) => s.category === active)

  return (
    <section
      id="stack"
      className="py-24 px-8 md:px-16 mx-4 md:mx-8 rounded-[2rem]"
      style={{ background: 'linear-gradient(160deg, #e0eef7 0%, #fbeee8 60%, #f2eefb 100%)' }}
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-ink-soft" />
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">Full Stack</span>
          </div>
          <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            My complete<br /><em className="text-ink-mid">tech stack</em>
          </h2>
          <p className="mt-4 text-ink-soft text-[0.88rem] max-w-lg leading-relaxed">
            From pixel-perfect React UIs to Express APIs, database schemas, and ML pipelines — I work across the full spectrum.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-[0.72rem] font-medium tracking-wide transition-all duration-200 ${
                active === cat
                  ? 'bg-ink-dark text-white shadow-md'
                  : 'bg-white/70 text-ink-mid border border-lavender/30 hover:border-lavender hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Stack grid */}
        <motion.div layout className="flex flex-wrap gap-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.label}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group relative"
            >
              <div
                className="px-5 py-2.5 rounded-2xl glass-card flex items-center gap-2.5 cursor-default hover:-translate-y-1 hover:shadow-lg transition-all duration-250 border border-white/80"
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: catColors[item.category] || '#c9b8e8' }}
                />
                <span className="text-[0.82rem] font-medium text-ink-dark">{item.label}</span>
                <span className="text-[0.62rem] text-ink-soft ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full stack diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-14 grid md:grid-cols-3 gap-4"
        >
          {[
            {
              title: 'Frontend',
              icon: '🎨',
              desc: 'React & Next.js with Tailwind CSS — building responsive, animated, accessible interfaces.',
              items: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
              bg: '#f2eefb',
            },
            {
              title: 'Backend',
              icon: '⚙️',
              desc: 'Node.js & Express APIs with Prisma ORM, MySQL, and Firebase for real-time features.',
              items: ['Node.js', 'Express.js', 'Prisma', 'MySQL', 'Firebase'],
              bg: '#e0eef7',
            },
            {
              title: 'AI / ML',
              icon: '🤖',
              desc: 'Python data pipelines with Pandas, NumPy, and Scikit-learn for intelligent solutions.',
              items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Viz'],
              bg: '#fbeee8',
            },
          ].map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-white/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              style={{ background: layer.bg + 'cc' }}
            >
              <div className="text-2xl mb-3">{layer.icon}</div>
              <h4 className="font-display text-xl font-light text-ink-dark mb-2">{layer.title}</h4>
              <p className="text-[0.75rem] text-ink-soft leading-relaxed mb-4">{layer.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {layer.items.map((item) => (
                  <span key={item} className="px-2.5 py-0.5 bg-white/80 rounded-lg text-[0.67rem] text-ink-mid border border-lavender/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
