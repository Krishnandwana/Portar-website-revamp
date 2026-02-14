'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import { ModelViewer } from '@/components/3d/ModelViewer'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { ProgressRing } from '@/components/visualizations/ProgressRing'
import { Share2, Download, Eye, Calendar } from 'lucide-react'
import type { Project } from '@/types'

// Sample project data (in real app, fetch from API)
const sampleProject: Project = {
  id: '1',
  name: 'Industrial Pump Assembly',
  description: 'High-efficiency centrifugal pump model with detailed component breakdown and technical specifications',
  modelUrl: '/models/pump.glb',
  progress: 85,
  status: 'active',
  createdAt: '2024-01-15',
  updatedAt: '2024-02-10',
  metadata: {
    partCount: 247,
    fileSize: '3.2 MB',
    dimensions: '500x400x300mm',
  },
}

export default function SharedProjectPage({
  params,
}: {
  params: Promise<{ token: string }>
}) {
  const { token } = use(params)
  
  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-4">
              {sampleProject.name}
            </h1>
            <p className="text-xl text-white/60">
              {sampleProject.description}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <AnimatedButton variant="outline" size="sm">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </AnimatedButton>
            
            <AnimatedButton variant="primary" size="sm">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </AnimatedButton>
          </div>
        </div>

        {/* Project Info Bar */}
        <GlassCard hover={false} className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-white/60">Status</p>
                <p className="text-white font-semibold capitalize">{sampleProject.status}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-white/60">Updated</p>
                <p className="text-white font-semibold">
                  {new Date(sampleProject.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-white/60 mb-1">Parts</p>
              <p className="text-white font-semibold">{sampleProject.metadata.partCount}</p>
            </div>

            <div>
              <p className="text-xs text-white/60 mb-1">File Size</p>
              <p className="text-white font-semibold">{sampleProject.metadata.fileSize}</p>
            </div>

            <div>
              <p className="text-xs text-white/60 mb-1">Dimensions</p>
              <p className="text-white font-semibold">{sampleProject.metadata.dimensions}</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* 3D Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ModelViewer 
          modelUrl={sampleProject.modelUrl} 
          modelName={sampleProject.name}
        />
      </motion.div>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* Progress Card */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white mb-6">Project Progress</h3>
            <div className="flex justify-center mb-6">
              <ProgressRing progress={sampleProject.progress} size={150} />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Design Phase</span>
                <span className="text-white">100%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full">
                <div className="w-full h-full bg-accent rounded-full" />
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-white/60">Modeling Phase</span>
                <span className="text-white">85%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full">
                <div className="w-[85%] h-full bg-primary rounded-full" />
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-white/60">Review Phase</span>
                <span className="text-white">60%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full">
                <div className="w-[60%] h-full bg-secondary rounded-full" />
              </div>
            </div>
          </GlassCard>

          {/* Technical Specs */}
          <GlassCard className="p-8 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Material</p>
                  <p className="text-white">Stainless Steel 316</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Operating Pressure</p>
                  <p className="text-white">10-150 PSI</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Temperature Range</p>
                  <p className="text-white">-20°C to 120°C</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Flow Rate</p>
                  <p className="text-white">500 L/min</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Power Rating</p>
                  <p className="text-white">5.5 kW</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Efficiency</p>
                  <p className="text-white">85%</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Weight</p>
                  <p className="text-white">125 kg</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Certification</p>
                  <p className="text-white">CE, ISO 9001</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </motion.div>

      {/* Share Token Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <GlassCard hover={false} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm mb-1">Share Token</p>
              <p className="text-white font-mono">{token}</p>
            </div>
            <AnimatedButton size="sm" variant="outline">
              Copy Link
            </AnimatedButton>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}
