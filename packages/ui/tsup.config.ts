import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts", "src/components/*.tsx", "src/lib/*.ts"],
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    external: ["react", "react-dom"],
    sourcemap: true,
    minify: true,
});
