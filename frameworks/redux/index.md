# Redux

Description of what `React` is/provides and the benefits/when to use.

Its a Flux-like architecture.

- the store is the single source of truth for all state in your application
- state can only be updated sequentially by dispatching an action

...making your app more predictable and easier to reason about, test and debug.

Go read the [Motivation](http://redux.js.org/docs/introduction/Motivation.html) and [Three Principles](http://redux.js.org/docs/introduction/ThreePrinciples.html) behind `Redux`.

[Compare to traditional frontend architecture](https://blog.andyet.com/2015/08/06/what-the-flux-lets-redux/)

## Guidelines

### When to use Redux

It might be a good time to start using `Redux` when:

- data/state is rendered by multiple components and may be updated within the app

  > e.g. our quote app renders prospect data on multiple pages and the prospect can change that data

- data/state is retrieved from multiple sources

  > e.g. our quote app sources prospect, product and pricing data from different endpoints

https://medium.com/swlh/the-case-for-flux-379b7d1982c6#92f6


## structure
- by domain - give package example from arhi-sales-web
- selectors
- compose selectors and reducers for each level of the state

## Actions

- [standard](https://github.com/acdlite/flux-standard-action)
- name action constants as an action i.e. with a verb e.g. `SET_SELECTED_PACKAGE`, `CLEAR_SELECTED_PACKAGE`
