import React, { Component } from "react";

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;
