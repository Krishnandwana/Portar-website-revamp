'use client'

import { motion } from 'framer-motion'
import { Package, TrendingUp } from 'lucide-react'
import { GlassCard } from './GlassCard'
import type { Project } from '@/types'

interface ModelCardProps {
  project: Project
  onClick?: () => void
}

export function ModelCard({ project, onClick }: ModelCardProps) {
  return (
    <GlassCard className="cursor-pointer group" onClick={onClick}>
      {/* Model Preview */}
      <div className="aspect-square bg-linear-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Package className="w-16 h-16 text-white/40 group-hover:scale-110 transition-transform duration-300" />
        </div>
        {/* Progress indicator */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <span className="text-xs font-bold text-primary">{project.progress}%</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-white/60">
            <Package className="w-4 h-4" />
            <span>{project.metadata.partCount} parts</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <TrendingUp className="w-4 h-4" />
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'completed' ? 'bg-accent/20 text-accent' :
              project.status === 'active' ? 'bg-primary/20 text-primary' :
              'bg-white/10 text-white/60'
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${project.progress}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </GlassCard>
  )
}
