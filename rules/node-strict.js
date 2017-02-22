module.exports = {
    env: {
        node: true
    },
    extends: [
        './shared/best-practices',
        './shared/errors',
        './shared/es6',
        './shared/node',
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
        'quotes': [2, 'single'],
        'strict': ['error', 'global'],
        'indent': 0,
        'no-trailing-spaces': 0,
        'import/prefer-default-export': 0,
        'id-length': 0,
        'comma-dangle': 0,
        'new-cap': 0,
        'func-names': 0,
        'consistent-return': 0,
        'no-use-before-define': 0,
        'no-debugger': 0,
        'spaced-comment': 0,
        'no-console': 0,
        'no-alert': 0
    }
};