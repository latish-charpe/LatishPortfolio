import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Spring config for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 }
  const cursorX = useSpring(-1000, springConfig)
  const cursorY = useSpring(-1000, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 250) // center offset for 500px width
      cursorY.set(e.clientY - 250)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', moveCursor)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, isVisible])

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147,51,234,0.08) 0%, rgba(244,63,94,0.05) 40%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 9999, // Glow overlays UI slightly for premium lighting
        mixBlendMode: 'multiply', // Adds a subtle darkening/burn effect for premium lighting on light theme
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.5 } }}
    />
  )
}
