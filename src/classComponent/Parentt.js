import React, { Component } from "react";
import ChildComp from "./ChildComp";
export class Parentt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChildComp: true,
    };
  }

  toggleChildComponent = () => {
    this.setState((prevState) => ({
      showChildComp: !prevState.showChildComp,
    }));
  };
  render() {
    return (
      <div>
        {this.state.showChildComp && <ChildComp />}
        <button onClick={this.toggleChildComponent}>
          {this.state.showChildComp ? "Hide" : "show"}
          ChildComp
        </button>
        ;
      </div>
    );
  }
}

export default Parentt;
