import type { CannonMessageMap } from '../../types';
import type { State } from '../state';
export declare const addConstraint: (state: State, { props: [bodyA, bodyB, { angle, axisA, axisB, collideConnected, distance, maxForce, maxMultiplier, pivotA, pivotB, twistAngle, wakeUpBodies, },], type, uuid, }: CannonMessageMap['addConstraint']) => void;
