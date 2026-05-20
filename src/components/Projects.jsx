import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, Activity, Code, Server } from 'lucide-react'
import { GithubIcon } from './icons'
import { SectionHead } from './About'
import TiltCard from './TiltCard'

const projects = [
  {
    id: 'ipl',
    featured: true,
    title: 'IPL Match Analysis Dashboard',
    description: 'A comprehensive analytics dashboard for visualizing IPL match data. Explores player statistics, team performance trends, win-loss patterns, and advanced outcome analysis.',
    tech: ['Python', 'Power BI', 'Pandas', 'NumPy'],
    github: 'https://github.com/latish-charpe/ipl-analysis-dashboard',
    icon: Activity,
    color: '#ec4899',
  },
  {
    id: 'hms',
    title: 'Hospital Management System',
    description: 'Complete HMS platform covering patient registration, appointments, and medical records management.',
    tech: ['Python', 'SQL', 'System Design'],
    github: 'https://github.com/latish-charpe/hospital-ms',
    icon: Activity,
    color: '#8b5cf6',
  },
  {
    id: 'medstore',
    title: 'MedStore Management',
    description: 'A streamlined medical store management system for inventory, billing, and supplier tracking.',
    tech: ['Python', 'SQL', 'DBMS'],
    github: 'https://github.com/latish-charpe/medstore',
    icon: Database,
    color: '#ec4899',
  },
  {
    id: 'chess',
    title: 'Smart Chess AI',
    description: 'AI-powered chess system using Deep Q-Network (DQN) reinforcement learning for intelligent gameplay and move prediction.',
    tech: ['Python', 'Reinforcement Learning', 'DQN', 'AI'],
    github: 'https://github.com/latish-charpe/Smart-Chess-AI-Using-Reinforcement-Learning-DQN',
    icon: Server,
    color: '#8b5cf6',
  },
  {
    id: 'stock',
    title: 'Stock Price Prediction',
    description: 'Predictive time-series modeling using LSTM neural networks to forecast future stock market trends based on historical data.',
    tech: ['Python', 'LSTM', 'Deep Learning', 'Pandas'],
    github: 'https://github.com/latish-charpe/stock-price-prediction-lstm',
    icon: Activity,
    color: '#ec4899',
  },
]

function ProjectCard({ project, delay, inView }) {
  const Icon = project.icon || Code

  return (
    <TiltCard
      inView={inView}
      delay={delay}
      className="card card-lift"
      style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', overflow: 'hidden', height: '100%' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          background: `rgba(${project.color === '#ec4899' ? '236,72,153' : '139,92,246'}, 0.10)`,
          border: `1px solid rgba(${project.color === '#ec4899' ? '236,72,153' : '139,92,246'}, 0.22)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={18} style={{ color: project.color }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <h3 style={{
              fontSize: '1rem', fontWeight: 600, color: 'var(--text-1)',
              letterSpacing: '-0.02em', lineHeight: 1.3,
              fontFamily: 'Poppins, sans-serif',
            }}>{project.title}</h3>
            {project.featured && (
              <span style={{
                padding: '0.15rem 0.65rem', borderRadius: 999,
                fontSize: '0.62rem', fontWeight: 700,
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase',
                fontFamily: 'Poppins, sans-serif',
              }}>
                Featured
              </span>
            )}
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.88rem', lineHeight: 1.72, color: 'var(--text-2)', flex: 1, marginBottom: '1.25rem', fontFamily: 'Inter, sans-serif' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {project.tech.map(t => (
          <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '0.22rem 0.7rem' }}>{t}</span>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-2)',
            textDecoration: 'none',
            padding: '0.4rem 0.9rem', borderRadius: 8,
            background: 'var(--bg-subtle)', border: '1px solid var(--border)',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.2s ease',
          }}
          whileHover={{
            color: 'var(--purple)',
            background: '#fff',
            borderColor: 'rgba(139,92,246,0.3)',
            boxShadow: '0 3px 10px rgba(139,92,246,0.10)',
          }}
        >
          <motion.span whileHover={{ rotate: [0, -12, 12, -8, 0] }} transition={{ duration: 0.4 }} style={{ display: 'inline-flex' }}>
            <GithubIcon size={14} />
          </motion.span>
          View Source
        </motion.a>
      </div>
    </TiltCard>
  )
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="section-alt" ref={ref}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHead
            eyebrow="Projects"
            title="Selected Work"
            subtitle="A collection of data-driven projects, from analytics dashboards to machine learning systems."
          />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(288px, 1fr))', gap: '1.25rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={0.12 + i * 0.05} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
