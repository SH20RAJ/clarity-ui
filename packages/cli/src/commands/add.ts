import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import ora from "ora";

const REGISTRY_BASE = "https://clarity-ui.pages.dev/r";

export const add = new Command()
    .name("add")
    .description("Add a component to your project")
    .argument("[component]", "The component to add")
    .action(async (component) => {
        if (!component) {
            console.log(chalk.red("Please specify a component name."));
            return;
        }

        // 1. Detect components directory
        const cwd = process.cwd();
        let componentsDir = path.join(cwd, "components", "ui");
        if (!fs.existsSync(componentsDir)) {
            componentsDir = path.join(cwd, "src", "components", "ui");
        }
        if (!fs.existsSync(componentsDir)) {
            // Create if not exists? Or strictly require Shadcn structure?
            // Let's try to create src/components/ui if src exists, else components/ui
            if (fs.existsSync(path.join(cwd, "src"))) {
                componentsDir = path.join(cwd, "src", "components", "ui");
            } else {
                componentsDir = path.join(cwd, "components", "ui");
            }
            await fs.ensureDir(componentsDir);
        }

        const spinner = ora(`Adding ${component}...`).start();

        try {
            const res = await fetch(`${REGISTRY_BASE}/${component}.json`);
            if (!res.ok) {
                spinner.fail(chalk.red(`Component '${component}' not found in registry.`));
                return;
            }
            const data = await res.json();

            if (!data.files || data.files.length === 0) {
                spinner.fail(chalk.red(`Registry data for '${component}' is malformed.`));
                return;
            }

            // Write files
            for (const file of data.files) {
                // file.path is usually just the filename in simple registry
                // We'll write to components/ui/name.tsx
                // Or data.name if available
                const targetPath = path.join(componentsDir, `${component}.tsx`);
                await fs.writeFile(targetPath, file.content);
            }

            spinner.succeed(chalk.green(`${component} added successfully.`));

        } catch (error) {
            spinner.fail(chalk.red("Failed to fetch component. check your internet connection."));
        }
    });
