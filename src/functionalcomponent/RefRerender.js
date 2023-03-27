import React, { useState, useEffect, useRef } from "react";

function RefRerender() {
  const [inputValue, setInputValue] = useState("");
  //   const [count, setCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  //   useEffect(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, [inputValue]);

  console.log("App re-rendered");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      {/* <h1>Render count: {count}</h1> */}
    </div>
  );
}

export default RefRerender;

// function Greeting(name, callback){
//     console.log("Hello", name)
//     callback()
// }

// function sayGoodBye(){
//     console.log("Goodbye!");
// }

// Greeting("Kumar", sayGoodBye)
// useCallback(callback, dependecise);
