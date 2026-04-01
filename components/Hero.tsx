'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

// LeetCode SVG icon (official mark)
const LeetCodeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
)

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

          {/* Social links — now with LeetCode */}
          <motion.div {...fadeUp(0.72)} className="flex gap-3 items-center">
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

            {/* LeetCode — separate because it uses a custom SVG */}
            <a
              href="https://leetcode.com/u/pragya_tv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="w-10 h-10 rounded-full bg-white/60 border border-lavender/30 flex items-center justify-center text-ink-soft hover:text-[#FFA116] hover:border-[#FFA116] hover:bg-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <LeetCodeIcon />
            </a>
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
            <div
              className="absolute glass-card rounded-3xl w-[260px] h-[320px] shadow-xl"
              style={{ top: 0, left: 20, transform: 'rotate(-4deg)', background: 'rgba(232,224,245,0.7)', animation: 'float 6s ease-in-out infinite' }}
            />
            <div
              className="absolute glass-card rounded-3xl w-[260px] h-[320px] shadow-xl"
              style={{ top: 40, left: 0, transform: 'rotate(2deg)', background: 'rgba(224,238,247,0.7)', animation: 'float 7s ease-in-out 1s infinite' }}
            />
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
