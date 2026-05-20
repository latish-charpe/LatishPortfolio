import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, CheckCircle2, XCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { SectionHead } from './About'
import MagneticButton from './MagneticButton'

const contactLinks = [
  { id: 'email',  label: 'Email',    value: 'latishcharpe39@gmail.com',  href: 'mailto:latishcharpe39@gmail.com', icon: Mail,         color: '#ec4899' },
  { id: 'github', label: 'GitHub',   value: 'github.com/latishcharpe',   href: 'https://github.com/latishcharpe',  icon: GithubIcon,  color: '#8b5cf6' },
  { id: 'li',     label: 'LinkedIn', value: 'latish-charpe',             href: 'https://www.linkedin.com/in/latish-charpe-9536242a0', icon: LinkedinIcon, color: '#0a66c2' },
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
            <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Reach Out</p>

            {contactLinks.map(({ id, label, value, href, icon: Icon, color }) => (
              <MagneticButton key={id}>
                <motion.a
                  href={href}
                  target={id !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card"
                  style={{ padding: '1.1rem 1.4rem', display: 'flex', alignItems: 'center', gap: '1.1rem', textDecoration: 'none', cursor: 'pointer' }}
                  whileHover={{
                    borderColor: `${color}44`,
                    boxShadow: `0 8px 24px ${color}18, 0 2px 8px rgba(15,23,42,0.04)`,
                    y: -3,
                  }}
                  transition={{ duration: 0.22 }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                    background: `${color}12`,
                    border: `1px solid ${color}28`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-3)', marginBottom: 4, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Poppins, sans-serif' }}>{label}</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-1)', fontFamily: 'Inter, sans-serif' }}>{value}</p>
                  </div>
                </motion.a>
              </MagneticButton>
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
