import React, { Component } from "react";

export class LifeCylceMtehod extends Component {
  constructor(props) {
    super(props);
    console.log("I am constructor");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("I am getDerivedStateFromProps ");
    return null;
  }

  componentDidMount() {
    console.log("I am componentdidount");
  }
  render() {
    console.log("I am render");
    return (
      <div>
        <h1>Life Cycle Method -Mounting</h1>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifeCylceMtehod;
