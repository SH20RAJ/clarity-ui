import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"], // CLI tools usually run best as ESM or CJS, focusing on ESM for now
    clean: true,
    minify: true,
    sourcemap: true,
    splitting: false,
});
