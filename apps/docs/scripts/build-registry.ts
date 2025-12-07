
import fs from "fs"
import path from "path"

const componentsDir = path.join(process.cwd(), "../../packages/ui/src/components/ui")
const registryDir = path.join(process.cwd(), "public/registry")

if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true })
}

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".tsx"))

files.forEach(file => {
    const name = file.replace(".tsx", "")
    const content = fs.readFileSync(path.join(componentsDir, file), "utf-8")

    const registryItem = {
        name,
        type: "registry:ui",
        dependencies: [
            // Rudimentary dependency detection or hardcoded?
            // For now, empty or generic.
            "clarityui"
        ],
        files: [
            {
                path: `ui/${file}`,
                content,
                type: "registry:ui"
            }
        ]
    }

    fs.writeFileSync(path.join(registryDir, `${name}.json`), JSON.stringify(registryItem, null, 2))
    console.log(`Generated registry/${name}.json`)
})
