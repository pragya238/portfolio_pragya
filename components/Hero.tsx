'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f2eefb 0%, #e0eef7 50%, #fbeee8 100%)' }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-50 animate-drift"
          style={{ width: 580, height: 580, background: '#c9b8e8', filter: 'blur(90px)', top: -140, right: -80 }}
        />
        <div
          className="absolute rounded-full opacity-40 animate-drift-slow"
          style={{ width: 420, height: 420, background: '#f5cdb8', filter: 'blur(80px)', bottom: -80, left: '8%', animationDelay: '-5s' }}
        />
        <div
          className="absolute rounded-full opacity-30"
          style={{ width: 300, height: 300, background: '#b8d4e8', filter: 'blur(70px)', top: '35%', left: '38%' }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-ink-soft" />
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-display font-light leading-[1.04] mb-4"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}
          >
            Pragya<br />
            <em className="text-ink-mid">Kashyap</em>
          </motion.h1>

          <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-2 mb-5">
            {['Frontend Dev', 'Full Stack', 'AI/ML Enthusiast'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[0.68rem] font-medium tracking-wide bg-white/70 text-ink-mid border border-lavender/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p {...fadeUp(0.5)} className="text-ink-soft text-[0.92rem] leading-relaxed max-w-md mb-8">
            Computer Science & AI undergraduate building aesthetic, full-stack web experiences — from React frontends to Node.js backends and ML pipelines.
          </motion.p>

          <motion.div {...fadeUp(0.62)} className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full bg-ink-dark text-white text-[0.8rem] tracking-wider uppercase hover:bg-ink-mid transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-dark/20"
            >
              View Work
            </a>
            <a
              href="mailto:kashyappragya23@gmail.com"
              className="px-6 py-2.5 rounded-full border border-ink-dark/25 text-ink-dark text-[0.8rem] tracking-wider uppercase hover:border-lavender hover:text-ink-mid transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.72)} className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/pragya238', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/pragya-kashyap-401788323/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kashyappragya23@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/60 border border-lavender/30 flex items-center justify-center text-ink-soft hover:text-lavender hover:border-lavender hover:bg-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — floating card stack */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[380px]">
            {/* Back cards */}
            <div
              className="absolute glass-card rounded-3xl w-[260px] h-[320px] shadow-xl"
              style={{ top: 0, left: 20, transform: 'rotate(-4deg)', background: 'rgba(232,224,245,0.7)', animation: 'float 6s ease-in-out infinite' }}
            />
            <div
              className="absolute glass-card rounded-3xl w-[260px] h-[320px] shadow-xl"
              style={{ top: 40, left: 0, transform: 'rotate(2deg)', background: 'rgba(224,238,247,0.7)', animation: 'float 7s ease-in-out 1s infinite' }}
            />
            {/* Front card */}
            <div
              className="absolute glass-card rounded-3xl w-[260px] shadow-2xl p-7 z-10"
              style={{ top: 80, left: 30, animation: 'float 5s ease-in-out 0.5s infinite' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4"
                style={{ background: 'linear-gradient(135deg, #c9b8e8, #b8d4e8)' }}
              >
                ✦
              </div>
              <h4 className="font-display text-xl font-medium text-ink-dark mb-1">Pragya Kashyap</h4>
              <p className="text-[0.7rem] uppercase tracking-widest text-ink-soft mb-4">Full Stack Developer</p>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'Node', 'Python', 'AI/ML', 'Figma'].map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-lavender-soft rounded-lg text-[0.65rem] text-ink-mid font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-soft hover:text-ink-dark transition-colors"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.18em]">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
