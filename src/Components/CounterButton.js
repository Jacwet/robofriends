import React, { Component, PureComponent } from "react";

class CounterButton extends Component{
  constructor() {
    super();
    this.state = {
      count: 0
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
      <h1 className="f1">RoboFriends</h1>
  )
}

}

export default CounterButton;