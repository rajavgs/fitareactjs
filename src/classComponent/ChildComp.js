import React, { Component } from "react";

export class ChildComp extends Component {
  componentWillUnmount() {
    console.log("Child Component is unmounting");
  }
  render() {
    return <div>ChildComp</div>;
  }
}

export default ChildComp;
