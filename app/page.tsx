'use client'

import { HeroSection } from '@/components/layout/HeroSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { ModelCard } from '@/components/ui/ModelCard'
import { ProgressRing } from '@/components/visualizations/ProgressRing'
import { motion } from 'framer-motion'
import { Zap, Shield, Sparkles, Layers } from 'lucide-react'
import type { Project } from '@/types'

// Sample data
const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'Industrial Pump Assembly',
    description: 'High-efficiency centrifugal pump model with detailed component breakdown',
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
  },
  {
    id: '2',
    name: 'Hydraulic Press System',
    description: 'Complete hydraulic press with adjustable pressure settings',
    modelUrl: '/models/press.glb',
    progress: 100,
    status: 'completed',
    createdAt: '2024-01-20',
    updatedAt: '2024-02-05',
    metadata: {
      partCount: 189,
      fileSize: '2.8 MB',
      dimensions: '800x600x1200mm',
    },
  },
  {
    id: '3',
    name: 'Robotic Arm Assembly',
    description: '6-axis industrial robot arm with precision control',
    modelUrl: '/models/robot.glb',
    progress: 60,
    status: 'active',
    createdAt: '2024-02-01',
    updatedAt: '2024-02-12',
    metadata: {
      partCount: 342,
      fileSize: '4.5 MB',
      dimensions: '1200x800x900mm',
    },
  },
]

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized rendering engine for smooth 60fps visualization',
  },
  {
    icon: Shield,
    title: 'Secure Sharing',
    description: 'Enterprise-grade security for your industrial models',
  },
  {
    icon: Sparkles,
    title: 'AR Ready',
    description: 'View models in augmented reality on supported devices',
  },
  {
    icon: Layers,
    title: 'Multi-Format',
    description: 'Support for GLB, GLTF, OBJ, and more formats',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient">Portar.in</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Industry-leading features for modern industrial visualization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Explore stunning industrial models from our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ModelCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6">
        <GlassCard className="p-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <ProgressRing progress={95} size={150} />
              <div>
                <h3 className="text-2xl font-bold text-white">Platform Reliability</h3>
                <p className="text-white/60">Always available when you need it</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <ProgressRing progress={87} size={150} />
              <div>
                <h3 className="text-2xl font-bold text-white">Client Satisfaction</h3>
                <p className="text-white/60">Trusted by industry leaders</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <ProgressRing progress={92} size={150} />
              <div>
                <h3 className="text-2xl font-bold text-white">Performance Score</h3>
                <p className="text-white/60">Lightning-fast rendering</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <GlassCard className="p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-5xl font-bold text-white">
              Ready to <span className="text-gradient">Transform</span> Your Workflow?
            </h2>
            <p className="text-xl text-white/60">
              Join thousands of professionals using Portar.in for industrial 3D visualization
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-linear-to-r from-primary to-secondary rounded-lg text-white font-semibold text-lg hover:scale-105 transition-transform">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white/20 rounded-lg text-white font-semibold text-lg hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </GlassCard>
      </section>
    </div>
  )
}
