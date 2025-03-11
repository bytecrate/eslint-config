/**
 * React TypeScript Linting & Formatting Configuration
 *
 * Provides industry-standard linting and formatting rules
 * with both basic and strict configurations
 */

const basic = require("./configs/eslint/basic");
const strict = require("./configs/eslint/strict");
const prettierConfig = require("./configs/prettier/prettier.config");

module.exports = {
  eslint: {
    basic,
    strict,
  },
  prettier: prettierConfig,
};
