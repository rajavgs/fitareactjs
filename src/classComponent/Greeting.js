import React, { Component } from "react";
import Wellcome from "../functionalcomponent/props";

export class Greeting extends Component {
  render() {
    console.log("props", this.props);

    return (
      <div style={{ backgroundColor: "powderblue" }}>
        <h1>Hello, {this.props.name}</h1>
        <p>{this.props.message}</p>
        <p>{this.props.mode}</p>
        <Wellcome />
      </div>
    );
  }
}

export default Greeting;
