# React

Description of what `React` is/provides and the benefits/when to use.

Mostly a view. Also a controller.

## Guidelines

## Avoid keeping state in components

Storing state in components is an anti-pattern because you lose some of the benefits of `React`:
- benefit 1

If your project uses `Redux`, in most situations you should keep your state in the `store`.
If your project doesn't use `Redux`, in most situations you should keep your state in your project's top-level container component.

- avoid creating components that store state e.g. this.state or this.setState() - calculate values from props instead

## Component composition

Smart/Dumb/Container/HoC

- prefer stateless-functional-components for dumb components https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components