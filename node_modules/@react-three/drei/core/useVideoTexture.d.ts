import * as THREE from 'three';
interface VideoTextureProps extends HTMLVideoElement {
    unsuspend?: 'canplay' | 'canplaythrough';
    start?: boolean;
}
export declare function useVideoTexture(src: string, props: Partial<VideoTextureProps>): THREE.VideoTexture;
export {};
