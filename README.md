# Clarity UI

![NPM Version](https://img.shields.io/npm/v/clarityui)
![License](https://img.shields.io/npm/l/clarityui)
![Build Status](https://github.com/sh20raj/clarity-ui/actions/workflows/ci.yml/badge.svg)
![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=sh20raj.clarity-ui)

**Clarity UI** is a clean, minimal, and premium component library built on top of [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/). It is designed to be copy-paste friendly and fully compatible with [shadcn/ui](https://ui.shadcn.com/).

## Features

- **Premium Design**: Carefully crafted with a focus on typography, spacing, and micro-interactions.
- **Accessible**: Built on Radix UI primitives for full WAI-ARIA compliance.
- **Customizable**: Styled with Tailwind CSS for easy theming and modification.
- **Copy & Paste**: No npm dependency hell (unless you want it). Own your code.

## Installation

You can install components using the standard `shadcn` CLI, pointing to our registry.

```bash
npx shadcn@latest add https://clarity-ui-preview.pages.dev/r/button.json
```

Or install the core package if you prefer a traditional library approach:

```bash
npm install clarityui
```

## Usage

Import components directly from the package:

```tsx
import { Button } from "clarityui";

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
