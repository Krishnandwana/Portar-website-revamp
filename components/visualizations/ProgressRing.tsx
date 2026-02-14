'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
}

export function ProgressRing({ 
  progress, 
  size = 120, 
  strokeWidth = 8 
}: ProgressRingProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  
  useEffect(() => {
    if (!svgRef.current) return
    
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()
    
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    
    // Background circle
    svg.append('circle')
      .attr('cx', size / 2)
      .attr('cy', size / 2)
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('stroke', '#1a1a1a')
      .attr('stroke-width', strokeWidth)
    
    // Gradient definition
    const gradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', `gradient-${Math.random()}`)
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%')
    
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#0EA5E9')
    
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#A855F7')
    
    // Progress circle
    const progressArc = svg.append('circle')
      .attr('cx', size / 2)
      .attr('cy', size / 2)
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('stroke', `url(#gradient-${Math.random()})`)
      .attr('stroke-width', strokeWidth)
      .attr('stroke-linecap', 'round')
      .attr('stroke-dasharray', circumference)
      .attr('stroke-dashoffset', circumference)
      .attr('transform', `rotate(-90 ${size / 2} ${size / 2})`)
    
    // Animate progress
    const offset = circumference - (progress / 100) * circumference
    progressArc.transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', offset)
    
    // Center text
    const textGroup = svg.append('g')
    
    textGroup.append('text')
      .attr('x', size / 2)
      .attr('y', size / 2)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', '#f5f5f5')
      .attr('font-size', size / 4)
      .attr('font-weight', 'bold')
      .text(`${Math.round(progress)}%`)
      
  }, [progress, size, strokeWidth])
  
  return (
    <svg 
      ref={svgRef} 
      width={size} 
      height={size}
      className="drop-shadow-lg"
    />
  )
}
