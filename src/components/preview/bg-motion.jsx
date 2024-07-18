import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function BgMotion() {
  return (
    <Canvas camera={{ position: [0, 1, 1] }}>
      <Stars />
    </Canvas>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(25000), { radius: 2.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15
    ref.current.rotation.y -= delta / 20
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
