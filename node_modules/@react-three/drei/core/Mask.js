import _extends from '@babel/runtime/helpers/esm/extends';
import * as THREE from 'three';
import * as React from 'react';

function Mask({
  id = 1,
  children,
  colorWrite = false,
  depthWrite = false,
  ...props
}) {
  const spread = React.useMemo(() => ({
    colorWrite,
    depthWrite,
    stencilWrite: true,
    stencilRef: id,
    stencilFunc: THREE.AlwaysStencilFunc,
    stencilFail: THREE.ReplaceStencilOp,
    stencilZFail: THREE.ReplaceStencilOp,
    stencilZPass: THREE.ReplaceStencilOp
  }), [id, colorWrite, depthWrite]);
  return /*#__PURE__*/React.createElement("mesh", _extends({
    renderOrder: -id
  }, props), /*#__PURE__*/React.createElement("meshBasicMaterial", spread), typeof children === 'function' ? children(spread) : children);
}
function useMask(id, inverse = false) {
  return {
    stencilWrite: true,
    stencilRef: id,
    stencilFunc: inverse ? THREE.NotEqualStencilFunc : THREE.EqualStencilFunc,
    stencilFail: THREE.KeepStencilOp,
    stencilZFail: THREE.KeepStencilOp,
    stencilZPass: THREE.KeepStencilOp
  };
}

export { Mask, useMask };
