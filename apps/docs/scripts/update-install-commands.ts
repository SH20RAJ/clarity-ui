
import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'src/content/docs/components');

if (!fs.existsSync(docsDir)) {
    console.error(`Directory not found: ${docsDir}`);
    process.exit(1);
}

const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.mdx'));

files.forEach(file => {
    const filePath = path.join(docsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const componentName = file.replace('.mdx', '');

    // Regex to find the Installation section and the code block following it.
    // We look for ## Installation, optional whitespace, and the code block.
    const regex = /## Installation\s+```bash\s+npx clarity-ui-web-cli add ([a-zA-Z0-9-]+)\s+```/;

    const match = content.match(regex);

    if (match) {
        const component = match[1]; // Capture the component name from the existing command to be safe

        const newContent = `## Installation

### Clarity CLI
\`\`\`bash
npx clarity-ui-web-cli add ${component}
\`\`\`

### Shadcn CLI
\`\`\`bash
npx shadcn@latest add https://clarity-ui.pages.dev/r/${component}.json
\`\`\``;

        content = content.replace(match[0], newContent);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${file}`);
    } else {
        console.warn(`Skipping ${file}: Installation pattern not found.`);
    }
});
