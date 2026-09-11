'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Clock } from 'lucide-react'
import { projects } from '@/lib/data'


type Project = (typeof projects)[number]

function ProjectSnapshot({ project }: { project: Project }) {
  const kind = project.id === 1 ? 'formfit' : project.id === 2 ? 'finance' : 'ml'
  return (
    <div className={`project-snapshot snapshot-${kind}`} aria-label={`${project.title} homepage preview`}>
      <div className="snapshot-window">
        <div className="snapshot-browserbar"><span className="snapshot-dots"><i /><i /><i /></span><span className="snapshot-url">project preview</span><span className="snapshot-menu">•••</span></div>
        {kind === 'formfit' ? (
          <div className="snapshot-page">
            <div className="snapshot-nav"><b>FormFit</b><span>Workspace</span><span>Why FormFit</span><i /></div>
            <div className="snapshot-formfit-hero"><div><small>THE LAST STEP BEFORE SUBMIT</small><strong>Make your next upload <em>fit.</em></strong><span className="snapshot-line" /></div><div className="snapshot-upload"><b>↑</b><span>Drop your file here</span></div></div>
            <div className="snapshot-cards"><span /><span /><span /></div>
          </div>
        ) : kind === 'finance' ? (
          <div className="snapshot-page snapshot-auth-page">
            <div className="snapshot-auth-logo"><span>₹</span><b>FinanceTracker</b></div>
            <div className="snapshot-auth-title">Welcome back</div>
            <div className="snapshot-auth-subtitle">Sign in to your account</div>
            <div className="snapshot-auth-field"><small>EMAIL</small><span>you@example.com</span></div>
            <div className="snapshot-auth-field"><small>PASSWORD</small><span>••••••••</span></div>
            <div className="snapshot-auth-button">Sign in</div>
            <div className="snapshot-auth-footer">Don't have an account? <b>Create one</b></div>
          </div>
        ) : (
          <div className="snapshot-page">
            <div className="snapshot-nav"><b>ML Studio</b><span>Experiments</span><span>Models</span><i /></div>
            <div className="snapshot-ml"><small>MODEL WORKSPACE</small><strong>Find the signal.</strong><div className="snapshot-model-row"><span><b>94.2%</b><small>validation accuracy</small></span><span><b>12</b><small>features selected</small></span></div><div className="snapshot-bars"><i /><i /><i /><i /><i /><i /></div></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-24 px-8 md:px-16 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-ink-soft" />
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">Projects</span>
          </div>
          <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            Things I've<br /><em className="text-ink-mid">built</em>
          </h2>
          <p className="mt-4 text-ink-soft text-[0.88rem] max-w-lg leading-relaxed">
            A selection of projects across task management, personal finance, and machine learning — each built with care for usability and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className={`group relative rounded-3xl overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                project.status === 'coming-soon'
                  ? 'border-dashed border-lavender/40 opacity-80'
                  : 'border-lavender/15 hover:border-lavender/30'
              }`}
            >
              {project.status === 'coming-soon' && (
                <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-peach text-ink-mid text-[0.62rem] uppercase tracking-widest font-medium">
                  Coming Soon
                </span>
              )}

              <ProjectSnapshot project={project} />

              <div className="p-6 bg-white">
                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-md bg-lavender-soft text-[0.65rem] text-ink-mid font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl font-light text-ink-dark mb-2">{project.title}</h3>
                <p className="text-[0.8rem] text-ink-soft leading-relaxed mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.75rem] text-ink-soft">
                      <span className="text-lavender mt-0.5 text-[0.5rem]">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 pt-4 border-t border-lavender/15">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.72rem] font-medium text-white transition-all hover:-translate-y-0.5"
                      style={{ background: project.accent }}
                    >
                      <ExternalLink size={11} /> Live Demo
                    </a>
                  ) : null}
                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-ink-dark/20 text-[0.72rem] text-ink-mid hover:border-lavender hover:text-lavender transition-all hover:-translate-y-0.5"
                    >
                      <Github size={11} /> Code
                    </a>
                  ) : null}
                  {project.status === 'coming-soon' && (
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-dashed border-ink-soft/40 text-[0.72rem] text-ink-soft cursor-default">
                      <Clock size={11} /> In Progress
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
