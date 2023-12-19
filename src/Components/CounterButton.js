import React, { Component } from "react";

class CounterButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: 'blue'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true
    }
    return false;
}
  render() {
    console.log('CounterButton');
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}
      >
        <h1 >Count: {this.state.count}</h1>
        <h1 >Color: {this.state.color}</h1>
      </button>
  )
}

}

export default CounterButton;