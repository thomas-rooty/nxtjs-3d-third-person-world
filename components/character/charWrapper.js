import {useRef} from "react";
import {extend, useFrame, useThree} from "@react-three/fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {useStore} from "../zustore";
import CharCollisionSphere from "./charCollisionSphere";

const CharWrapper = () => {
  // use store (direction, hovering, hoverable)
  const position = useStore(state => state.position);

  // Camera
  let camera, gl;
  const controlsCamera = useRef();
  const CameraController = () => {
    extend({OrbitControls});
    return () => {
      ({camera, gl} = useThree());
      camera.position.set([-2, 5, -5]);
      // noinspection JSUnresolvedFunction
      useFrame(() => controlsCamera.current.update());
      return (
        <orbitControls
          ref={controlsCamera}
          args={[camera, gl.domElement]}
          enableDamping
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          enabled
          castShadow
        />
      );
    };
  };
  const CameraComponent = CameraController();

  // UseFrame
  useFrame(() => {
    // Make the controls follow the character
    controlsCamera.current.target.x = position[0];
    controlsCamera.current.target.y = position[1];
    controlsCamera.current.target.z = position[2];

    // Move camera to character
    camera.position.set(
      position[0] + 2,
      position[1] + 7,
      position[2] + 6
    );
  });

  return (
    <>
      <CameraComponent/>
      <CharCollisionSphere />
    </>
  )
}

export default CharWrapper;