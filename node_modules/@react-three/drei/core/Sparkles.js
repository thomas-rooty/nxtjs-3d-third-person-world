import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import * as THREE from 'three';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { shaderMaterial } from './shaderMaterial.js';
import fragShader from '../helpers/glsl/Sparkles.frag.glsl.js';
import vertShader from '../helpers/glsl/Sparkles.vert.glsl.js';

const SparklesMaterial = shaderMaterial({
  time: 0,
  pixelRatio: 1
}, vertShader, fragShader);

const isFloat32Array = def => def && def.constructor === Float32Array;

const expandColor = v => [v.r, v.g, v.b];

const isVector = v => v instanceof THREE.Vector2 || v instanceof THREE.Vector3 || v instanceof THREE.Vector4;

const normalizeVector = v => {
  if (Array.isArray(v)) return v;else if (isVector(v)) return v.toArray();
  return [v, v, v];
};

function usePropAsIsOrAsAttribute(count, prop, setDefault) {
  return React.useMemo(() => {
    if (prop !== undefined) {
      if (isFloat32Array(prop)) {
        return prop;
      } else {
        if (prop instanceof THREE.Color) {
          const a = Array.from({
            length: count * 3
          }, () => expandColor(prop)).flat();
          return Float32Array.from(a);
        } else if (isVector(prop) || Array.isArray(prop)) {
          const a = Array.from({
            length: count * 3
          }, () => normalizeVector(prop)).flat();
          return Float32Array.from(a);
        }

        return Float32Array.from({
          length: count
        }, () => prop);
      }
    }

    return Float32Array.from({
      length: count
    }, setDefault);
  }, [prop]);
}

const Sparkles = /*#__PURE__*/React.forwardRef(({
  noise = 1,
  count = 100,
  speed = 1,
  opacity = 1,
  scale = 1,
  size,
  color,
  ...props
}, forwardRef) => {
  React.useMemo(() => extend({
    SparklesMaterial
  }), []);
  const matRef = React.useRef();
  const dpr = useThree(state => state.viewport.dpr);
  const positions = React.useMemo(() => Float32Array.from(Array.from({
    length: count
  }, () => normalizeVector(scale).map(THREE.MathUtils.randFloatSpread)).flat()), [count, scale]);
  const sizes = usePropAsIsOrAsAttribute(count, size, Math.random);
  const opacities = usePropAsIsOrAsAttribute(count, opacity);
  const speeds = usePropAsIsOrAsAttribute(count, speed);
  const noises = usePropAsIsOrAsAttribute(count * 3, noise);
  const colors = usePropAsIsOrAsAttribute(color === undefined ? count * 3 : count, !isFloat32Array(color) ? new THREE.Color(color) : color, () => 1);
  useFrame(state => matRef.current.uniforms.time.value = state.clock.elapsedTime);
  return /*#__PURE__*/React.createElement("points", _extends({
    key: `particle-${count}-${JSON.stringify(scale)}`
  }, props, {
    ref: forwardRef
  }), /*#__PURE__*/React.createElement("bufferGeometry", null, /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-position",
    args: [positions, 3]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-size",
    args: [sizes, 1]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-opacity",
    args: [opacities, 1]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-speed",
    args: [speeds, 1]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-color",
    args: [colors, 3]
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attach: "attributes-noise",
    args: [noises, 3]
  })), /*#__PURE__*/React.createElement("sparklesMaterial", {
    ref: matRef,
    transparent: true,
    pixelRatio: dpr,
    depthWrite: false
  }));
});

export { Sparkles };
