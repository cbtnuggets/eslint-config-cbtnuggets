# eslint-config-cbtnuggets
Configuration for eslint

This module has been published to the CBT Nuggets NPM Repository.

To use in your node project run:

```
npm install --save-dev eslint-config-cbtnuggets
```

Then, in the same directory as package.json, create an .eslintrc file like this:

```
//For Node:
{
  "extends": "eslint-config-cbtnuggets/rules/node"
}
//For React:
{
  "extends": "eslint-config-cbtnuggets/rules/react"
}
```
