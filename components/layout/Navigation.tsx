'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Package, Home, FolderOpen, Eye } from 'lucide-react'
import Link from 'next/link'
import { GlassCard } from '../ui/GlassCard'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Viewer', href: '/viewer', icon: Eye },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <GlassCard hover={false} className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Portar.in</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-linear-to-r from-primary to-secondary rounded-lg text-white font-medium hover:scale-105 transition-transform">
              Upload Model
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="p-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors py-2"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <button className="w-full px-6 py-3 bg-linear-to-r from-primary to-secondary rounded-lg text-white font-medium">
                  Upload Model
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </nav>
  )
}
