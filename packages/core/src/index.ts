import { WorldBuilder, struct } from "thyseus";

@struct
export class Vector3 {
    x: number = 0;
    y: number = 0;
    z: number = 0;
}

export function corePlugin(builder: WorldBuilder) {
	builder
		.registerResource(Vector3);
}