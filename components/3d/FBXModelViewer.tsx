'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { FBXLoader } from 'three-stdlib'
import * as THREE from 'three'

function FBXModel({ url }: { url: string }) {
  const fbx = useLoader(FBXLoader, url)
  
  // Apply a smaller scale
  fbx.scale.set(0.01, 0.01, 0.01)
  
  // Position at origin, slightly above ground to ensure visibility
  fbx.position.set(0, 0, 0)
  
  return <primitive object={fbx} castShadow receiveShadow />
}

function LoadingSpinner() {
  return (
    <mesh rotation={[0, 0, 0]}>
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

interface FBXModelViewerProps {
  modelUrl: string
  autoRotate?: boolean
  cameraPosition?: [number, number, number]
}

export function FBXModelViewer({ 
  modelUrl, 
  autoRotate = false,
  cameraPosition = [15, 10, 15]
}: FBXModelViewerProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="w-full h-150 rounded-2xl overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10">
      <Canvas shadows camera={{ position: cameraPosition, fov: 60 }} onError={() => setHasError(true)}>
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 15, 10]} intensity={2} castShadow shadow-mapSize={[2048, 2048]} />
        <directionalLight position={[-10, 10, -10]} intensity={1} />
        <hemisphereLight intensity={0.5} groundColor="#444444" />
        <spotLight 
          position={[0, 20, 0]} 
          angle={0.5} 
          penumbra={1} 
          intensity={1.5} 
          castShadow 
        />
        
        {/* 3D Model */}
        <Suspense fallback={<LoadingSpinner />}>
          {hasError ? (
            <ModelPlaceholder />
          ) : (
            <>
              <FBXModel url={modelUrl} />
              <Environment preset="city" />
            </>
          )}
        </Suspense>
        
        {/* Ground Plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            roughness={0.8} 
            metalness={0.2} 
          />
        </mesh>
        
        {/* Grid Helper */}
        <gridHelper args={[100, 100, '#0EA5E9', '#333333']} position={[0, 0.01, 0]} />
        
        {/* Controls */}
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
          minDistance={5}
          maxDistance={100}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.1}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
          target={[0, 1, 0]}
        />
      </Canvas>
    </div>
  )
}
