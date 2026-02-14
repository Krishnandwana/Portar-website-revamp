'use client'

import { motion } from 'framer-motion'

export function GradientOrb() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ top: '10%', left: '10%' }}
      />

      {/* Secondary Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ top: '50%', right: '10%' }}
      />

      {/* Accent Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #10B981 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ bottom: '10%', left: '50%' }}
      />
    </div>
  )
}
