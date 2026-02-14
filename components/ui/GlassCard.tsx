'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className = '', hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-xl shadow-black/50
        ${hover ? 'hover:bg-white/10 hover:border-white/20' : ''}
        transition-all duration-300
        ${className}
      `}
      onClick={onClick}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
