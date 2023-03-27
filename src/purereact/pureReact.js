import React from "react";
import ReactDOM from "react-dom";

function MyComponent() {
  const header = React.createElement("h1", null, "Hello-World");
  const input = React.createElement("input", { type: "text" });
  let b = 27;
  return (
    <div>
      {header}
      {input}
      {14 + 13}
    </div>
  );
}

export default MyComponent;

// ReactDOM.render(<MyComponent/>, document.getElementById('root'))
