import { defineConfig } from "tsup";
import packageJson from "./package.json";

export default defineConfig({
    entry: ["src/index.ts", "src/components/*.tsx", "src/lib/*.ts"],
    format: ["cjs"],
    dts: true,
    external: ["react", "react-dom", "react-hook-form", "tailwindcss", "next"],
    noExternal: Object.keys(packageJson.dependencies || {}).filter(
        (dep) => !["react-hook-form"].includes(dep)
    ),
    sourcemap: true,
    minify: false,
});
