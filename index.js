/**
 * React, TypeScript Linting & Formatting Configuration
 *
 * Provides industry-standard linting and formatting rules
 * with both basic and strict configurations
 */

const general = require("./configs/eslint/general");
const typescript = require("./configs/eslint/typescript");
const react = require("./configs/eslint/react");
const prettierConfig = require("./configs/prettier/prettier.config");

module.exports = {
  eslint: {
    general,
    typescript,
    react,
  },
  prettier: prettierConfig,
};
