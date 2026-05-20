import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, CheckCircle2, XCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { SectionHead } from './About'
import MagneticButton from './MagneticButton'

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'latishcharpe39@gmail.com',
    href: 'mailto:latishcharpe39@gmail.com',
    icon: Mail,
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(236,72,153,0.05))',
    border: 'rgba(236,72,153,0.22)',
    glow: 'rgba(236,72,153,0.14)',
    isExternal: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/repos',
    href: 'https://github.com/repos',
    icon: GithubIcon,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.05))',
    border: 'rgba(139,92,246,0.22)',
    glow: 'rgba(139,92,246,0.14)',
    isExternal: true,
  },
  {
    id: 'li',
    label: 'LinkedIn',
    value: 'linkedin.com/in/latish-charpe',
    href: 'https://www.linkedin.com/in/latish-charpe-9536242a0',
    icon: LinkedinIcon,
    color: '#0a66c2',
    gradient: 'linear-gradient(135deg, rgba(10,102,194,0.10), rgba(10,102,194,0.04))',
    border: 'rgba(10,102,194,0.20)',
    glow: 'rgba(10,102,194,0.12)',
    isExternal: true,
  },
]

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.6)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(15,23,42,0.09)',
  borderRadius: 14,
  color: 'var(--text-1)',
  fontSize: '0.92rem',
  padding: '0.78rem 1.1rem',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'all 0.25s ease',
  lineHeight: 1.5,
}

const focusIn  = e => { e.target.style.borderColor = 'rgba(139,92,246,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.10)'; e.target.style.background = 'rgba(255,255,255,0.92)' }
const focusOut = e => { e.target.style.borderColor = 'rgba(15,23,42,0.09)'; e.target.style.boxShadow = 'none'; e.target.style.background = 'rgba(255,255,255,0.6)' }

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status,   setStatus]   = useState(null)
  const [loading,  setLoading]  = useState(false)

  const onChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '2937df27-754a-49fa-b321-91146a928ae1',
          name: formData.name, email: formData.email, message: formData.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('ok')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 5500)
    }
  }

  return (
    <section id="contact" ref={ref}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHead
            eyebrow="Contact"
            title="Let's talk."
            subtitle="Open to data analyst roles, internships, and collaborative projects."
          />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>

          {/* Left: Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Reach Out</p>

            {contactLinks.map(({ id, label, value, href, icon: Icon, color, gradient, border, glow, isExternal }) => (
              <motion.a
                key={id}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                aria-label={`${label}: ${value}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.1rem',
                  padding: '1.1rem 1.4rem',
                  borderRadius: 20,
                  background: 'rgba(255,255,255,0.70)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${border}`,
                  boxShadow: '0 2px 10px rgba(15,23,42,0.05)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                  outline: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{
                  y: -4,
                  background: 'rgba(255,255,255,0.95)',
                  borderColor: color,
                  boxShadow: `0 12px 32px ${glow}, 0 3px 8px rgba(15,23,42,0.06)`,
                }}
                whileFocus={{
                  y: -2,
                  boxShadow: `0 0 0 3px ${color}40, 0 6px 20px ${glow}`,
                  borderColor: color,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Subtle gradient background accent */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: gradient,
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                }} />

                {/* Icon */}
                <motion.div
                  style={{
                    width: 46, height: 46, borderRadius: 14, flexShrink: 0,
                    background: `${color}10`,
                    border: `1px solid ${color}28`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', zIndex: 1,
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.38 }}
                >
                  <Icon size={19} style={{ color }} />
                </motion.div>

                {/* Text */}
                <div style={{ position: 'relative', zIndex: 1, minWidth: 0 }}>
                  <p style={{
                    fontSize: '0.7rem', fontWeight: 700,
                    color: 'var(--text-3)',
                    marginBottom: 5,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: 'Poppins, sans-serif',
                  }}>{label}</p>
                  <p style={{
                    fontSize: '0.9rem', fontWeight: 600,
                    color: 'var(--text-1)',
                    fontFamily: 'Inter, sans-serif',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>{value}</p>
                </div>

                {/* Arrow */}
                <motion.span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.8rem',
                    color: 'var(--text-3)',
                    flexShrink: 0,
                    position: 'relative', zIndex: 1,
                    opacity: 0.6,
                  }}
                  whileHover={{ x: 2, opacity: 1, color }}
                  transition={{ duration: 0.2 }}
                >
                  {isExternal ? '↗' : '→'}
                </motion.span>
              </motion.a>
            ))}

            {/* Note */}
            <div className="card" style={{
              padding: '1rem 1.4rem', marginTop: '0.25rem',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(245,240,255,0.55))',
              borderColor: 'rgba(139,92,246,0.18)',
            }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.72, fontFamily: 'Inter, sans-serif' }}>
                Best way to reach me is via email. I typically respond within <strong style={{ color: 'var(--text-1)' }}>24 hours</strong>.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            onSubmit={onSubmit}
            className="card"
            style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
          >
            <input type="hidden" name="access_key" value="2937df27-754a-49fa-b321-91146a928ae1" />

            {[
              { label: 'Name',    name: 'name',    type: 'text',  placeholder: 'Your full name' },
              { label: 'Email',   name: 'email',   type: 'email', placeholder: 'you@example.com' },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-2)', display: 'block', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>{label}</label>
                <input
                  type={type} name={name} value={formData[name]}
                  onChange={onChange} placeholder={placeholder} required
                  style={inputStyle}
                  onFocus={focusIn} onBlur={focusOut}
                />
              </div>
            ))}

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-2)', display: 'block', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>Message</label>
              <textarea
                name="message" value={formData.message}
                onChange={onChange} placeholder="Tell me about an opportunity or project..." required rows={4}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.65 }}
                onFocus={focusIn} onBlur={focusOut}
              />
            </div>

            {status === 'ok' && (
              <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0.65rem 1rem', borderRadius: 10, fontSize: '0.875rem', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.22)', color: '#10b981' }}>
                <CheckCircle2 size={15} /> Message sent successfully!
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0.65rem 1rem', borderRadius: 10, fontSize: '0.875rem', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.22)', color: '#ef4444' }}>
                <XCircle size={15} /> Failed to send. Please try again.
              </motion.div>
            )}

            <MagneticButton
              type="submit" disabled={loading}
              className="btn btn-primary"
              style={{ justifyContent: 'center', opacity: loading ? 0.72 : 1, width: '100%', cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading
                ? <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.35)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'block' }} />
                : <><Send size={15} /> Send Message</>
              }
            </MagneticButton>
          </motion.form>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </section>
  )
}
