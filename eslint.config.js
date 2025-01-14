import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended",
    ],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: true,
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
      "no-extra-boolean-cast": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    ignorePatterns: [
      "**/*.config.js",
      "**/*.config.cjs",
      "**/env.mjs",
      "babel.config.js",
      "tsup.config.ts",
      "**/build/**",
      "**/dist/**",
    ],
    reportUnusedDisableDirectives: true,
  }),
];

export default eslintConfig;
