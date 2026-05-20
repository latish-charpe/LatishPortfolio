import { Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon } from './icons'

const socials = [
  { label: 'GitHub',   href: 'https://github.com/repos',                               icon: GithubIcon,  color: '#0f172a' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/latish-charpe-9536242a0',     icon: LinkedinIcon, color: '#0a66c2' },
  { label: 'Email',    href: 'mailto:latishcharpe39@gmail.com',                          icon: Mail,         color: '#ec4899' },
]

const navIds = ['home', 'about', 'skills', 'projects', 'certifications', 'contact']

export default function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(20px)',
    }}>
      <div className="wrap" style={{ paddingBlock: '3rem 2.25rem' }}>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(139,92,246,0.28)',
            }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>LC</span>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', letterSpacing: '-0.02em', fontFamily: 'Poppins, sans-serif' }}>Latish Charpe</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', marginTop: 2, fontFamily: 'Inter, sans-serif' }}>Data Analyst · AI & Data Science Student</p>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0 1.25rem', justifyContent: 'center' }}>
            {navIds.map(id => (
              <button
                key={id}
                onClick={() => go(id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.84rem', color: 'var(--text-3)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 500,
                  textTransform: 'capitalize', transition: 'color 0.2s ease',
                  padding: '0.25rem 0',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
              >
                {id}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {socials.map(({ label, href, icon: Icon, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: 'var(--text-3)', display: 'inline-flex', padding: 6, borderRadius: 8, transition: 'background 0.2s' }}
                whileHover={{ scale: 1.18, color: color, filter: `drop-shadow(0 3px 8px ${color}55)` }}
                transition={{ type: 'spring', stiffness: 420, damping: 14 }}
              >
                <Icon size={19} />
              </motion.a>
            ))}
          </div>
        </div>

        <hr />
        <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', textAlign: 'center', marginTop: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
          © {new Date().getFullYear()} Latish Charpe · Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}
