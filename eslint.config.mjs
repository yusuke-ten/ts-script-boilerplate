// @ts-check
import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    name: 'Ignore dist',
    ignores: ['dist'],
  },
  {
    name: 'Apply globals',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  { name: 'ESLint recommended', ...eslint.configs.recommended },
  tseslint.configs.recommended,
  {
    name: 'Unused imports',
    plugins: { 'unused-imports': unusedImports },
    rules: {
      'unused-imports/no-unused-imports': 1,

      'unused-imports/no-unused-vars': [
        0,
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    name: 'Perfectionist',
    extends: [perfectionist.configs['recommended-natural']],
  },
  {
    name: 'No explicit any',
    rules: {
      '@typescript-eslint/no-explicit-any': 1,
    },
  },
  {
    name: 'Prettier',
    extends: [prettierConfig],
  },
)
