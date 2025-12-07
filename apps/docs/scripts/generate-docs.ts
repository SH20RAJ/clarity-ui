import fs from "fs"
import path from "path"

const componentsDir = path.join(process.cwd(), "../../packages/ui/src/components/ui")
const docsDir = path.join(process.cwd(), "src/content/docs/components")

if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true })
}

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".tsx"))

let sidebarItems: { title: string, href: string }[] = []

files.forEach(file => {
    const name = file.replace(".tsx", "")
    // Capitalize for title
    const title = name.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")
    const componentName = title.replace(/ /g, "") // e.g. ToggleGroup

    const content = `---
title: ${title}
description: ${title} component
---

# ${title}

<ComponentPreview name="${componentName}">

\`\`\`tsx
import { ${componentName} } from "clarityui"

export function Example() {
  return <${componentName} />
}
\`\`\`

</ComponentPreview>

## Installation

\`\`\`bash
npx clarityui add ${name}
\`\`\`
`

    fs.writeFileSync(path.join(docsDir, `${name}.mdx`), content)
    sidebarItems.push({ title, href: `/docs/components/${name}` })
    console.log(`Generated ${name}.mdx`)
})

console.log("\nCopy this into config/docs.ts:\n")
console.log(JSON.stringify(sidebarItems, null, 2))
