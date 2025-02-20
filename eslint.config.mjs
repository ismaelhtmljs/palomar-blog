import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", 
      "@next/next/no-img-element": "off", // Desactiva la advertencia de `<img>`
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }] // Ignora variables sin usar que comiencen con "_"
    },
  }
];

export default eslintConfig;
