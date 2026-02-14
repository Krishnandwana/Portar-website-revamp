'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { GlassCard } from '../ui/GlassCard'
import { RotateCcw, Maximize2, Download } from 'lucide-react'
import { AnimatedButton } from '../ui/AnimatedButton'
import { SimpleModelViewer } from './SimpleModelViewer'

interface ModelViewerProps {
  modelUrl: string
  modelName?: string
}

export function ModelViewer({ modelUrl, modelName = 'Model' }: ModelViewerProps) {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <div className="space-y-4">
      {/* Controls Bar */}
      <GlassCard hover={false} className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">{modelName}</h2>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-2 rounded-lg transition-colors ${
                autoRotate ? 'bg-primary text-white' : 'bg-white/10 text-white/60'
              }`}
              title="Toggle Auto Rotate"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            
            <button
              className="p-2 rounded-lg bg-white/10 text-white/60 hover:text-white transition-colors"
              title="Fullscreen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
            
            <AnimatedButton size="sm">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </AnimatedButton>
          </div>
        </div>
      </GlassCard>

      {/* 3D Viewer */}
      <SimpleModelViewer modelUrl={modelUrl} autoRotate={autoRotate} />

      {/* Info Panel */}
      <GlassCard hover={false} className="p-6">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-white/60 text-sm mb-1">Model Format</p>
            <p className="text-white font-semibold">GLB/GLTF</p>
          </div>
          <div>
            <p className="text-white/60 text-sm mb-1">Polygons</p>
            <p className="text-white font-semibold">~50K</p>
          </div>
          <div>
            <p className="text-white/60 text-sm mb-1">File Size</p>
            <p className="text-white font-semibold">2.5 MB</p>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
