'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: AnimatedButtonProps) {
  const baseStyles = 'relative font-semibold rounded-lg transition-all duration-300 overflow-hidden'
  
  const variants = {
    primary: 'bg-linear-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50',
    secondary: 'bg-linear-to-r from-secondary to-accent text-white hover:shadow-lg hover:shadow-secondary/50',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <motion.button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
