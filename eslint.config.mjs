import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/node_modules/", "**/.next/", "**/build/", "**/dist/"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
), {
    settings: {
        next: {
            rootDir: ["apps/*/"],
        },
    },

    rules: {
        "@next/next/no-html-link-for-pages": "off",
    },
}, {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
        parser: tsParser,
    },
}];
