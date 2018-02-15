# eslint-config-cbtnuggets

Configuration for setting up the CBT ESLint rules.

## Install

#### Project Install

This script will install and save (as devDependencies) everything that is needed to run our eslint rules in the project that the script is executed:

##### With NPM
```bash
export PKG=eslint-config-cbtnuggets
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm i "$PKG@latest" --save-dev
```

##### With Yarn
```bash
export PKG=eslint-config-cbtnuggets
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D "$PKG@latest"
```

#### Global Install

```bash
export PKG=eslint-config-cbtnuggets
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm i -g "$PKG@latest"
```

## Migration

If migrating from an earlier version, simply running the install script again will install the latest project and all of its peerDependencies.

[Go to Install](https://github.com/cbtnuggets/eslint-config-cbtnuggets#install)

## Project Settings

Create an **.eslintrc** file in the base directory that you want to apply the given rule set.  
Multiple **.eslintrc** can be used if needed.

#### Node (ES6)
```json
{
  "extends": "cbtnuggets/rules/node-es6"
}
```

#### Node (ES6 with strict mode required)
```json
{
  "extends": "cbtnuggets/rules/node-strict"
}
```

#### Node (legacy)
```json
{
  "extends": "cbtnuggets/rules/node"
}
```


#### React
```json
{
  "extends": "cbtnuggets/rules/react"
}
```

## Testing ESLint Setup

For global installs, run something like:
```bash
eslint ./FILE-TO-TEST.js
```

For project level installs, run something like:
```bash
node ./node_modules/eslint/bin/eslint.js ./FILE-TO-TEST.js
```



## Dev Setup

This section outlines setting up a development environment to modify this project (the *"test project"* is the project that will be used to verify the changes to eslint rules)

#### In this project:

Create a link from the eslint-config-cbtnuggets project:
```bash
npm link
```

#### In the test project:

Make sure to remove the **eslint-config-cbtnuggets** project if it is currently installed.

Install all the dependencies in the project to use for testing the eslint (i.e. install eslint and all the plugins).  
Basically install everything listed in **eslint-config-cbtnuggets** **package.json** **peerDependencies**

Example:
```bash    
npm install "eslint"@"^4.17.0" "eslint-plugin-class-property"@"^1.0.1" "eslint-plugin-import"@"^2.8.0" "eslint-plugin-jsx-a11y"@"^6.0.3" "eslint-plugin-react"@"^7.6.1"
```

Link to eslint-config-cbtnuggets project:
```bash
npm link eslint-config-cbtnuggets
```




