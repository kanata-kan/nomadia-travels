// eslint.config.mjs
import path, { dirname } from "path";
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
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // 🔑 هاد rule كيقول: أي prop غريبة على DOM → warning
      // ولكن تجاهل أي prop اللي بدايتها بـ $
      "react/no-unknown-property": ["warn", { ignore: ["$.*"] }],
    },
  },
];

export default eslintConfig;
