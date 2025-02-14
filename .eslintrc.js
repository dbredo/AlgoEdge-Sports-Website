module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    // Add any custom rules here
  },
  ignorePatterns: [".eslintrc.js", "next.config.js"],
}
