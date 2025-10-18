'use client'

import { Canvas } from '@react-three/fiber'
import { UniverseBackground } from './UniverseBackground'

export function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 2]} // Suporte adaptativo a displays retina
        shadows={false}
      >
        {/* Cor de fundo padrão (pode ser controlada por tema depois) */}
        <color attach="background" args={['#0a0a0a']} />
        
        {/* Componente de fundo procedural ou animado */}
        <UniverseBackground />
      </Canvas>
    </div>
  )
}
