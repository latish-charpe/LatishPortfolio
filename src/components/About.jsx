import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Database } from 'lucide-react'

/* ── Shared section header ── */
export function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      {eyebrow && <p className="eyebrow" style={{ marginBottom: '0.65rem' }}>{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>{subtitle}</p>}
    </div>
  )
}

const rise = (d = 0, inView) => ({
  initial:    { opacity: 0, y: 18 },
  animate:    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
  transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const education = [
  { degree: 'BTech — AI & Data Science', institution: 'MIT Aurangabad', period: 'Current', icon: GraduationCap },
  { degree: 'BS — Data Science & Applications', institution: 'IIT Madras', period: 'Ongoing', icon: Database },
]

const highlights = [
  { label: 'Specialty', value: 'Data Analytics & Visualization' },
  { label: 'Languages', value: 'Python, SQL' },
  { label: 'Tools',     value: 'Power BI, Pandas, NumPy, Excel' },
  { label: 'Interests', value: 'AI / ML, Data Engineering' },
  { label: 'Available', value: 'Internships & Full-time Placements', accent: true },
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="section-alt" ref={ref}>
      <div className="wrap">
        <motion.div {...rise(0, inView)}>
          <SectionHead
            eyebrow="About"
            title="Turning data into decisions."
            subtitle="Final-year AI & Data Science student who loves building data-driven solutions and uncovering insights from complex datasets."
          />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>

          {/* Bio card */}
          <motion.div {...rise(0.1, inView)}>
            <div className="card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: '0.975rem', lineHeight: 1.85, color: 'var(--text-2)', marginBottom: '2rem', fontFamily: 'Inter, sans-serif' }}>
                I'm <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>Latish Charpe</strong>, passionate about
                transforming complex datasets into clear, actionable insights. I work at the intersection of data analytics
                and AI — using Python, SQL, and visualization tools to tell compelling data stories.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: 'auto' }}>
                {highlights.map(({ label, value, accent }) => (
                  <div key={label} style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    paddingBottom: '0.9rem', borderBottom: '1px solid var(--border)',
                  }}>
                    <span style={{
                      fontSize: '0.73rem', fontWeight: 700, color: 'var(--text-3)',
                      width: 72, flexShrink: 0, letterSpacing: '0.08em',
                      textTransform: 'uppercase', paddingTop: '0.1rem',
                      fontFamily: 'Poppins, sans-serif',
                    }}>{label}</span>
                    <span style={{
                      fontSize: '0.92rem',
                      color: accent ? 'var(--purple)' : 'var(--text-1)',
                      lineHeight: 1.5,
                      fontWeight: accent ? 700 : 500,
                      fontFamily: 'Inter, sans-serif',
                      ...(accent ? {
                        padding: '0.15rem 0.65rem',
                        borderRadius: 999,
                        background: 'rgba(139,92,246,0.08)',
                        border: '1px solid rgba(139,92,246,0.20)',
                      } : {}),
                    }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div {...rise(0.18, inView)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Education */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>Education</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {education.map(edu => {
                  const Icon = edu.icon
                  return (
                    <div key={edu.degree} className="card card-lift" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', cursor: 'default' }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(139,92,246,0.10))',
                        border: '1px solid rgba(139,92,246,0.18)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <Icon size={19} style={{ color: 'var(--purple)' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.4, fontFamily: 'Poppins, sans-serif' }}>{edu.degree}</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginTop: 4, fontFamily: 'Inter, sans-serif' }}>{edu.institution} · {edu.period}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quote */}
            <div className="card" style={{
              padding: '1.75rem',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(245,240,255,0.6))',
              borderColor: 'rgba(139,92,246,0.18)',
            }}>
              <div style={{ width: 36, height: 3, background: 'linear-gradient(90deg, #ec4899, #8b5cf6)', borderRadius: 3, marginBottom: '1.1rem' }} />
              <p style={{ fontSize: '0.98rem', fontStyle: 'italic', color: 'var(--text-2)', lineHeight: 1.82, fontFamily: 'Inter, sans-serif' }}>
                "In God we trust; all others must bring data."
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: '0.75rem', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>— W. Edwards Deming</p>
            </div>

            {/* Availability */}
            <div className="card" style={{
              padding: '1rem 1.5rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              borderColor: 'rgba(16,185,129,0.22)',
              background: 'rgba(16,185,129,0.04)',
            }}>
              <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', display: 'block', flexShrink: 0 }} />
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
                Actively looking for <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>data analyst internships</span> and placements
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
