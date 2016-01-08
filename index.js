module.exports = {
  'extends': [
    'eslint-config-cbtnuggets/rules/node',
    'eslint-config-cbtnuggets/rules/react',
  ].map(require.resolve),
  rules: {}
};