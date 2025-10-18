'use client'
import { Canvas } from '@react-three/fiber'
import { UniverseBackground } from './UniverseBackground'

export function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 2]} // Adaptive pixel ratio
      >
       <color attach="background" args={['#0f0f23']} />
        <UniverseBackground />
      </Canvas>
    </div>
  )
} 
