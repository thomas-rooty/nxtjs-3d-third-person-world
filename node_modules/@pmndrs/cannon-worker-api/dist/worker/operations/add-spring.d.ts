import type { CannonMessageMap } from '../../types';
import type { State } from '../state';
export declare const addSpring: (state: State, { props: [bodyA, bodyB, { damping, localAnchorA, localAnchorB, restLength, stiffness, worldAnchorA, worldAnchorB },], uuid, }: CannonMessageMap['addSpring']) => void;
