# Clarity UI

![NPM Version](https://img.shields.io/npm/v/clarity-ui-web-cli?logo=npm)
![License](https://img.shields.io/npm/l/clarity-ui-web-cli)
![Build Status](https://github.com/sh20raj/clarity-ui/actions/workflows/ci.yml/badge.svg)
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fsh20raj%2Fclarity-ui&countColor=%23263759)

[Live Demo](https://clarity-ui.pages.dev) | [Documentation](https://clarity-ui.pages.dev)

Clean, modern, and accessible React components for building high-quality web applications. Built on top of [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/). It is designed to be copy-paste friendly and fully compatible with [shadcn/ui](https://ui.shadcn.com/).

## Features

- **Premium Design**: Carefully crafted with a focus on typography, spacing, and micro-interactions.
- **Accessible**: Built on Radix UI primitives for full WAI-ARIA compliance.
- **Customizable**: Styled with Tailwind CSS for easy theming and modification.
- **Copy & Paste**: No npm dependency hell (unless you want it). Own your code.

## Installation

You can install components using our CLI or the standard `shadcn` CLI.

**Clarity CLI:**
```bash
npx clarity-ui-web-cli add button
```

**Shadcn CLI:**
```bash
npx shadcn@latest add https://clarity-ui.pages.dev/r/button.json
```

## Usage

After adding a component, import it from your local logic:

```tsx
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <Button variant="default">Click me</Button>
  );
}
```

## Documentation

View the full documentation and component showcase at:
[https://clarity-ui-preview.pages.dev](https://clarity-ui-preview.pages.dev)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
