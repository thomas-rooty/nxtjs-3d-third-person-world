import { Material } from 'cannon-es';
declare type MaterialOptions = {
    friction?: number;
    name?: string | symbol;
    restitution?: number;
};
export declare type CreateMaterial = (nameOrOptions?: MaterialOptions | string) => Material;
export declare const createMaterialFactory: (materials: Record<string | symbol, Material>) => CreateMaterial;
export {};
