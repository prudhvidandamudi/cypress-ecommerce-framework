import pluginCypress from 'eslint-plugin-cypress/flat';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import pluginPrettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';

export default [
  pluginCypress.configs.recommended,
  {
    files: ['**/*.ts'], 
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        module: 'esnext' 
      }
    },
    plugins: {
      '@typescript-eslint': pluginTypescript,
      cypress: pluginCypress,
      prettier: pluginPrettier
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',
      
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      
      // General
      'no-unused-vars': 'off',
      'prefer-const': 'error',
      'no-console': 'warn'
    }
  }
];