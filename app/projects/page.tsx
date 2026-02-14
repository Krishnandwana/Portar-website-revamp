'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { SearchBar } from '@/components/ui/SearchBar'
import { ModelCard } from '@/components/ui/ModelCard'
import { ProjectChart } from '@/components/visualizations/ProjectChart'
import { Grid, List, TrendingUp } from 'lucide-react'
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
  {
    id: '4',
    name: 'Conveyor Belt System',
    description: 'Modular conveyor system for material handling',
    modelUrl: '/models/conveyor.glb',
    progress: 45,
    status: 'pending',
    createdAt: '2024-02-05',
    updatedAt: '2024-02-13',
    metadata: {
      partCount: 156,
      fileSize: '2.1 MB',
      dimensions: '2000x600x400mm',
    },
  },
  {
    id: '5',
    name: 'Pneumatic Valve Assembly',
    description: 'High-pressure pneumatic control valve',
    modelUrl: '/models/valve.glb',
    progress: 92,
    status: 'active',
    createdAt: '2024-01-28',
    updatedAt: '2024-02-11',
    metadata: {
      partCount: 87,
      fileSize: '1.5 MB',
      dimensions: '200x150x250mm',
    },
  },
  {
    id: '6',
    name: 'Motor Drive System',
    description: 'Electric motor with integrated drive controller',
    modelUrl: '/models/motor.glb',
    progress: 78,
    status: 'active',
    createdAt: '2024-02-03',
    updatedAt: '2024-02-14',
    metadata: {
      partCount: 213,
      fileSize: '2.9 MB',
      dimensions: '400x350x300mm',
    },
  },
]

const chartData = [
  { date: '2024-01-01', value: 12 },
  { date: '2024-01-08', value: 19 },
  { date: '2024-01-15', value: 15 },
  { date: '2024-01-22', value: 25 },
  { date: '2024-01-29', value: 22 },
  { date: '2024-02-05', value: 30 },
  { date: '2024-02-12', value: 28 },
]

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredProjects, setFilteredProjects] = useState(sampleProjects)

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredProjects(sampleProjects)
      return
    }
    const filtered = sampleProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProjects(filtered)
  }

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Your <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-xl text-white/60">
          Manage and explore all your industrial 3D models
        </p>
      </motion.div>

      {/* Analytics Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <GlassCard hover={false} className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-white">Project Activity</h2>
          </div>
          <ProjectChart data={chartData} width={800} height={250} />
        </GlassCard>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-6 items-center justify-between"
      >
        <SearchBar onSearch={handleSearch} onFilterChange={() => {}} />
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-3 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-primary text-white'
                : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-3 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-primary text-white'
                : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {filteredProjects.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ModelCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <GlassCard hover={false} className="p-16">
            <div className="text-center space-y-4">
              <p className="text-2xl text-white/60">No projects found</p>
              <p className="text-white/40">Try adjusting your search or filters</p>
            </div>
          </GlassCard>
        )}
      </motion.div>
    </div>
  )
}
