# Writing a component

- encapsulate all the logic, display etc behaviour and can be placed anywhere without knowing

## DO
 
- Keep track of all major/breaking changes in the README.md


## Naming

NPM vs Bower vs Component

## Entry file

NPM & Bower: use source files containing module.exports or @imports over pre-built distribution files
Component: use pre-built distribution files - store distribution files in ./dist e.g. ./dist/compiled.css

## Versioning

NPM users a `version` key in the `package.json`.
Bower and Component use git tags.
