<div align="center">

# Kass UI

**Minimalist · Modular · Composable · Accessible**

A modern React component library built with TypeScript and Tailwind CSS.

[![npm version](https://img.shields.io/npm/v/kass-ui?style=flat-square)](https://www.npmjs.com/package/kass-ui)
[![license](https://img.shields.io/npm/l/kass-ui?style=flat-square)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square)](https://www.typescriptlang.org/)

</div>

---

## Features

- 🎨 **Design Tokens** — CSS custom properties for full theming control
- 🧩 **Composable** — Components that combine naturally
- ♿ **Accessible** — Built-in ARIA support and keyboard navigation
- 🔒 **Type-safe** — Strict TypeScript with predictable APIs
- 🌳 **Tree-shakeable** — Import only what you need
- 🌗 **Dark Mode** — First-class light and dark theme support
- 📦 **Zero config** — Works without Tailwind in consumer projects

## Installation

```bash
npm install kass-ui
# or
pnpm add kass-ui
# or
yarn add kass-ui
```

## Quick Start

```tsx
import { Button } from "kass-ui";
import "kass-ui/styles.css";

export default function App() {
  return (
    <Button variant="primary" size="lg">
      Hello Kass UI
    </Button>
  );
}
```

## Components

| Component | Status |
| --------- | ------ |
| Button    | ✅ Ready |
| Input     | 🚧 Coming |
| Card      | 🚧 Coming |
| Badge     | 🚧 Coming |
| Dialog    | 🚧 Coming |

## Customization

Override design tokens in your CSS:

```css
:root {
  --kass-primary: 15 118 110;
  --kass-radius-md: 1rem;
}
```

## License

[MIT](./LICENSE) © Kass UI
