module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'import/no-extraneous-dependencies': 'warn',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'react/function-component-definition': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error',
            { markupOnly: true, ignoreAttribute: ['data-testid'] },
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        }],
};
