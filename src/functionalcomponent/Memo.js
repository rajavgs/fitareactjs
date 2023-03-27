import React, { useState, useMemo } from "react";

function Memo() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial Of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
      {/* {inc} */}
    </div>
  );
}

export default Memo;

function factorialOf(n) {
  console.log("fac is called");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
