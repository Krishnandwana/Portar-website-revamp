import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ParticleBackground } from '@/components/effects/ParticleSystem'
import { GradientOrb } from '@/components/effects/GradientOrb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portar.in - Industrial 3D Model Visualization',
  description: 'Next-generation industrial 3D model visualization platform with AR capabilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background Effects */}
        <ParticleBackground />
        <GradientOrb />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="pt-24">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
