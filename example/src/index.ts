import { StartSchedule, World } from 'thyseus';
import { helloPlugin } from "@thyseus-issue/hello"

export async function createWorld() {
	const world = await World.new()
		.addPlugin(helloPlugin)
		.build();
	
	world.runSchedule(StartSchedule);
}

createWorld();