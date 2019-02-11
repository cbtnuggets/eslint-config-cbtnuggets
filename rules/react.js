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
        'quotes': [2, 'single'],
        'strict': [2, 'never'],
        'indent': 2,
        'no-trailing-spaces': 2,
        'comma-dangle': 2,
        'spaced-comment': 2,
        'no-use-before-define': 2,
        'jsx-a11y/anchor-is-valid': 2,
        'jsx-a11y/label-has-for': 2,
        'new-cap': 2,
        'import/no-named-as-default': 'never'
    }
};