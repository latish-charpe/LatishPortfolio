import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useState } from 'react'

export default function TiltCard({ children, className, style, delay = 0, inView = true, yOffset = 16, onClick }) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Motion values for tracking mouse position
  const x = useMotionValue(0.5) // 0 to 1
  const y = useMotionValue(0.5) // 0 to 1

  // Springs for smooth rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  // Transform coordinates to degrees (-4 to 4 degrees for subtle premium feel)
  const rotateX = useTransform(mouseYSpring, [0, 1], [4, -4])
  const rotateY = useTransform(mouseXSpring, [0, 1], [-4, 4])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    // Calculate position as a percentage (0 to 1)
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0.5)
    y.set(0.5)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }} 
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{ perspective: 1200, display: 'flex', flexDirection: 'column' }}
      onClick={onClick}
    >
      <motion.div
        className={className}
        style={{
          ...style,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {/* Subtle Glare/Spotlight Effect */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            background: `radial-gradient(600px circle at ${useTransform(x, v => v * 100)}% ${useTransform(y, v => v * 100)}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 10,
          }}
        />
        {/* Child elements translateZ on hover via global css or directly in child */}
        {children}
      </motion.div>
    </motion.div>
  )
}
