'use client'

import { useState } from 'react'
import { ModelViewer } from '@/components/3d/ModelViewer'
import { FBXModelViewer } from '@/components/3d/FBXModelViewer'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { Upload, FileUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ViewerPage() {
  const [modelUrl, setModelUrl] = useState<string>('/models/r8.fbx')
  const [modelName, setModelName] = useState<string>('R8 Industrial Model')
  const [modelType, setModelType] = useState<'fbx' | 'gltf'>('fbx')

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      const ext = file.name.split('.').pop()?.toLowerCase()
      setModelUrl(url)
      setModelName(file.name)
      setModelType(ext === 'fbx' ? 'fbx' : 'gltf')
    }
  }

  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          3D Model <span className="text-gradient">Viewer</span>
        </h1>
        <p className="text-xl text-white/60">
          Upload and explore your industrial models in stunning detail
        </p>
      </motion.div>

      {/* Upload Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Upload Your Model</h3>
              <p className="text-white/60">
                Supports GLB, GLTF, FBX formats • Max file size: 50MB
              </p>
            </div>
            
            <div>
              <label htmlFor="file-upload" className="cursor-pointer">
                <AnimatedButton variant="primary">
                  <FileUp className="w-5 h-5" />
                  <span>Choose File</span>
                </AnimatedButton>
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".glb,.gltf,.fbx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Viewer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {modelType === 'fbx' ? (
          <FBXModelViewer modelUrl={modelUrl} autoRotate={false} />
        ) : (
          <ModelViewer modelUrl={modelUrl} modelName={modelName} />
        )}
        
        <div className="mt-6 text-center">
          <p className="text-white/60 mb-4">
            Currently viewing: <span className="text-white font-semibold">{modelName}</span>
          </p>
        </div>
      </motion.div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <GlassCard hover={false} className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Viewer Controls</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white/60">
            <div>
              <h4 className="text-white font-semibold mb-2">Rotate</h4>
              <p>Click and drag to rotate the model</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Zoom</h4>
              <p>Scroll or pinch to zoom in/out</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Pan</h4>
              <p>Right-click and drag to pan around</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}
