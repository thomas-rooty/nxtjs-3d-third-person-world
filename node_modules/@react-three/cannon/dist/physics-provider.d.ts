import type { CannonWorkerProps } from '@pmndrs/cannon-worker-api';
import type { PropsWithChildren } from 'react';
export declare type PhysicsProviderProps = CannonWorkerProps & {
    isPaused?: boolean;
    maxSubSteps?: number;
    shouldInvalidate?: boolean;
    stepSize?: number;
};
export declare function PhysicsProvider({ allowSleep, axisIndex, broadphase, children, defaultContactMaterial, frictionGravity, gravity, isPaused, iterations, maxSubSteps, quatNormalizeFast, quatNormalizeSkip, shouldInvalidate, size, solver, stepSize, tolerance, }: PropsWithChildren<PhysicsProviderProps>): JSX.Element;
