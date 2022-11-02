import type { CannonMessageMap } from '../../types';
import type { State } from '../state';
export declare const step: (state: State, { positions, props: { maxSubSteps, stepSize, timeSinceLastCalled }, quaternions }: CannonMessageMap['step']) => void;
