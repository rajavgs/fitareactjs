import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Garage from "./classComponent/Garage";
import DateTime from "./datetime";
import MyComponent from "./purereact/pureReact";
import FuncCar from "./functionalcomponent/funcCar";
// import State from "./classComponent/state";
// import Parent from "./classComponent/Props";
// import State from "./functionalcomponent/State";
import Wellcome from "./functionalcomponent/props";
import LifeCylceMtehod from "./classComponent/LifeCylceMtehod";
import LifeCycleMethodUpdate from "./classComponent/LifeCycleMethodUpdate";
import LifeCycleMethodUnMount from "./classComponent/LifeCyleMethodUnMount";
import Parentt from "./classComponent/Parentt";
import StateInFuncComp from "./functionalcomponent/stateinclassandfunc";
import CompDidMount from "./functionalcomponent/CompDidMount";
import MyProvider from "./functionalcomponent/MyContext";
import CompA from "./functionalcomponent/compA";
import CompC from "./functionalcomponent/CompC";
import Ref from "./functionalcomponent/Ref";
import RefRerender from "./functionalcomponent/RefRerender";
import Par from "./functionalcomponent/Par";
import Memo from "./functionalcomponent/Memo";
import DemoForm from "./functionalcomponent/demoForm";
class App extends Component {
  render() {
    return (
      <>
        {/* <MyComponent /> */}
        {/* <Garage /> */}
        {/* <FuncCar /> */}
        {/* <State /> */}
        {/* <Parent />
      <Wellcome /> */}
        {/* <LifeCylceMtehod /> */}
        {/* <LifeCycleMethodUpdate /> */}
        {/* <LifeCycleMethodUnMount /> */}
        {/* <Parentt /> */}
        {/* <StateInFuncComp /> */}
        {/* <CompDidMount /> */}
        {/* <MyProvider>
          <CompA />
          <CompC />
        </MyProvider> */}
        {/* <Ref />
        <RefRerender /> */}
        {/* <Par /> */}
        {/* <Memo /> */}
        <DemoForm />
      </>
    );
  }
}
export default App;
