import { motion } from 'framer-motion'

export default function AmbientBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {/* Soft animated gradient orbs */}
      <motion.div
        animate={{
          x: ['-5%', '10%', '-5%'],
          y: ['-5%', '5%', '-5%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(220,38,38,0.035) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
      
      <motion.div
        animate={{
          x: ['10%', '-5%', '10%'],
          y: ['10%', '-10%', '10%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, rgba(147,51,234,0.035) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}
