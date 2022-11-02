/// <reference types="react" />
import type { CannonWorkerAPI, CollideBeginEvent, CollideEndEvent, CollideEvent, RayhitEvent, Refs, Subscriptions } from '@pmndrs/cannon-worker-api';
import type { Vector3 } from 'three';
declare type CannonEvent = CollideBeginEvent | CollideEndEvent | CollideEvent | RayhitEvent;
declare type CallbackByType<T extends {
    type: string;
}> = {
    [K in T['type']]?: T extends {
        type: K;
    } ? (e: T) => void : never;
};
export declare type CannonEvents = {
    [uuid: string]: Partial<CallbackByType<CannonEvent>>;
};
export declare type ScaleOverrides = {
    [uuid: string]: Vector3;
};
export declare type PhysicsContext = {
    bodies: {
        [uuid: string]: number;
    };
    events: CannonEvents;
    refs: Refs;
    scaleOverrides: ScaleOverrides;
    subscriptions: Subscriptions;
    worker: CannonWorkerAPI;
};
export declare const physicsContext: import("react").Context<PhysicsContext | null>;
export declare const usePhysicsContext: () => PhysicsContext;
export {};
