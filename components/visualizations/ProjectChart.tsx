'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface DataPoint {
  date: string
  value: number
}

interface ProjectChartProps {
  data: DataPoint[]
  width?: number
  height?: number
}

export function ProjectChart({ 
  data, 
  width = 600, 
  height = 300 
}: ProjectChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  
  useEffect(() => {
    if (!svgRef.current || !data.length) return
    
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()
    
    const margin = { top: 20, right: 30, bottom: 30, left: 40 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
    
    // Scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)) as [Date, Date])
      .range([0, innerWidth])
    
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([innerHeight, 0])
      .nice()
    
    // Line generator
    const line = d3.line<DataPoint>()
      .x(d => xScale(new Date(d.date)))
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX)
    
    // Gradient
    const gradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'line-gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%')
    
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#0EA5E9')
    
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#A855F7')
    
    // Area
    const area = d3.area<DataPoint>()
      .x(d => xScale(new Date(d.date)))
      .y0(innerHeight)
      .y1(d => yScale(d.value))
      .curve(d3.curveMonotoneX)
    
    g.append('path')
      .datum(data)
      .attr('fill', 'url(#line-gradient)')
      .attr('fill-opacity', 0.2)
      .attr('d', area)
    
    // Line path
    const path = g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'url(#line-gradient)')
      .attr('stroke-width', 3)
      .attr('d', line)
    
    // Animate line
    const pathLength = path.node()?.getTotalLength() || 0
    path
      .attr('stroke-dasharray', `${pathLength} ${pathLength}`)
      .attr('stroke-dashoffset', pathLength)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0)
    
    // Axes
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale).ticks(5))
      .attr('color', '#666')
    
    g.append('g')
      .call(d3.axisLeft(yScale).ticks(5))
      .attr('color', '#666')
    
    // Grid lines
    g.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale)
        .ticks(5)
        .tickSize(-innerWidth)
        .tickFormat(() => '')
      )
      .attr('stroke', '#333')
      .attr('stroke-opacity', 0.1)
    
  }, [data, width, height])
  
  return (
    <svg 
      ref={svgRef} 
      width={width} 
      height={height}
      className="overflow-visible"
    />
  )
}
