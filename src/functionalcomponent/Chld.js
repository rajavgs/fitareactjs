import React from "react";

function Chld() {
  console.log("Child component rendered");
  return <div>Chld component</div>;
}

export default React.memo(Chld);
