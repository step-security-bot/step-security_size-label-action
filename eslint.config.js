import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist/"]
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node
      }
    },
    rules: {
      semi: "error",
      "no-tabs": "error",
      "no-console": "off",
      "require-atomic-updates": "off"
    }
  }
];
