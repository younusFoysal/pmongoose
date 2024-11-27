import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {ignores: ["node_modules", "dist"], },
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Your rules here
      "no-unused-vars": "warn",
      "semi": ["error", "always"]
    }
  }
];

