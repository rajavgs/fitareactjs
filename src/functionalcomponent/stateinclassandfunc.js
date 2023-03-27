import React, { useState } from "react";

function StateInFuncComp() {
  const [showHeader, setShowHeader] = useState("false");

  const showHandler = () => {
    setShowHeader(true);
  };
  return <div>{showHeader}</div>;
}

export default StateInFuncComp;

// class Header extends Component {
//   state = {
//     showHeader: false,
//   };

//   showHandler = () => {
//     this.setState({ showHeader: false });
//   };

//   render() {
//     return <div></div>;
//   }
// }
