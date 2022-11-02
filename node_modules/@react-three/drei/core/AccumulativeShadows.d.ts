import * as THREE from 'three';
import * as React from 'react';
import { ReactThreeFiber } from '@react-three/fiber';
interface AccumulativeContext {
    lights: Map<any, any>;
    temporal: boolean;
    frames: number;
    blend: number;
    count: number;
    getMesh: () => THREE.Mesh<THREE.PlaneGeometry, SoftShadowMaterialProps & THREE.ShaderMaterial>;
    reset: () => void;
    update: (frames?: number) => void;
}
interface AccumulativeLightContext {
    update: () => void;
}
declare type SoftShadowMaterialProps = {
    map: THREE.Texture;
    color?: ReactThreeFiber.Color;
    alphaTest?: number;
    blend?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            softShadowMaterial: JSX.IntrinsicElements['shaderMaterial'] & SoftShadowMaterialProps;
        }
    }
}
export declare const accumulativeContext: React.Context<AccumulativeContext>;
export declare const AccumulativeShadows: React.ForwardRefExoticComponent<Pick<Omit<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<THREE.Group>, ReactThreeFiber.NodeProps<THREE.Group, typeof THREE.Group>>>, ReactThreeFiber.NonFunctionKeys<{
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
}>> & {
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & {
    frames?: number | undefined;
    blend?: number | undefined;
    limit?: number | undefined;
    scale?: number | undefined;
    temporal?: boolean | undefined;
    opacity?: number | undefined;
    alphaTest?: number | undefined;
    color?: string | undefined;
    colorBlend?: number | undefined;
    resolution?: number | undefined;
    toneMapped?: boolean | undefined;
}, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isGroup" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "alphaTest" | "opacity" | "toneMapped" | "resolution" | "frames" | "blend" | "temporal" | "limit" | "colorBlend"> & React.RefAttributes<AccumulativeContext>>;
export declare const RandomizedLight: React.ForwardRefExoticComponent<Pick<Omit<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<THREE.Group>, ReactThreeFiber.NodeProps<THREE.Group, typeof THREE.Group>>>, ReactThreeFiber.NonFunctionKeys<{
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
}>> & {
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & {
    frames?: number | undefined;
    position?: [x: number, y: number, z: number] | undefined;
    radius?: number | undefined;
    amount?: number | undefined;
    intensity?: number | undefined;
    ambient?: number | undefined;
    castShadow?: boolean | undefined;
    bias?: number | undefined;
    mapSize?: number | undefined;
    size?: number | undefined;
    near?: number | undefined;
    far?: number | undefined;
}, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isGroup" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "size" | "near" | "far" | "intensity" | "bias" | "radius" | "mapSize" | "frames" | "amount" | "ambient"> & React.RefAttributes<AccumulativeLightContext>>;
export {};
