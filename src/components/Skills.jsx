import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, BarChart2, Database, PieChart, FileSpreadsheet, LineChart, Layers, Hash } from 'lucide-react'
import { GithubIcon } from './icons'
import { SectionHead } from './About'

const primary = [
  { name: 'Python',        icon: Code2,          cat: 'Language',   color: '#ec4899', bg: 'rgba(236,72,153,0.08)',   border: 'rgba(236,72,153,0.18)'   },
  { name: 'SQL',           icon: Database,        cat: 'Database',   color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',   border: 'rgba(139,92,246,0.18)'   },
  { name: 'Power BI',      icon: PieChart,        cat: 'BI Tool',    color: '#ec4899', bg: 'rgba(236,72,153,0.08)',   border: 'rgba(236,72,153,0.18)'   },
  { name: 'Excel',         icon: FileSpreadsheet, cat: 'Analysis',   color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',   border: 'rgba(139,92,246,0.18)'   },
  { name: 'Pandas',        icon: Layers,          cat: 'Library',    color: '#ec4899', bg: 'rgba(236,72,153,0.08)',   border: 'rgba(236,72,153,0.18)'   },
  { name: 'NumPy',         icon: Hash,            cat: 'Library',    color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',   border: 'rgba(139,92,246,0.18)'   },
  { name: 'Data Analysis', icon: BarChart2,       cat: 'Core Skill', color: '#ec4899', bg: 'rgba(236,72,153,0.08)',   border: 'rgba(236,72,153,0.18)'   },
  { name: 'Visualization', icon: LineChart,       cat: 'Core Skill', color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',   border: 'rgba(139,92,246,0.18)'   },
]

const secondary = [
  { name: 'GitHub', icon: GithubIcon },
  { name: 'Machine Learning', icon: null },
  { name: 'Artificial Intelligence', icon: null },
  { name: 'Jupyter Notebook', icon: null },
  { name: 'HTML / CSS', icon: null },
  { name: 'Statistics', icon: null },
]

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" ref={ref}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHead
            eyebrow="Skills"
            title="Tools & Technologies"
            subtitle="Core technical stack for data analysis, visualization, and AI development."
          />
        </motion.div>

        {/* Primary skill cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {primary.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.38, delay: 0.06 + i * 0.05 }}
                className="card card-lift"
                whileHover={{ y: -5 }}
                style={{ padding: '1.35rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'default' }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: skill.bg,
                  border: `1px solid ${skill.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={19} style={{ color: skill.color }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-1)', fontFamily: 'Poppins, sans-serif' }}>{skill.name}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginTop: 3, fontWeight: 500, fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>{skill.cat}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Secondary tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.52 }}
        >
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Also Familiar With</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {secondary.map(({ name, icon: Icon }) => (
              <motion.span
                key={name}
                className="tag"
                whileHover={{ y: -2, scale: 1.02 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'default' }}
              >
                {Icon && <Icon size={13} />}
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
