'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface TimelineEvent {
  date: string
  title: string
  description: string
}

interface TimelineVizProps {
  events: TimelineEvent[]
  width?: number
  height?: number
}

export function TimelineViz({ 
  events, 
  width = 800, 
  height = 200 
}: TimelineVizProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  
  useEffect(() => {
    if (!svgRef.current || !events.length) return
    
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()
    
    const margin = { top: 40, right: 40, bottom: 40, left: 40 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
    
    // Scale
    const xScale = d3.scaleTime()
      .domain(d3.extent(events, d => new Date(d.date)) as [Date, Date])
      .range([0, innerWidth])
    
    // Timeline line
    g.append('line')
      .attr('x1', 0)
      .attr('y1', innerHeight / 2)
      .attr('x2', innerWidth)
      .attr('y2', innerHeight / 2)
      .attr('stroke', '#333')
      .attr('stroke-width', 2)
    
    // Events
    const eventGroups = g.selectAll('.event')
      .data(events)
      .enter()
      .append('g')
      .attr('class', 'event')
      .attr('transform', d => `translate(${xScale(new Date(d.date))},${innerHeight / 2})`)
    
    // Event circles
    eventGroups.append('circle')
      .attr('r', 0)
      .attr('fill', '#0EA5E9')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .transition()
      .delay((d, i) => i * 200)
      .duration(500)
      .attr('r', 8)
    
    // Event labels
    eventGroups.append('text')
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .attr('fill', '#fff')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .text(d => d.title)
      .attr('opacity', 0)
      .transition()
      .delay((d, i) => i * 200 + 300)
      .duration(500)
      .attr('opacity', 1)
    
  }, [events, width, height])
  
  return (
    <svg 
      ref={svgRef} 
      width={width} 
      height={height}
      className="overflow-visible"
    />
  )
}
