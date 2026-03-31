'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-16 mx-4 md:mx-8 mb-10 rounded-[2rem] relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f2eefb 0%, #e0eef7 50%, #fbeee8 100%)' }}
    >
      {/* Decorative blob */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,184,232,0.18)', filter: 'blur(80px)', top: -250, left: '50%', transform: 'translateX(-50%)' }}
      />

      <div ref={ref} className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-ink-soft" />
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">Contact</span>
            <span className="w-6 h-[1px] bg-ink-soft" />
          </div>
          <h2 className="font-display font-light leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}>
            Let's create<br /><em className="text-ink-mid">something together</em>
          </h2>
          <p className="text-ink-soft text-[0.9rem] leading-relaxed max-w-md mx-auto mb-10">
            Open to internships, collaborations, and conversations about frontend development, full-stack projects, and AI/ML.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <a
            href="mailto:kashyappragya23@gmail.com"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-ink-dark text-white text-[0.8rem] font-medium tracking-wide hover:bg-ink-mid transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink-dark/20"
          >
            <Mail size={14} /> Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/pragya-kashyap-401788323/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-white/80 border border-lavender/30 text-ink-mid text-[0.8rem] font-medium hover:border-lavender hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg"
          >
            <Linkedin size={14} /> LinkedIn <ArrowUpRight size={11} />
          </a>
          <a
            href="https://github.com/pragya238"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-white/80 border border-lavender/30 text-ink-mid text-[0.8rem] font-medium hover:border-lavender hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg"
          >
            <Github size={14} /> GitHub <ArrowUpRight size={11} />
          </a>
        </motion.div>

        {/* Email highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-2xl border border-lavender/25"
        >
          <div className="w-8 h-8 rounded-full bg-lavender-soft flex items-center justify-center">
            <Mail size={13} className="text-lavender" />
          </div>
          <a
            href="mailto:kashyappragya23@gmail.com"
            className="text-[0.82rem] text-ink-mid hover:text-ink-dark transition-colors"
          >
            kashyappragya23@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
