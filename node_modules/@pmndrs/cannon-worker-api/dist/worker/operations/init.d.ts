import type { CannonMessageProps } from '../../types';
import type { DecoratedWorld } from '../state';
export declare const init: (world: DecoratedWorld, { allowSleep, axisIndex, broadphase, defaultContactMaterial, frictionGravity, gravity, iterations, quatNormalizeFast, quatNormalizeSkip, solver, tolerance, }: CannonMessageProps<'init'>) => void;
