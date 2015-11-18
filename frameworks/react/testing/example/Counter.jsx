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