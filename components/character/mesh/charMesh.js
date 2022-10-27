import React from "react";
import { useGLTF } from "@react-three/drei";

const CharMesh = (props) => {
  const { nodes, materials } = useGLTF("/penguin.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]} scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.Toby_glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Toby_body}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/penguin.gltf");

export default CharMesh;