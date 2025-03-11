/**
 * React TypeScript Linting & Formatting Configuration
 *
 * Provides industry-standard linting and formatting rules
 * with both basic and strict configurations
 */

const basicLegacy = require("./configs/eslint/basic");
const strictLegacy = require("./configs/eslint/strict");
const basic = require("./configs/eslint-v9/basic");
const strict = require("./configs/eslint-v9/strict");
const prettierConfig = require("./configs/prettier/prettier.config");

module.exports = {
  eslint: {
    basic,
    strict,
    basicLegacy,
    strictLegacy,
  },
  prettier: prettierConfig,
};
