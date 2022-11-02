/// <reference types="cannon-es" />
import type { AtomicName, AtomicProps, BodyProps, BoxProps, CompoundBodyProps, ConeTwistConstraintOpts, ContactMaterialOptions, ConvexPolyhedronProps, CylinderProps, DistanceConstraintOpts, HeightfieldProps, HingeConstraintOpts, LockConstraintOpts, MaterialOptions, ParticleProps, PlaneProps, PointToPointConstraintOpts, Quad, RayhitEvent, RayOptions, SphereProps, SpringOptns, TrimeshProps, Triplet, VectorName, WheelInfoOptions } from '@pmndrs/cannon-worker-api';
import type { DependencyList, Ref, RefObject } from 'react';
import { Euler, Object3D, Quaternion, Vector3 } from 'three';
export declare type AtomicApi<K extends AtomicName> = {
    set: (value: AtomicProps[K]) => void;
    subscribe: (callback: (value: AtomicProps[K]) => void) => () => void;
};
export declare type QuaternionApi = {
    copy: ({ w, x, y, z }: Quaternion) => void;
    set: (x: number, y: number, z: number, w: number) => void;
    subscribe: (callback: (value: Quad) => void) => () => void;
};
export declare type VectorApi = {
    copy: ({ x, y, z }: Vector3 | Euler) => void;
    set: (x: number, y: number, z: number) => void;
    subscribe: (callback: (value: Triplet) => void) => () => void;
};
export declare type WorkerApi = {
    [K in AtomicName]: AtomicApi<K>;
} & {
    [K in VectorName]: VectorApi;
} & {
    applyForce: (force: Triplet, worldPoint: Triplet) => void;
    applyImpulse: (impulse: Triplet, worldPoint: Triplet) => void;
    applyLocalForce: (force: Triplet, localPoint: Triplet) => void;
    applyLocalImpulse: (impulse: Triplet, localPoint: Triplet) => void;
    applyTorque: (torque: Triplet) => void;
    quaternion: QuaternionApi;
    rotation: VectorApi;
    scaleOverride: (scale: Triplet) => void;
    sleep: () => void;
    wakeUp: () => void;
};
export interface PublicApi extends WorkerApi {
    at: (index: number) => WorkerApi;
}
export declare type Api<O extends Object3D> = [RefObject<O>, PublicApi];
declare type GetByIndex<T extends BodyProps> = (index: number) => T;
export declare function usePlane<O extends Object3D>(fn: GetByIndex<PlaneProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
export declare function useBox<O extends Object3D>(fn: GetByIndex<BoxProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
export declare function useCylinder<O extends Object3D>(fn: GetByIndex<CylinderProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
export declare function useHeightfield<O extends Object3D>(fn: GetByIndex<HeightfieldProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
export declare function useParticle<O extends Object3D>(fn: GetByIndex<ParticleProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
export declare function useSphere<O extends Object3D>(fn: GetByIndex<SphereProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
export declare function useTrimesh<O extends Object3D>(fn: GetByIndex<TrimeshProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
export declare function useConvexPolyhedron<O extends Object3D>(fn: GetByIndex<ConvexPolyhedronProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
export declare function useCompoundBody<O extends Object3D>(fn: GetByIndex<CompoundBodyProps>, fwdRef?: Ref<O>, deps?: DependencyList): Api<O>;
declare type ConstraintApi<A extends Object3D, B extends Object3D> = [
    RefObject<A>,
    RefObject<B>,
    {
        disable: () => void;
        enable: () => void;
    }
];
declare type HingeConstraintApi<A extends Object3D, B extends Object3D> = [
    RefObject<A>,
    RefObject<B>,
    {
        disable: () => void;
        disableMotor: () => void;
        enable: () => void;
        enableMotor: () => void;
        setMotorMaxForce: (value: number) => void;
        setMotorSpeed: (value: number) => void;
    }
];
declare type SpringApi<A extends Object3D, B extends Object3D> = [
    RefObject<A>,
    RefObject<B>,
    {
        setDamping: (value: number) => void;
        setRestLength: (value: number) => void;
        setStiffness: (value: number) => void;
    }
];
export declare function usePointToPointConstraint<A extends Object3D, B extends Object3D>(bodyA: Ref<A> | undefined, bodyB: Ref<B> | undefined, optns: PointToPointConstraintOpts, deps?: DependencyList): ConstraintApi<A, B>;
export declare function useConeTwistConstraint<A extends Object3D, B extends Object3D>(bodyA: Ref<A> | undefined, bodyB: Ref<B> | undefined, optns: ConeTwistConstraintOpts, deps?: DependencyList): ConstraintApi<A, B>;
export declare function useDistanceConstraint<A extends Object3D, B extends Object3D>(bodyA: Ref<A> | undefined, bodyB: Ref<B> | undefined, optns: DistanceConstraintOpts, deps?: DependencyList): ConstraintApi<A, B>;
export declare function useHingeConstraint<A extends Object3D, B extends Object3D>(bodyA: Ref<A> | undefined, bodyB: Ref<B> | undefined, optns: HingeConstraintOpts, deps?: DependencyList): HingeConstraintApi<A, B>;
export declare function useLockConstraint<A extends Object3D, B extends Object3D>(bodyA: Ref<A> | undefined, bodyB: Ref<B> | undefined, optns: LockConstraintOpts, deps?: DependencyList): ConstraintApi<A, B>;
export declare function useSpring<A extends Object3D, B extends Object3D>(bodyA: Ref<A> | undefined, bodyB: Ref<B> | undefined, optns: SpringOptns, deps?: DependencyList): SpringApi<A, B>;
export declare function useRaycastClosest(options: RayOptions, callback: (e: RayhitEvent) => void, deps?: DependencyList): void;
export declare function useRaycastAny(options: RayOptions, callback: (e: RayhitEvent) => void, deps?: DependencyList): void;
export declare function useRaycastAll(options: RayOptions, callback: (e: RayhitEvent) => void, deps?: DependencyList): void;
export interface RaycastVehiclePublicApi {
    applyEngineForce: (value: number, wheelIndex: number) => void;
    setBrake: (brake: number, wheelIndex: number) => void;
    setSteeringValue: (value: number, wheelIndex: number) => void;
    sliding: {
        subscribe: (callback: (sliding: boolean) => void) => void;
    };
}
export interface RaycastVehicleProps {
    chassisBody: Ref<Object3D>;
    indexForwardAxis?: number;
    indexRightAxis?: number;
    indexUpAxis?: number;
    wheelInfos: WheelInfoOptions[];
    wheels: Ref<Object3D>[];
}
export declare function useRaycastVehicle<O extends Object3D>(fn: () => RaycastVehicleProps, fwdRef?: Ref<O>, deps?: DependencyList): [RefObject<O>, RaycastVehiclePublicApi];
export declare function useContactMaterial(materialA: MaterialOptions, materialB: MaterialOptions, options: ContactMaterialOptions, deps?: DependencyList): void;
export {};
