import * as React from 'react';
import { SpringConfig } from '@react-spring/core';
export declare type PresentationControlProps = {
    snap?: Boolean | SpringConfig;
    global?: boolean;
    cursor?: boolean;
    speed?: number;
    zoom?: number;
    rotation?: [number, number, number];
    polar?: [number, number];
    azimuth?: [number, number];
    config?: any;
    enabled?: boolean;
    children?: React.ReactNode;
};
export declare function PresentationControls({ enabled, snap, global, cursor, children, speed, rotation, zoom, polar, azimuth, config, }: PresentationControlProps): JSX.Element;
