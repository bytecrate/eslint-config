declare module "react-ts-lint-config" {
  export interface ESLintConfig {
    extends: string[];
    parser: string;
    parserOptions: Record<string, any>;
    plugins: string[];
    rules: Record<string, any>;
    settings: Record<string, any>;
    env: Record<string, boolean>;
  }

  export interface PrettierConfig {
    printWidth: number;
    tabWidth: number;
    useTabs: boolean;
    semi: boolean;
    singleQuote: boolean;
    quoteProps: string;
    jsxSingleQuote: boolean;
    trailingComma: string;
    bracketSpacing: boolean;
    bracketSameLine: boolean;
    arrowParens: string;
    endOfLine: string;
  }

  export const eslint: {
    basic: ESLintConfig;
    strict: ESLintConfig;
  };

  export const prettier: PrettierConfig;
}
