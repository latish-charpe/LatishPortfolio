import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import MagneticButton from './MagneticButton'

const rise = (d = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handle = (e) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) * 2 - 1)
      mouseY.set((e.clientY / innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [mouseX, mouseY])

  return (
    <section
      id="home"
      style={{
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 88,
        paddingBottom: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Ambient decorative SVG lines ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <motion.path
            d="M -5% 18% Q 22% 8% 38% 28% T 72% 22%"
            fill="none"
            stroke="rgba(236,72,153,0.22)"
            strokeWidth="1.2"
            strokeDasharray="4 10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M 105% 82% Q 72% 72% 58% 92% T 28% 72%"
            fill="none"
            stroke="rgba(139,92,246,0.22)"
            strokeWidth="1.2"
            strokeDasharray="4 10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 17, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
        {/* Floating particles */}
        <motion.div
          style={{ position: 'absolute', top: '22%', left: '28%', width: 7, height: 7, borderRadius: '50%', background: 'rgba(236,72,153,0.55)', boxShadow: '0 0 16px rgba(236,72,153,0.7)' }}
          animate={{ y: [-18, 18], opacity: [0.25, 0.8, 0.25] }}
          transition={{ duration: 5.5, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          style={{ position: 'absolute', top: '62%', left: '84%', width: 5, height: 5, borderRadius: '50%', background: 'rgba(139,92,246,0.55)', boxShadow: '0 0 14px rgba(139,92,246,0.7)' }}
          animate={{ y: [18, -18], opacity: [0.3, 0.75, 0.3] }}
          transition={{ duration: 4.8, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          style={{ position: 'absolute', top: '45%', left: '5%', width: 4, height: 4, borderRadius: '50%', background: 'rgba(168,85,247,0.45)', boxShadow: '0 0 12px rgba(168,85,247,0.6)' }}
          animate={{ y: [-12, 12], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6.2, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>

      {/* ── Left text content ── */}
      <div className="wrap" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', flex: 1, paddingBottom: 0 }}>
        <div style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>

          {/* Status badge */}
          <motion.div {...rise(0.05)} style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.4rem 1.1rem', borderRadius: 999,
              fontSize: '0.82rem', fontWeight: 600,
              border: '1px solid rgba(236,72,153,0.22)',
              color: 'var(--text-1)',
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 14px rgba(236,72,153,0.08)',
              fontFamily: 'Inter, sans-serif',
            }}>
              <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'block', flexShrink: 0 }} />
              Open to internships &amp; placements
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...rise(0.13)}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1rem',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <span style={{ color: '#0f172a' }}>Latish </span>
            <span style={{
              background: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Charpe</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            {...rise(0.21)}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 600,
              color: '#334155',
              marginBottom: '1.1rem',
              letterSpacing: '-0.01em',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Data Analytics &amp; AI Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            {...rise(0.28)}
            style={{
              fontSize: '1rem',
              lineHeight: 1.78,
              color: '#475569',
              fontWeight: 400,
              maxWidth: '520px',
              marginBottom: '2.25rem',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Passionate about transforming raw data into actionable insights through
            analytics, visualization, and data-driven storytelling. Building intelligent solutions for the modern web.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...rise(0.35)}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <MagneticButton
              href="/Latish_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.72rem 1.75rem', fontSize: '0.88rem' }}
            >
              <FileText size={16} /> Resume
            </MagneticButton>

            <MagneticButton
              href="https://github.com/latishcharpe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ padding: '0.72rem 1.5rem', fontSize: '0.88rem' }}
            >
              <motion.span whileHover={{ rotate: [0, -12, 12, -8, 0] }} transition={{ duration: 0.4 }} style={{ display: 'inline-flex' }}>
                <GithubIcon size={16} style={{ color: 'var(--text-1)' }} />
              </motion.span>
              GitHub
            </MagneticButton>

            <MagneticButton
              href="https://www.linkedin.com/in/latish-charpe-9536242a0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ padding: '0.72rem 1.5rem', fontSize: '0.88rem' }}
            >
              <motion.span whileHover={{ rotate: [0, -12, 12, -8, 0] }} transition={{ duration: 0.4 }} style={{ display: 'inline-flex' }}>
                <LinkedinIcon size={16} color="#0a66c2" />
              </motion.span>
              LinkedIn
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ── Right: Hero Image ── */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: '-1%',
          width: '54vw',
          minWidth: '580px',
          maxWidth: '880px',
          height: '94%',
          zIndex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          pointerEvents: 'none',
        }}
      >
        {/* Soft pink-purple ambient glow behind image */}
        <div style={{
          position: 'absolute',
          inset: '-8%',
          background: 'radial-gradient(ellipse at 65% 60%, rgba(217,70,239,0.13) 0%, rgba(139,92,246,0.09) 45%, transparent 72%)',
          filter: 'blur(28px)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />

        <motion.img
          src="/98362b22-ac45-45ad-97b4-0cb1bf406594-Photoroom.png"
          alt="Latish Charpe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom right',
            pointerEvents: 'auto',
            filter: 'contrast(1.06) saturate(1.06) drop-shadow(0 18px 36px rgba(139, 92, 246, 0.12)) drop-shadow(0 6px 12px rgba(0,0,0,0.04))',
            position: 'relative',
            zIndex: 1,
            /* Minimal edge-only fade — keeps content 100% sharp */
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 2.5%, black 97.5%, transparent 100%), linear-gradient(to top, transparent 0%, black 1.5%, black 100%)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to right, transparent 0%, black 2.5%, black 97.5%, transparent 100%), linear-gradient(to top, transparent 0%, black 1.5%, black 100%)',
            maskComposite: 'intersect',
          }}
        />
      </motion.div>
    </section>
  )
}
