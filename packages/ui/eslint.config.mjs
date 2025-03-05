import baseConfig from "../../eslint.config.mjs";

export default [
    ...baseConfig,
    {
        ignores: ["node_modules", "dist"],
        rules: {
            "@next/next/no-html-link-for-pages": "off", // Remove Next.js-specific rules
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json", // Use UI package's tsconfig
            },
        },
    },
];
