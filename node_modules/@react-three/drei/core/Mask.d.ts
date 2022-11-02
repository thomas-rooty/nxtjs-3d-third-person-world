import * as THREE from 'three';
import * as React from 'react';
declare type MaskSpread = {
    colorWrite: boolean;
    depthWrite: boolean;
    stencilWrite: boolean;
    stencilRef: number;
    stencilFunc: THREE.StencilFunc;
    stencilFail: THREE.StencilOp;
    stencilZFail: THREE.StencilOp;
    stencilZPass: THREE.StencilOp;
};
declare type Props = Omit<JSX.IntrinsicElements['mesh'], 'children'> & {
    id: number;
    colorWrite?: boolean;
    depthWrite?: boolean;
    children: ((spread: MaskSpread) => React.ReactNode) | React.ReactNode;
};
export declare function Mask({ id, children, colorWrite, depthWrite, ...props }: Props): JSX.Element;
export declare function useMask(id: number, inverse?: boolean): {
    stencilWrite: boolean;
    stencilRef: number;
    stencilFunc: THREE.StencilFunc;
    stencilFail: THREE.StencilOp;
    stencilZFail: THREE.StencilOp;
    stencilZPass: THREE.StencilOp;
};
export {};
