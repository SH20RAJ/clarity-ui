import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import prompts from "prompts";
import ora from "ora";

const REGISTRY_BASE = "https://clarity-ui.pages.dev/registry";

export const update = new Command()
    .name("update")
    .description("Update all usage components to Clarity UI versions")
    .action(async () => {
        // 1. Detect components directory
        const cwd = process.cwd();
        let componentsDir = path.join(cwd, "components", "ui");
        if (!fs.existsSync(componentsDir)) {
            componentsDir = path.join(cwd, "src", "components", "ui");
        }
        if (!fs.existsSync(componentsDir)) {
            console.log(chalk.red("Could not locate components/ui or src/components/ui directory."));
            return;
        }

        // 2. Scan components
        const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".tsx"));
        if (files.length === 0) {
            console.log(chalk.yellow("No components found locally."));
            return;
        }

        console.log(chalk.blue(`Found ${files.length} components: ${files.join(", ")}`));

        // 3. Prompt
        const response = await prompts({
            type: 'confirm',
            name: 'proceed',
            message: 'Do you want to overwrite all these components with Clarity UI versions?',
            initial: true
        });

        if (!response.proceed) return;

        // 4. Update
        const spinner = ora("Updating components...").start();
        const failed: string[] = [];
        const succeeded: string[] = [];

        for (const file of files) {
            const componentName = file.replace(".tsx", "");
            spinner.text = `Updating ${componentName}...`;

            try {
                const res = await fetch(`${REGISTRY_BASE}/${componentName}.json`);
                if (!res.ok) {
                    if (res.status === 404) {
                        // Some components might not exist in registry or have different names
                        // Silent fail or log?
                        // failed.push(`${componentName} (Not in registry)`);
                    }
                    continue;
                }
                const data = await res.json();
                if (data && data.files && data.files.length > 0) {
                    const content = data.files[0].content;
                    fs.writeFileSync(path.join(componentsDir, file), content);
                    succeeded.push(componentName);
                }
            } catch (error) {
                failed.push(`${componentName} (Network error)`);
            }
        }

        spinner.succeed(`Updated ${succeeded.length} components.`);
        if (failed.length > 0) {
            console.log(chalk.yellow("Failed to update:"));
            failed.forEach(f => console.log(`- ${f}`));
        }
    });

