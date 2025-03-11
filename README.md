# React TypeScript Lint Config

A comprehensive, industry-standard linting and formatting configuration package for React TypeScript projects.

## Features

- ✅ Ready-to-use ESLint configurations for React and TypeScript
- ✅ Support for ESLint v9's new flat config system
- ✅ Basic and strict rule sets to fit different project needs
- ✅ Prettier configuration for consistent formatting
- ✅ Accessibility rules included via jsx-a11y
- ✅ Import sorting and organization
- ✅ TypeScript type definitions

## Installation

```bash
# npm
npm install --save-dev react-ts-lint-config eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks globals

# yarn
yarn add --dev react-ts-lint-config eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks globals
```

## Usage

### Recommended

### ESLint v9 Configuration

Create an `eslint.config.js` file in your project root:

#### Basic Configuration

```javascript
import reactTsLintConfig from "react-ts-lint-config";

export default reactTsLintConfig.eslint.basic;
```

#### Strict Configuration

```javascript
import reactTsLintConfig from "react-ts-lint-config";

export default reactTsLintConfig.eslint.strict;
```

### Legacy

### ESLint Configuration

Create an `.eslintrc.js` file in your project root:

#### Basic Configuration

```javascript
module.exports = {
  extends: require("react-ts-lint-config").eslint.basic,
};
```

#### Strict Configuration

```javascript
module.exports = {
  extends: require("react-ts-lint-config").eslint.strict,
};
```

### Prettier Configuration

Create a `prettier.config.js` file in your project root:

```javascript
module.exports = require("react-ts-lint-config").prettier;
```

### Package.json Scripts

Add these scripts to your package.json:

```json
{
  "scripts": {
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,scss,md}\""
  }
}
```

## Rule Sets

### Basic Rules

The basic configuration provides a good balance between code quality and flexibility. It includes:

- Essential React and React Hooks rules
- TypeScript recommended rules with some relaxed constraints
- Import organization
- Accessibility guidelines
- General best practices

### Strict Rules

The strict configuration builds on the basic set but adds:

- Stricter React patterns enforcement
- Stronger TypeScript type safety
- Naming conventions for TypeScript constructs
- Code complexity limitations
- More rigid import requirements

## Customization

You can extend or override any of the provided rules in your project's ESLint configuration:

### Recommended

```javascript
import reactTsLintConfig from "react-ts-lint-config";

// Create a copy of the basic config
const config = [...reactTsLintConfig.eslint.basic];

// Add your own configuration
config.push({
  rules: {
    // Your custom rules here
    "no-console": "off",
  },
});

export default config;
```

### Legacy

```javascript
import reactTsLintConfig from "react-ts-lint-config";

// Create a copy of the basic config
const config = [...reactTsLintConfig.eslint.basic];

// Add your own configuration
config.push({
  rules: {
    // Your custom rules here
    "no-console": "off",
  },
});

export default config;
```

## License

MIT
