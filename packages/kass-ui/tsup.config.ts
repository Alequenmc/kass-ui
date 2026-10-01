import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "components/accordion/index": "src/components/accordion/index.ts",
    "components/alert-dialog/index": "src/components/alert-dialog/index.ts",
    "components/badge/index": "src/components/badge/index.ts",
    "components/button/index": "src/components/button/index.ts",
    "components/card/index": "src/components/card/index.ts",
    "components/checkbox/index": "src/components/checkbox/index.ts",
    "components/dialog/index": "src/components/dialog/index.ts",
    "components/dropdown-menu/index": "src/components/dropdown-menu/index.ts",
    "components/input/index": "src/components/input/index.ts",
    "components/label/index": "src/components/label/index.ts",
    "components/popover/index": "src/components/popover/index.ts",
    "components/select/index": "src/components/select/index.ts",
    "components/separator/index": "src/components/separator/index.ts",
    "components/skeleton/index": "src/components/skeleton/index.ts",
    "components/spinner/index": "src/components/spinner/index.ts",
    "components/switch/index": "src/components/switch/index.ts",
    "components/tabs/index": "src/components/tabs/index.ts",
    "components/textarea/index": "src/components/textarea/index.ts",
    "components/tooltip/index": "src/components/tooltip/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".js",
    };
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
