// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. Inherit recommended rules globally
  js.configs.recommended,

  // 2. Configure files, globals, and custom rules
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "prefer-const": "error",
      "semi": ["error", "always"],
    },
  },
  
  // 3. Define global ignores
  {
    ignores: ["dist/", "node_modules/", "build/"],
  }
]);
