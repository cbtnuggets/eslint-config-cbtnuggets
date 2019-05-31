module.exports = {
    env: {
        browser: true
    },
    extends: [
        './shared/best-practices',
        './shared/errors',
        './shared/es6',
        './shared/imports',
        './shared/node',
        './shared/react-a11y',
        './shared/react',
        './shared/strict',
        './shared/style',
        './shared/variables'
    ].map(require.resolve),
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        },
        ecmaVersion: 7,
        sourceType: 'module'
    },
    plugins: [
        'class-property'
    ],
    rules: {
        'quotes': [1, 'single'],
        'strict': [1, 'never'],
        'indent': 1,
        'no-trailing-spaces': 1,
        'arrow-body-style': 'off',
        'camelcase': 'warn',
        'import/prefer-default-export': 'warn',
        'import/no-named-as-default': 'warn',
        'no-mixed-operators': 'warn',
        'consistent-return': 0,
        'comma-dangle': ['warn', 'never'],
        'spaced-comment': 1,
        'no-use-before-define': 1,
        'jsx-a11y/anchor-is-valid': 1,
        'jsx-a11y/label-has-for': 1,
        'new-cap': 1
    }
};
