import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHead } from './About'
import TiltCard from './TiltCard'

export default function Achievements() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="achievements" className="section-alt" ref={ref}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHead
            eyebrow="Achievements"
            title="Beyond the Classroom"
            subtitle="Milestones outside academics that reflect discipline and drive."
          />
        </motion.div>

        <TiltCard
          inView={inView}
          delay={0.12}
          className="card card-lift"
          style={{ maxWidth: 820, padding: '2rem 2.25rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', cursor: 'default' }}
        >
          {/* Trophy icon */}
          <div style={{
            width: 56, height: 56, borderRadius: 16, flexShrink: 0,
            background: 'linear-gradient(135deg, rgba(236,72,153,0.10), rgba(139,92,246,0.12))',
            border: '1px solid rgba(139,92,246,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.55rem',
            boxShadow: '0 4px 14px rgba(139,92,246,0.12)',
          }}>
            🏆
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.55rem', flexWrap: 'wrap' }}>
              <h3 style={{
                fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-1)',
                letterSpacing: '-0.02em', fontFamily: 'Poppins, sans-serif',
              }}>
                State Level Championship
              </h3>
              <span style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '0.2rem 0.75rem', borderRadius: 999,
                fontSize: '0.7rem', fontWeight: 700,
                background: 'linear-gradient(135deg, rgba(236,72,153,0.10), rgba(139,92,246,0.12))',
                border: '1px solid rgba(139,92,246,0.22)',
                color: 'var(--purple)',
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>
                Sports
              </span>
            </div>

            <p style={{
              fontSize: '0.9rem', fontWeight: 600, color: 'var(--purple)',
              marginBottom: '0.75rem', fontFamily: 'Inter, sans-serif',
            }}>
              Sepak Takraw
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-2)', fontFamily: 'Inter, sans-serif' }}>
              Represented MIT Aurangabad at the State Level Sepak Takraw Championship —
              demonstrating teamwork, competitive resilience, and discipline at a regional level.
            </p>
          </div>
        </TiltCard>
      </div>
    </section>
  )
}
