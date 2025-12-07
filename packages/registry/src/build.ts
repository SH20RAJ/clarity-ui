
import fs from "fs-extra";
import path from "path";
import { registry } from "./registry";

const PUBLIC_PATH = path.join(process.cwd(), "public");
const REGISTRY_PATH = path.join(PUBLIC_PATH, "r");

async function buildRegistry() {
    await fs.ensureDir(REGISTRY_PATH);

    // 1. Build registry/index.json (list of all components)
    const index = registry.map((item) => ({
        name: item.name,
        type: item.type,
        description: item.description,
        dependencies: item.dependencies,
        registryDependencies: item.registryDependencies,
        files: item.files,
    }));

    await fs.writeJSON(path.join(PUBLIC_PATH, "index.json"), index, { spaces: 2 });

    // 2. Build individual component files public/r/[name].json
    for (const item of registry) {
        await fs.writeJSON(path.join(REGISTRY_PATH, `${item.name}.json`), item, { spaces: 2 });
    }

    console.log("Registry built successfully!");
}

buildRegistry().catch(console.error);
