'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.cjs'

export function UniverseBackground(props: any) {
  const ref = useRef<any>()
  const count = 8000

  const sphere = useMemo(() => 
    random.inSphere(new Float32Array(count * 3), { radius: 1.5 })
  , [count])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20
      ref.current.rotation.y -= delta / 25
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
