import * as React from 'react';
import { Object3DNode } from '@react-three/fiber';
import { Texture, Scene, Loader, CubeTexture, TextureEncoding } from 'three';
import { GroundProjectedEnv as GroundProjectedEnvImpl } from 'three-stdlib';
import { PresetsType } from '../helpers/environment-assets';
declare type Props = {
    children?: React.ReactNode;
    frames?: number;
    near?: number;
    far?: number;
    resolution?: number;
    background?: boolean | 'only';
    blur?: number;
    map?: THREE.Texture;
    files?: string | string[];
    path?: string;
    preset?: PresetsType;
    scene?: Scene | React.MutableRefObject<THREE.Scene>;
    extensions?: (loader: Loader) => void;
    ground?: boolean | {
        radius?: number;
        height?: number;
        scale?: number;
    };
    encoding?: TextureEncoding;
};
export declare function EnvironmentMap({ scene, background, blur, map }: Props): null;
export declare function useEnvironment({ files, path, preset, encoding, extensions, }: Partial<Props>): Texture | CubeTexture;
export declare function EnvironmentCube({ background, scene, blur, ...rest }: Props): null;
export declare function EnvironmentPortal({ children, near, far, resolution, frames, map, background, blur, scene, files, path, preset, extensions, }: Props): JSX.Element;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            groundProjectedEnvImpl: Object3DNode<GroundProjectedEnvImpl, typeof GroundProjectedEnvImpl>;
        }
    }
}
export declare function Environment(props: Props): JSX.Element;
export {};
