# eslint-config-cbtnuggets

Configuration for setting up the CBT ESLint rules

This module has been published to the CBT Nuggets NPM Repository.

## Installing ESLint and eslint-config-cbtnuggets in a project

This script will install and save (as devDependencie) everything that is needed to run our eslint rules in the project that the script is executed:
```bash
export PKG=eslint-config-cbtnuggets
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm i "$PKG@latest" --save-dev
```

### Installing ESLint and eslint-config-cbtnuggets Globally

```bash
export PKG=eslint-config-cbtnuggets
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm i -g "$PKG@latest"
```

## To us in your project:

Create an **.eslintrc** file in the base directory that you want to apply the given rule set.

### For Node (ES6)
```
{
  "extends": "cbtnuggets/rules/node-es6"
}
```

### For React
```
{
  "extends": "cbtnuggets/rules/react"
}
```

### For Node (legacy)
```
{
  "extends": "cbtnuggets/rules/node"
}
```

## Testing your setup

### Global Install

```bash
eslint ./FILE-TO-TEST.js
```

### Local (Project) Install

```bash
eslint ./node_modules/eslint/bin/eslint.js ./FILE-TO-TEST.js
```



## Dev Setup
Setting up a development environment to modify this project (the "test project" being the project that will be used to verify the changes to eslint rules)

### In this project:

Create a link from the eslint-config-cbtnuggets project:
```bash
npm link
```

### In the test project:

Make sure to remove the *eslint-config-cbtnuggets* project if it is currently installed.

Install all the dependencies in the project to use for testing the eslint (i.e. install all the plugins)
```bash    
npm install "eslint"@"^3.2.2" "eslint-plugin-class-property"@"^1.0.1" "eslint-plugin-import"@"^1.13.0" "eslint-plugin-jsx-a11y"@"^2.1.0" "eslint-plugin-react"@"^6.0.0"
```

Link to eslint-config-cbtnuggets project:

```bash
npm link eslint-config-cbtnuggets
```




