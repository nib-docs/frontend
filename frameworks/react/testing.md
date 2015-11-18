# Testing

Traditionally, testing view code on the frontend requires running tests in a real(-ish) browser like PhantomJS.
Running tests in a real(-ish) browser is painful because:

- spinning up a real(-ish) browser is slow
- the DOM is one massive global state and one broken or incomplete test can affect all of the other tests
- debugging tests in a real(-ish) browser is slow and painful

React abstracts the DOM away from the developer and React Components can be tested without a browser. Browserless tests
run much faster than traditional tests, they don't require a global DOM and debugging view code is the same as
debugging any other code in Node.JS.

We use [`shallow rendering`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) for testing
React Components. Shallow rendering renders a component "one level deep" and allows us to make assertions about the
result of a Component's `render()` method.

## Example

`./Counter.jsx`
```javascript

import React from 'react';

class Counter extends React.Component {

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      times: props.initialTimes
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      times: this.state.times + 1
    });
  }

  render() {
    const {times} = this.props;
    return (
      <div>
        Count: {times}.
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }

}

Counter.defaultProps = {
  initialTimes: 0
};

export default Counter;

```

`./test/Counter.jsx`
```javascript

import {createRenderer} from 'react';
import {expect} from 'chai';
import Counter from '../Counter';

function render(element) {
  const renderer = createRenderer().render(element);
  return renderer.getRenderOutput();
}

describe('Counter', () => {

  describe('render()', () => {

  });

});

```

- use shallow component testing
- can't test any components with `ref`s
- need to export undecorated components - could use es7 decorators and babel-remove-decorator-plugin
- mocha+chai+jsx-chai


## What

1. Given properties and state, the structure of our rendered tree is correct.
2. Given a rendered tree, we should be able to change the state

## Where

## How

Shallow rendering

Note: Can't test components that make use of `ref`s. We want to avoid them anyway!


## Resources

- http://slides.com/vvo/react-component-unit-testing/
- https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/
