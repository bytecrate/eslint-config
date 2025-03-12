declare module "@bytecrate/eslint-config" {
  export interface ESLintConfig {
    extends?: string[];
    parser?: string;
    parserOptions?: Record<string, any>;
    plugins?: Record<string, any>;
    rules?: Record<string, any>;
    settings?: Record<string, any>;
    env?: Record<string, boolean>;
    languageOptions?: Record<string, any>;
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
    general: ESLintConfig[];
    typescript: ESLintConfig;
    react: ESLintConfig;
  };

  export const prettier: PrettierConfig;
}
