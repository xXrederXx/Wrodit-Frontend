import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react"; // React linting
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import"; // Import/order checks
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]), // Ignore build output
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    extends: [
      js.configs.recommended, // Base JS rules (very important)
      react.configs.flat.recommended, // React best practices
      reactHooks.configs.flat.recommended,
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },

    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }], // Ignore constants like CONFIG_VALUES
      "no-console": "warn", // Warn so you don't accidentally leave logs in production
      "no-debugger": "error", // Never allow debugger statements
      "no-unreachable": "error", // Code after return, throw, etc.
      "no-duplicate-imports": "error",
      eqeqeq: ["error", "always"], // Forces === instead of == (avoids weird coercion bugs)
      curly: ["error", "all"], // Always use {} in if/loops → prevents logic mistakes
      "no-constant-condition": "warn", // Catches infinite loops or always-true conditions
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-useless-catch": "error",
      "no-shadow": "error", // Prevents variable shadowing bugs
      "require-await": "warn", // Async functions should actually await something
      "no-var": "error", // Force let/const
      "prefer-const": "error",
      "react/jsx-key": "error", // Required for lists
      "react/jsx-no-duplicate-props": "error",
      "react/no-unknown-property": "error",
      "react/self-closing-comp": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react-hooks/exhaustive-deps": "warn", // Set to "error" later if you want max strictness
      "import/no-unresolved": "error", // Detect broken imports
      "import/no-duplicates": "error",
      "react/react-in-jsx-scope": "off", // unneded React 17+
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
        },
      ],
    },
  },
]);
