# JavaScript style guide

## Formatting

### File encoding 
Always use `UTF-8`.

### Line endings
Always use `LF`.

### Whitespace

Never leave whitespaces characters at the end of a line.

Always leave an empty line at the end of a file.

### Indentation 
Always use `2` `spaces` for indentation.

### Alignment
Never align code using spaces or tabs (it just gets messy and takes time to fix when refactoring).

## Style

- Favor ES6 syntax over ES5
  - use `import`s over `require`
- Favor a functional paradigm over a object-orientated paradigm. 
  - favor pure functions
  - avoid classes unless you have to
  - avoid inheritance at all costs, use composition instead
- [See AirBnB's guide](https://github.com/airbnb/javascript#guide-guide)
  - 17 - no spaces between comments?
  - 19.2 - comma dangle
  - 25.1 - don't use jquery

## Functions


## Classes

- Try and favour pure functions instead

### Properties and methods

- Always use camel case
- Always start with a lower case character
- Never use an underscore, unless it is the first character
- Always prefix private or protected properties and methods with an underscore

## React

- Always use `.jsx`
- Always use `.on<Event>()`
- Always use `.handle<Event>()`

## Fixing linting:

- Fix a bunch of errors with `eslint **/*.js --fix`
- Fix line endings with `crlf2lf . -r`
- Remove BOM signature ` find -name "*.js" ! -path "*/node_modules/*" -exec sed -i -e '1s/^\xEF\xBB\xBF//' {} \;`
