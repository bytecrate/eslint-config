# React TypeScript Lint Config

A comprehensive, industry-standard linting and formatting configuration package for JavaScript, TypeScript and React projects.

## Features

- ✅ Ready-to-use ESLint configurations for React and TypeScript
- ✅ Support for ESLint v9's new flat config system
- ✅ Prettier configuration for consistent formatting
- ✅ Accessibility rules included via jsx-a11y
- ✅ Import sorting and organization
- ✅ TypeScript type definitions

## Installation

```bash
# npm
npm install --save-dev @bytecrate/eslint-config

# yarn
yarn add --dev @bytecrate/eslint-config
```

### Installing Peer dependecies

```bash
# npm
npm install --save-dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks globals

# yarn
yarn add --dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks globals
```

## Usage

### ESLint Configuration

Create an `eslint.config.js` OR `eslint.config.mjs` file in your project root:

#### JavaScript Configuration

```javascript
import eslintConfig from "@bytecrate/eslint-config";

export default eslintConfig.eslint.general;
```

#### TypeScript Configuration

```javascript
import eslintConfig from "@bytecrate/eslint-config";

export default eslintConfig.eslint.typescript;
```

#### React Configuration

```javascript
import eslintConfig from "@bytecrate/eslint-config";

export default eslintConfig.eslint.react;
```

### Prettier Configuration

Create a `prettier.config.js` file in your project root:

```javascript
module.exports = require("@bytecrate/eslint-config").prettier;
```

### Package.json Scripts

Add these scripts to your package.json:

```json
{
  "scripts": {
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""
  }
}
```

## Rule Sets

### JavaScript Rules

The JavaScript configuration provides essential rules for JavaScript projects, including:

- General best practices
- Import organization

### TypeScript Rules

The TypeScript configuration builds on the JavaScript rules and adds:

- TypeScript recommended rules
- Import organization specific to TypeScript

### React Rules

The React configuration builds on the TypeScript rules and adds:

- Essential React and React Hooks rules
- Accessibility guidelines

## Customization

You can extend or override any of the provided rules in your project's ESLint configuration:

```javascript
import eslintConfig from "@bytecrate/eslint-config";

// Create a copy of the general config
const config = [...eslintConfig.eslint.general];

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
