import type { CannonMessageBody } from '../types';
import type { CreateMaterial } from './material';
import type { State } from './state';
export declare const addContactMaterial: (world: State['world'], createMaterial: CreateMaterial, [materialA, materialB, options]: CannonMessageBody<'addContactMaterial'>['props'], uuid: string) => void;
export declare const removeContactMaterial: (world: State['world'], cmUUID: string) => void;
