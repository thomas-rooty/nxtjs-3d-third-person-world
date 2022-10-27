import {useBox} from "@react-three/cannon";

const TestBox = () => {
  const [boxRef, boxApi] = useBox(() => ({
    type: "Dynamic",
    mass: 1,
    args: [1, 1, 1],
    position: [4, 1, 0],
  }))
  const [wallRef, wallApi] = useBox(() => ({
    type: "Static",
    mass: 100,
    args: [0.5, 2, 6],
    position: [-4, 1.1, 0],
  }))

  return (
    <>
      <mesh ref={boxRef} castShadow receiveShadow>
        <boxBufferGeometry args={[1, 1, 1]}/>
        <meshStandardMaterial color="blue"/>
      </mesh>
      <mesh ref={wallRef} castShadow receiveShadow>
        <boxBufferGeometry args={[0.5, 2, 6]}/>
        <meshStandardMaterial color="red"/>
      </mesh>
    </>
  )
}

export default TestBox;