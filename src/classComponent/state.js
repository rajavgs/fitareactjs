import React, { Component } from "react";

export class State extends Component {
  constructor(props) {
    console.log("constructor props", props);
    super(props);
    // console.log("param props", props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>count:{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
      </div>
    );
  }
}

export default State;
