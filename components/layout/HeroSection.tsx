'use client'

import { motion } from 'framer-motion'
import { AnimatedButton } from '../ui/AnimatedButton'
import { ArrowRight, Sparkles } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-white/80">Next-Gen Industrial 3D Platform</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Visualize Your</span>
                <br />
                <span className="text-gradient">Industrial Models</span>
              </h1>
              
              <p className="text-xl text-white/60 max-w-xl">
                Experience cutting-edge 3D visualization with Portar. Share, collaborate, 
                and explore industrial models in stunning detail with AR capabilities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <AnimatedButton size="lg" variant="primary">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
              
              <AnimatedButton size="lg" variant="outline">
                <span>View Demo</span>
              </AnimatedButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-white/60">Models</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">10K+</div>
                <div className="text-sm text-white/60">Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <div className="aspect-square bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for 3D Model */}
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-primary to-secondary opacity-50 animate-pulse" />
                  <p className="text-white/60">3D Model Viewer</p>
                  <p className="text-xs text-white/40">Place your GLB models in /public/models/</p>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-primary/30 rounded-lg backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-20 h-20 bg-secondary/30 rounded-full backdrop-blur-sm"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
