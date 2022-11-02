import * as React from 'react';
import * as THREE from 'three';
import { Size } from '@react-three/fiber';
export declare type ContainerProps = {
    scene: THREE.Scene;
    index: number;
    children?: React.ReactNode;
    frames: number;
    rect: React.MutableRefObject<DOMRect>;
    track: React.MutableRefObject<HTMLElement>;
    canvasSize: Size;
};
export declare type ViewProps = {
    track: React.MutableRefObject<HTMLElement>;
    index?: number;
    frames?: number;
    children?: React.ReactNode;
};
export declare const View: ({ track, index, frames, children }: ViewProps) => JSX.Element;
