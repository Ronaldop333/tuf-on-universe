'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

export function UniverseBackground(props: any) {
  const ref = useRef<any>()
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#1e40af" wireframe />
      </mesh>
    </group>
  )
}
