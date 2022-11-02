/// <reference types="cannon-es" />
export function propsToBody(options: {
    uuid: string;
    props: BodyProps;
    type: BodyShapeType;
    createMaterial?: ((materialOptions: MaterialOptions) => Material) | undefined;
}): Body;
export type MaterialOptions = import('cannon-es').MaterialOptions;
import { Material } from "material/Material";
import { Body } from "objects/Body";
