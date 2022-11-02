/// <reference types="react" />
import type { BodyProps, BodyShapeType } from '@pmndrs/cannon-worker-api';
export declare type DebugApi = {
    add(id: string, props: BodyProps, type: BodyShapeType): void;
    remove(id: string): void;
};
export declare const debugContext: import("react").Context<DebugApi | null>;
export declare const useDebugContext: () => DebugApi | null;
