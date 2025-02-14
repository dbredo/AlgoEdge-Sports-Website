import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends(
    "next/core-web-vitals"
  ),
  {
    files: ['app/**/*.{js,jsx,ts,tsx}', '*.{js,jsx,ts,tsx}'],
    ignores: [
      '.next/**/*',
      'node_modules/**/*',
      'public/**/*'
    ],
    plugins: {
      '@next/next': nextPlugin,
      'react': reactPlugin,
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-useless-escape': 'warn',
      'no-cond-assign': ['error', 'except-parens'],
      'no-prototype-builtins': 'warn',
      'no-empty': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
      },
    },
  },
];
