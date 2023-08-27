import { thyseus } from "@thyseus/transformer-rollup";
import { defineConfig } from "vite";
console.log(thyseus);
export default defineConfig({
    // build: {
    //   target: "esnext",
    //   minify: false,
    // },
    plugins: [thyseus()],
});