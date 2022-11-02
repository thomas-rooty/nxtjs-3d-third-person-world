import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";
import {useControls} from "../../utils/useControls";
import * as THREE from "three";
import {useEffect, useRef} from "react";
import {useStore} from "../zustore";

const CharCollisionSphere = () => {
  // Use store
  const setPosition = useStore(state => state.setPosition);

  // Key handling and global params
  const controls = useControls();
  const SPEED = 3;

  // Physics collision sphere
  const [collisionRef, collisionApi] = useSphere(() => ({
    mass: 1,
    type: "Kinematic",
    position: [0, 0.5, 0],
    args: [0.5],
    allowSleep: false,
  }));

  // Subscribe to velocity
  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    return collisionApi.velocity.subscribe((v) => (velocity.current = v))
  }, [velocity.current]);

  // Subscribe to position and update it in the store
  const position = useRef([0, 0, 0]);
  useEffect(() => {
    return collisionApi.position.subscribe((p) => {
      position.current = p;
      setPosition(p);
    })
  }, [position.current]);

  useFrame(() => {
    // Init controls
    const {forward, backward, left, right, reset} = controls.current;

    // Init vectors
    const direction = new THREE.Vector3();
    const frontVector = new THREE.Vector3(0, 0, Number(backward) - Number(forward));
    const sideVector = new THREE.Vector3(Number(left) - Number(right), 0, 0);

    // Calculate direction
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)

    // Apply velocity
    collisionApi.velocity.set(direction.x, velocity.current[1], direction.z);
  });

  return (
    <mesh ref={collisionRef}>
      <sphereBufferGeometry args={[0.5, 32, 32]}/>
      <meshStandardMaterial color="hotpink"/>
    </mesh>
  );
}

export default CharCollisionSphere;
