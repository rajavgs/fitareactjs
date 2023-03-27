import React from "react";

function FuncCar() {
  let count = 0;

  let incrementCount = () => {
    console.log("I am in");
    count++;
  };

  return (
    <div>
      <h2>I am car!</h2>
      <h2>Count:{count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default FuncCar;
