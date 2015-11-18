import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
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
