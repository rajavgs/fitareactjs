import React, { Component } from "react";

export class LifeCycleMethodUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("I am constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("I am getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("I am componentdidount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("I am shouldcomponentUpdate");
    // if (this.state.count === nextState.count) {
    //   return true;
    // }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("I am getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("I am componentdid update");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("I am render");
    return (
      <div>
        <h2>LifeCycleMethod - Update</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Incrrement</button>
      </div>
    );
  }
}

export default LifeCycleMethodUpdate;
