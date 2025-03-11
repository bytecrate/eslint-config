const basic = require("./basic");
const merge = require("deepmerge");

module.exports = merge(basic, {
  rules: {
    // React
    "react/jsx-key": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/self-closing-comp": "error",
    "react/no-array-index-key": "error",
    "react-hooks/exhaustive-deps": "error",

    // TypeScript
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
    ],

    // Import
    "import/no-unresolved": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-default-export": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // General
    "no-console": "error",
    "no-return-await": "error",
    "require-await": "error",
    "no-nested-ternary": "error",
    eqeqeq: "error",
    curly: ["error", "all"],
    "prefer-const": "error",
    "no-var": "error",
    "spaced-comment": ["error", "always"],
    "max-lines": [
      "error",
      { max: 300, skipBlankLines: true, skipComments: true },
    ],
    complexity: ["error", { max: 15 }],
    "max-depth": ["error", { max: 4 }],
  },
});
