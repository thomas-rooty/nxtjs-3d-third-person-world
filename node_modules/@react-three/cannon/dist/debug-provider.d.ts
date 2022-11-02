import CannonDebugger from 'cannon-es-debugger';
import type { PropsWithChildren } from 'react';
import type { Color } from 'three';
export declare type DebugProviderProps = {
    color?: string | number | Color;
    impl?: typeof CannonDebugger;
    scale?: number;
};
export declare function DebugProvider({ children, color, impl, scale, }: PropsWithChildren<DebugProviderProps>): JSX.Element;
