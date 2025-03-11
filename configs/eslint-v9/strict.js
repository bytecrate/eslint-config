const basic = require("./basic");
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

// Enhanced version of rules from basic config
const enhanceRules = (configObject, strictRules) => {
  const newConfig = deepClone(configObject);
  if (newConfig.rules) {
    newConfig.rules = { ...newConfig.rules, ...strictRules };
  }
  return newConfig;
};

// Create a copy of basic configs to build upon
const strictConfigs = basic.map((config) => deepClone(config));

// Find and enhance TypeScript config
const tsConfigIndex = strictConfigs.findIndex(
  (config) => config.plugins && config.plugins["@typescript-eslint"]
);
if (tsConfigIndex >= 0) {
  strictConfigs[tsConfigIndex] = enhanceRules(strictConfigs[tsConfigIndex], {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-non-null-assertion": "error",
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
  });
}

// Find and enhance React config
const reactConfigIndex = strictConfigs.findIndex(
  (config) => config.plugins && config.plugins["react"]
);
if (reactConfigIndex >= 0) {
  strictConfigs[reactConfigIndex] = enhanceRules(
    strictConfigs[reactConfigIndex],
    {
      "react/jsx-key": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/self-closing-comp": "error",
      "react/no-array-index-key": "error",
    }
  );
}

// Find and enhance React Hooks config
const hooksConfigIndex = strictConfigs.findIndex(
  (config) => config.plugins && config.plugins["react-hooks"]
);
if (hooksConfigIndex >= 0) {
  strictConfigs[hooksConfigIndex] = enhanceRules(
    strictConfigs[hooksConfigIndex],
    {
      "react-hooks/exhaustive-deps": "error",
    }
  );
}

// Find and enhance Import config
const importConfigIndex = strictConfigs.findIndex(
  (config) => config.plugins && config.plugins["import"]
);
if (importConfigIndex >= 0) {
  strictConfigs[importConfigIndex] = enhanceRules(
    strictConfigs[importConfigIndex],
    {
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
    }
  );
}

// Find and enhance general rules config
const generalConfigIndex = strictConfigs.findIndex(
  (config) => !config.plugins && config.rules && config.rules["eqeqeq"]
);
if (generalConfigIndex >= 0) {
  strictConfigs[generalConfigIndex] = enhanceRules(
    strictConfigs[generalConfigIndex],
    {
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
    }
  );
}

// Add any additional configs specific to strict mode
strictConfigs.push({
  rules: {
    "consistent-return": "error",
    "default-case": "error",
    "no-fallthrough": "error",
  },
});

module.exports = strictConfigs;
