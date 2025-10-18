'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function UniverseBackground(props: any) {
  const ref = useRef<Mesh>(null)

  // Animação de rotação contínua
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#1e40af" wireframe />
      </mesh>
    </group>
  )
}
