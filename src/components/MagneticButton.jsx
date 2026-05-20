import { motion, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

export default function MagneticButton({ children, className, style, href, target, rel, onClick, distance = 0.3, ...props }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Spring physics for the magnetic pull
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate distance from center of element
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    x.set(middleX * distance)
    y.set(middleY * distance)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className}
      {...props}
      style={{
        ...style,
        position: 'relative',
        x,
        y,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Component>
  )
}
