import React, { Component } from "react";
import Greeting from "./Greeting";

//parent A
//Greeting B

export class Parent extends Component {
  render() {
    return (
      <div>
        <Greeting name="Abc" message="Welcome to React class" mode="online" />
        <Greeting name="BCD" message="Welcome to Python class" mode="offline" />
      </div>
    );
  }
}

export default Parent;
