import { Vector3 } from "@thyseus-issue/core";
// import * as Core from "@thyseus-issue/core";
import { WorldBuilder, struct } from "thyseus";

@struct
export class Transform {
    position: Vector3 = new Vector3();
	// position: Core.Vector3 = new Core.Vector3();
	
}

export function helloPlugin(builder: WorldBuilder) {
	builder
		.registerResource(Transform)
}