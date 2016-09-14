# Testing

Redux actions and reducers can be tested in nodejs/mocha.

use `babel-plugin-rewire` to mock functions (e.g. your api) in your actions and selectors

e.g.

```js
rewire.__set__('selected', {
  getProductIds() {
    return [33];
  }
});
```
