'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Filter } from 'lucide-react'
import { GlassCard } from './GlassCard'

interface SearchBarProps {
  onSearch: (query: string) => void
  onFilterChange?: (filters: any) => void
  placeholder?: string
}

export function SearchBar({ 
  onSearch, 
  onFilterChange,
  placeholder = 'Search models...' 
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <GlassCard hover={false} className="p-2">
        <div className="flex items-center gap-3 px-4">
          <Search className="w-5 h-5 text-primary" />
          
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 py-3"
          />
          
          <AnimatePresence>
            {query && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={clearSearch}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
          
          {onFilterChange && (
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-lg transition-colors ${
                showFilters ? 'bg-primary text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              <Filter className="w-5 h-5" />
            </button>
          )}
        </div>
      </GlassCard>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard hover={false} className="p-6">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              {/* Add filter options here */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Status</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white">
                    <option>All</option>
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Pending</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white">
                    <option>All Types</option>
                    <option>Machine</option>
                    <option>Component</option>
                    <option>Assembly</option>
                  </select>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
