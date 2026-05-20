import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHead } from './About'
import TiltCard from './TiltCard'
import { Cloud, Cpu, Briefcase, BarChart2, Trophy, Brain, LineChart, Code } from 'lucide-react'

const certs = [
  { id: 'gc',     organization: 'Google Cloud + Hack2Skill', title: 'Gen AI Exchange Hackathon',            description: 'Participated in the Gen AI Exchange Hackathon 2025 under the "Personalized Career and Skills Advisor" problem statement.', icon: Cloud,       color: '#ec4899' },
  { id: 'intel',  organization: 'Intel + Digital India',     title: 'AI For All',                          description: 'Successfully completed the AI Appreciate stage under the AI For All initiative.',                                         icon: Cpu,         color: '#8b5cf6' },
  { id: 'del',    organization: 'Deloitte Forage',           title: 'Data Analytics Job Simulation',       description: 'Completed practical tasks involving data analysis and forensic technology simulations.',                                    icon: Briefcase,   color: '#ec4899' },
  { id: 'tt24',   organization: 'Tech Tip 24',              title: 'Data Analytics Using Power BI',       description: 'Completed a hands-on Power BI workshop with an end-to-end analytics project.',                                            icon: BarChart2,   color: '#8b5cf6' },
  { id: 'sih',    organization: 'MIT Chhatrapati Sambhajinagar', title: 'SIH 2025 Internal Hackathon',    description: 'Successfully participated in the Internal Hackathon for Smart India Hackathon 2025.',                                       icon: Trophy,      color: '#ec4899' },
  { id: 'nptel',  organization: 'NPTEL IIT Kanpur',         title: 'AI in Industrial & Management Engg', description: 'Successfully completed the NPTEL certification course with Elite certification.',                                          icon: Brain,       color: '#8b5cf6' },
  { id: 'skill',  organization: 'Skill Course',             title: 'Power BI for Beginners',              description: 'Completed beginner-level Power BI training focused on dashboards and data visualization.',                                 icon: LineChart,   color: '#ec4899' },
  { id: 'ibm',    organization: 'IBM',                      title: 'Data Analysis with Python',           description: 'Certified in data analysis techniques using Python via Coursera.',                                                         icon: Code,        color: '#8b5cf6' },
  { id: 'ms',     organization: 'Microsoft',                title: 'Intro to Generative AI & Agents',    description: 'Completed fundamental training on Generative AI and Agents via Microsoft Learn.',                                          icon: Cpu,         color: '#ec4899' },
  { id: 'nptel2', organization: 'NPTEL IIT Madras',         title: 'Python for Data Science',             description: 'Successfully completed the NPTEL certification course for data science fundamentals.',                                     icon: Code,        color: '#8b5cf6' },
  { id: 'cc',     organization: 'CognitiveClass',           title: 'Prompt Engineering',                  description: 'Certified in advanced prompt engineering techniques via IBM Developer.',                                                    icon: Brain,       color: '#ec4899' },
]

export default function Certifications() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="certifications" ref={ref}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHead
            eyebrow="Certifications"
            title="Credentials"
            subtitle="Industry-recognized certifications in data science, AI, and analytics."
          />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.25rem' }}>
          {certs.map((cert, i) => {
            const Icon = cert.icon
            const isPink   = cert.color === '#ec4899'
            const bgColor  = isPink ? 'rgba(236,72,153,0.08)'  : 'rgba(139,92,246,0.08)'
            const bdrColor = isPink ? 'rgba(236,72,153,0.20)'  : 'rgba(139,92,246,0.20)'

            return (
              <TiltCard
                key={cert.id}
                inView={inView}
                delay={0.05 + i * 0.055}
                className="card card-lift"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', cursor: 'default', height: '100%' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: bgColor,
                    border: `1px solid ${bdrColor}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={20} style={{ color: cert.color }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.35, fontFamily: 'Poppins, sans-serif' }}>{cert.title}</p>
                    <p style={{ fontSize: '0.76rem', color: 'var(--text-3)', marginTop: '0.3rem', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{cert.organization}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.72, flex: 1, fontFamily: 'Inter, sans-serif' }}>
                  {cert.description}
                </p>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
