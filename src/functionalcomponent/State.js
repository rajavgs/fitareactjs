import React, { useState } from "react";

export default function State(props) {
  const [state, setState] = useState(0);
  return (
    <div>
      <p>count:{state}</p>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button>
    </div>
  );
}
