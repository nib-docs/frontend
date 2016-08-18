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
      count: props.initialCount
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        Count: {count}.
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }

}

Counter.defaultProps = {
  initialCount: 0
};

export default Counter;

```

`./test/Counter.jsx`
```javascript

import React from 'react';
import $ from 'react-testutils-query';
import render from 'react-testutils-render';

import chai, {expect} from 'chai';
import jsxChai from 'jsx-chai';

import Counter from '../Counter';

chai.use(jsxChai);

describe('Counter', () => {

  describe('.constructor()', () => {

    it('should have an initial count of 0 when .initialCount is not specified', () => {
      const rendered = render(<Counter/>);
      expect(rendered.component.state).to.have.property('count', 0);
    });

    it('should have an initial count of 100 when .initialCount is specified', () => {
      const rendered = render(<Counter initialCount={100}/>);
      expect(rendered.component.state).to.have.property('count', 100);
    });

  });

  describe('.handleIncrement()', () => {

    it('should increment the count by 1 when called', () => {
      const rendered = render(<Counter/>);
      rendered.component.handleIncrement();
      expect(rendered.component.state).to.have.property('count', 1);
    });

  });

  describe('.render()', () => {

    it('should render the count', () => {

      expect(render(<Counter/>).element).to.deep.equal(
        <div>
          Count: {0}.
          <button onClick={() => {}}>Increment</button>
        </div>
      );

    });

    it('should pass the handler to the button', () => {
      const rendered = render(<Counter/>);
      expect($('button', rendered.element).props.onClick).to.equal(rendered.component.handleIncrement);
    });

  });

});

```

Tooling:

- Use `chai` expect syntax
- use jquery like methods that give good diffs using standard chai methods

## TODO:
- don't bother testing XYZ
- name tests like XYZ
- there's no need to re-render because you can test handler*() and render() methods separately
- need to export undecorated components - could use es7 decorators and babel-remove-decorator-plugin
- Note: Can't test components that make use of `ref`s. We want to avoid them anyway!

## Resources

- http://slides.com/vvo/react-component-unit-testing/
- https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/
