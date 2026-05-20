import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',           id: 'home' },
  { label: 'About',          id: 'about' },
  { label: 'Skills',         id: 'skills' },
  { label: 'Projects',       id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact',        id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('home')
  const [open, setOpen]       = useState(false)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20)
      for (const { id } of [...links].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 110) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 14, left: 0, right: 0, zIndex: 100,
          display: 'flex', justifyContent: 'center', pointerEvents: 'none',
        }}
      >
        <div style={{
          pointerEvents: 'auto',
          display: 'flex', alignItems: 'center', height: 54, justifyContent: 'space-between',
          width: '92%', maxWidth: 1020,
          padding: '0 0.5rem 0 1rem',
          borderRadius: 999,
          background: scrolled
            ? 'rgba(255,255,255,0.88)'
            : 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: scrolled
            ? '1px solid rgba(15,23,42,0.09)'
            : '1px solid rgba(255,255,255,0.6)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(15,23,42,0.07), 0 1px 2px rgba(15,23,42,0.03)'
            : '0 2px 12px rgba(139,92,246,0.06)',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>

          {/* Logo */}
          <button
            onClick={() => go('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 10, padding: '0 0.4rem' }}
          >
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(139,92,246,0.35)',
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>LC</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', letterSpacing: '-0.025em', fontFamily: 'Poppins, sans-serif' }}>
              Latish Charpe
            </span>
          </button>

          {/* Desktop Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="hidden md:flex">
            {links.map(({ label, id }) => {
              const isActive = active === id
              return (
                <button
                  key={id}
                  onClick={() => go(id)}
                  style={{
                    position: 'relative',
                    background: isActive ? 'rgba(139,92,246,0.08)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    padding: '0.38rem 0.85rem',
                    borderRadius: 999,
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#7c3aed' : '#475569',
                    transition: 'all 0.2s ease',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#0f172a'
                      e.currentTarget.style.background = 'rgba(0,0,0,0.04)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#475569'
                      e.currentTarget.style.background = 'none'
                    }
                  }}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)',
                        width: '60%', height: 2, borderRadius: 99,
                        background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* CTA */}
          <button
            onClick={() => go('contact')}
            className="hidden md:flex"
            style={{
              alignItems: 'center', gap: 6,
              background: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(139,92,246,0.1))',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              color: '#7c3aed',
              padding: '0.42rem 1.15rem',
              borderRadius: 999,
              fontSize: '0.84rem', fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '-0.01em',
              transition: 'all 0.25s ease',
              boxShadow: '0 2px 8px rgba(139,92,246,0.12)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(236,72,153,0.14), rgba(139,92,246,0.16))'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(139,92,246,0.22)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(139,92,246,0.1))'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(139,92,246,0.12)'
            }}
          >
            Let's Connect ↗
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-2)', lineHeight: 0, padding: 6, borderRadius: 8 }}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden"
            style={{
              position: 'fixed', top: 74, left: '50%', transform: 'translateX(-50%)',
              width: '92%', maxWidth: 840, zIndex: 99,
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(28px)',
              border: '1px solid rgba(15,23,42,0.08)',
              borderRadius: 20,
              padding: '1rem 1.5rem 1.5rem',
              boxShadow: '0 20px 48px rgba(15,23,42,0.10)',
            }}
          >
            {links.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: active === id ? 'rgba(139,92,246,0.06)' : 'none',
                  border: 'none', cursor: 'pointer',
                  padding: '0.75rem 0.75rem',
                  fontSize: '0.92rem',
                  fontWeight: active === id ? 600 : 500,
                  color: active === id ? 'var(--purple)' : 'var(--text-2)',
                  borderBottom: '1px solid var(--border)',
                  fontFamily: 'Inter, sans-serif',
                  borderRadius: 8,
                  transition: 'all 0.15s',
                }}
              >
                {label}
              </button>
            ))}
            <a
              href="/Latish_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }}
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
