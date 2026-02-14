'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, PerspectiveCamera, Stage } from '@react-three/drei'
import { Suspense, useState } from 'react'
import * as THREE from 'three'

function Model({ url }: { url: string }) {
  try {
    const { scene } = useGLTF(url)
    
    // Center the model
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)
    
    return <primitive object={scene} />
  } catch (error) {
    console.error('Error loading model:', error)
    return null
  }
}

function LoadingSpinner() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0EA5E9" wireframe />
    </mesh>
  )
}

function ModelPlaceholder() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#0EA5E9" wireframe />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#A855F7" wireframe />
      </mesh>
    </group>
  )
}

interface SimpleModelViewerProps {
  modelUrl: string
  autoRotate?: boolean
  cameraPosition?: [number, number, number]
}

export function SimpleModelViewer({ 
  modelUrl, 
  autoRotate = true,
  cameraPosition = [0, 2, 5]
}: SimpleModelViewerProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="w-full h-150 rounded-2xl overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10">
      <Canvas shadows onError={() => setHasError(true)}>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} castShadow />
        
        {/* 3D Model */}
        <Suspense fallback={<LoadingSpinner />}>
          {hasError ? (
            <ModelPlaceholder />
          ) : (
            <>
              <Stage environment="city" intensity={0.5}>
                <Model url={modelUrl} />
              </Stage>
              <Environment preset="studio" />
            </>
          )}
        </Suspense>
        
        {/* Controls */}
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={10}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
