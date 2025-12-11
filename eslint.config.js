import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig, globalIgnores } from "eslint/config";

import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
  { files: ["**/*.json5"], plugins: { json }, language: "json/json5", extends: ["json/recommended"] },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },

  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      // untuk TS:
      // parserOptions: { parser: tsParser }
    },
    plugins: {
      svelte,
    },
    rules: {
      ...svelte.configs.recommended.rules
    },
  },
  [globalIgnores(["dist/**", "build/**", "node_modules/**", "static/**", ".svelte-kit/**", "jsconfig.json"])],

]);

