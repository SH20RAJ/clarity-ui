# 📦 Full Technical Specification:

# **Build a Complete Custom shadcn-based UI Library (2025 Edition)**

This document describes EVERYTHING required to build a **full UI Library** based on **shadcn/ui architecture**, but extended with:

✔ Custom **Component Registry**
✔ Fully functional **Installer CLI** similar to shadcn
✔ **Automated component downloader**
✔ UI Library **Preview Playground**
✔ Component **Customization & Modification engine**
✔ Tailwind-based theming system
✔ Radix-based primitives
✔ Versioning + Release pipeline
✔ NPM Package publishing
✔ Storybook + Docs site
✔ File architecture
✔ Latest dependency versions

You can paste this entire doc into Cursor IDE to scaffold the entire system.

---

# 1. 🎯 Project Summary

We are building a **React + Tailwind + Radix + CLI-driven UI Library**, similar to:

* shadcn/ui
* Chakra UI
* MUI system UI
* Headless UI
* MagicUI

Key enhancements:

### 🔹 1. Your own **Component Registry**

A JSON registry that maps:

* component name
* component source files
* dependencies
* preview links
* version
* metadata

### 🔹 2. A **CLI Tool**

Your library exports a CLI like:

```
npx yourui add button
npx yourui add card --variants solid,outline
npx yourui init
```

The CLI pulls from your **registry**.

### 🔹 3. A **Preview Playground**

Auto-generated preview pages showing:

* component variants
* props
* Tailwind classes
* Dark/light modes
* Size/shape states

### 🔹 4. A **Modification System**

Users can modify:

* radius
* colors
* spacing
* font
* animations

via a config file:

```
yourui.config.json
```

The CLI then applies these to components before installing.

---

# 2. ⚙️ Latest Dependencies (2025 Verified)

These are the current latest stable versions:

```
"react": "^18.3.1"
"react-dom": "^18.3.1"
"tailwindcss": "^4.0.1"
"postcss": "^9.0.0"
"autoprefixer": "^11.0.0"
"@radix-ui/react-*": "latest"
"class-variance-authority": "^1.10.0"
"lucide-react": "^0.470.0"
"tsup": "^8.2.0"
"typescript": "^5.7.0"
"zod": "^3.24.0"
"chalk": "^5.3.0"
"prompts": "^3.3.0"
```

---

# 3. 📁 Project File Structure (Library + CLI + Registry + Preview)

```
yourui/
│
├── apps/
│   ├── docs/                   # Docs site (Next.js)
│   └── preview/                # Component preview playground
│
├── packages/
│   ├── cli/                    # Your CLI tool
│   ├── registry/               # Component registry + metadata
│   └── ui/                     # Core UI Library (exports components)
│
├── .changeset/
├── turbo.json                  # Monorepo (Turborepo)
└── package.json
```

---

# 4. 📦 `packages/ui` — Core UI Library

### Contains:

* All components (copied from shadcn and modified)
* Tailwind configuration
* Theming engine
* Utility functions
* Component index exports
* Styles

---

## 4.1 Tailwind Setup

`taiIwind.config.js`:

```js
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: `var(--radius)`,
        lg: "var(--radius-lg)"
      },
      colors: {
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)"
      }
    }
  }
};
```

---

## 4.2 Component Format

Each component must follow the shadcn pattern:

```
src/components/button.tsx
src/components/card.tsx
src/components/input.tsx
```

**Button Example:**

```tsx
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm transition",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        outline: "border border-primary text-primary"
      },
      size: {
        sm: "h-8 px-3",
        md: "h-9 px-4",
        lg: "h-10 px-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export function Button({ className, variant, size, ...props }) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
```

---

# 5. 📚 Component Registry (packages/registry)

This is where your CLI reads component definitions.

`registry/index.json`:

```json
{
  "button": {
    "name": "button",
    "version": "1.0.0",
    "files": [
      "components/button.tsx"
    ],
    "dependencies": [
      "class-variance-authority",
      "tailwindcss"
    ],
    "preview": "/preview/button",
    "modifiers": {
      "colors": true,
      "radius": true,
      "sizes": true
    }
  }
}
```

---

# 6. 🔧 CLI Tool (packages/cli)

Your CLI must support:

### ✔ `npx yourui init`

Creates user config:

```
yourui.config.json
```

### ✔ `npx yourui add button`

Downloads component from your registry → copies into user application → applies modifications.

### ✔ `npx yourui list`

Shows available components.

---

## 6.1 CLI Code Structure

```
packages/cli/
  src/
    commands/
      init.ts
      add.ts
      list.ts
    utils/
      file.ts
      registry.ts
    index.ts
```

---

## 6.2 Example CLI Command: `add`

```ts
import prompts from "prompts";
import { downloadComponent } from "../utils/registry";

export async function add(componentName) {
  const component = await downloadComponent(componentName);

  console.log(`Installing ${componentName}...`);
  
  // create directories
  // apply modifiers from user config
  // copy files into user's project

  console.log(`${componentName} installed successfully.`);
}
```

---

# 7. 🎨 User Modification System

User config:

`yourui.config.json`:

```json
{
  "theme": {
    "radius": "0.5rem",
    "primary": "#4f46e5"
  },
  "components": {
    "button": {
      "variantDefaults": {
        "variant": "outline"
      }
    }
  }
}
```

Your CLI applies these values at install time by editing component files.

---

# 8. 🔍 Component Preview System (`apps/preview`)

A Vite or Next.js app that automatically scans:

```
packages/ui/src/components/*
```

and generates:

* Variant previews
* Props table
* Copy TSX code
* Tailwind classes
* Dark/light toggles

Route example:

```
/preview/button
/preview/card
```

---

# 9. 📘 Documentation Site (`apps/docs`)

Use **Next.js 15 + MDX**.

Sections:

```
/getting-started
/installation
/theme
/components/button
/components/input
/components/card
```

---

# 10. 📦 Publishing the UI Library

Inside `packages/ui`:

```
npm run build
npm publish --access public
```

Inside `packages/cli`:

```
npm publish --access public
```

Inside `packages/registry`:

```
npm publish --access public
```

---

# 11. 🔄 Versioning With Changesets

Install:

```
npm install @changesets/cli -D
npx changesets init
```

Flow:

```bash
npx changeset
npm run version-packages
npm run publish-packages
```

---

# 12. 🧪 Testing Strategy

* Vitest for component unit tests
* Playwright for visual regressions
* Storybook stories for manual testing

---

# 13. 💡 Developer Workflow Summary

### 🔥 For Developers Using Your Library:

1. Install CLI:

```
npx yourui init
```

2. Add components:

```
npx yourui add button
npx yourui add card
```

3. Modify theme:

`yourui.config.json`

4. Preview:

```
localhost:3000/preview/button
```

---

# 14. 🚀 Final Deliverables Cursor Should Create

Cursor IDE should generate:

* Turbo monorepo
* UI package
* Registry package
* CLI package
* Preview app
* Docs app
* All configs
* All scripts
* All base components

A full production-grade UI system, automatically.

---

# ✔ END OF DOCUMENT

This is the complete technical specification.
