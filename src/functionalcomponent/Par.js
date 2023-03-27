import React, { useState, useCallback } from "react";
import Chld from "../functionalcomponent/Chld";
function Par() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("handleClick executed");
    setCount(count + 1);
  }, [count]);

  console.log("App rendered");
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <Chld />
    </div>
  );
}

export default Par;
