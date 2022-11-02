import type { MaterialOptions } from 'cannon-es';
import type { Vector3 } from 'three';
import type { CollideBeginEvent, CollideEndEvent, CollideEvent, Quad, Triplet, VectorName } from './types';
export declare type AtomicProps = {
    allowSleep: boolean;
    angularDamping: number;
    collisionFilterGroup: number;
    collisionFilterMask: number;
    collisionResponse: boolean;
    fixedRotation: boolean;
    isTrigger: boolean;
    linearDamping: number;
    mass: number;
    material: MaterialOptions;
    sleepSpeedLimit: number;
    sleepTimeLimit: number;
    userData: Record<PropertyKey, any>;
};
export declare type VectorProps = Record<VectorName, Triplet>;
declare type VectorTypes = Vector3 | Triplet;
export declare type BodyProps<T extends any[] = unknown[]> = Partial<AtomicProps> & Partial<VectorProps> & {
    args?: T;
    onCollide?: (e: CollideEvent) => void;
    onCollideBegin?: (e: CollideBeginEvent) => void;
    onCollideEnd?: (e: CollideEndEvent) => void;
    quaternion?: Quad;
    rotation?: Triplet;
    type?: 'Dynamic' | 'Static' | 'Kinematic';
};
export declare type BodyPropsArgsRequired<T extends any[] = unknown[]> = BodyProps<T> & {
    args: T;
};
export declare type ShapeType = 'Box' | 'ConvexPolyhedron' | 'Cylinder' | 'Heightfield' | 'Particle' | 'Plane' | 'Sphere' | 'Trimesh';
export declare type BodyShapeType = ShapeType | 'Compound';
export declare type CylinderArgs = [radiusTop?: number, radiusBottom?: number, height?: number, numSegments?: number];
export declare type SphereArgs = [radius: number];
export declare type TrimeshArgs = [vertices: ArrayLike<number>, indices: ArrayLike<number>];
export declare type HeightfieldArgs = [
    data: number[][],
    options: {
        elementSize?: number;
        maxValue?: number;
        minValue?: number;
    }
];
export declare type ConvexPolyhedronArgs<V extends VectorTypes = VectorTypes> = [
    vertices?: V[],
    faces?: number[][],
    normals?: V[],
    axes?: V[],
    boundingSphereRadius?: number
];
export declare type PlaneProps = BodyProps;
export declare type BoxProps = BodyProps<Triplet>;
export declare type CylinderProps = BodyProps<CylinderArgs>;
export declare type ParticleProps = BodyProps;
export declare type SphereProps = BodyProps<SphereArgs>;
export declare type TrimeshProps = BodyPropsArgsRequired<TrimeshArgs>;
export declare type HeightfieldProps = BodyPropsArgsRequired<HeightfieldArgs>;
export declare type ConvexPolyhedronProps = BodyProps<ConvexPolyhedronArgs>;
export interface CompoundBodyProps extends BodyProps {
    shapes: BodyProps & {
        type: ShapeType;
    }[];
}
export {};
