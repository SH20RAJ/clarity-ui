import { Registry } from "./schema";

export const registry: Registry = [
    {
        name: "button",
        type: "registry:ui",
        description: "A button component.",
        dependencies: [
            "@radix-ui/react-slot",
            "class-variance-authority"
        ],
        files: [
            {
                path: "ui/button.tsx",
                type: "registry:ui",
                target: "components/ui/button.tsx"
            }
        ],
    }
];
