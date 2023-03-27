import React, { Component } from "react";
import Car from "./Car";

class Garage extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    // this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount = () => {
    console.log("I am in");
    this.count++;
    this.forceUpdate();
  };
  render() {
    return (
      <div className="garage">
        {/* <h1>Who lives in my Garagae ?</h1> */}
        <h2>Count:{this.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
        {/* <Car /> */}
      </div>
    );
  }
}

export default Garage;
