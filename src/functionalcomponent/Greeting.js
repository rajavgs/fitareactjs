import React from "react";

const Greeting = (props) => {
  return (
    <div>
      <p>
        Hello, I am {props.name}, a{props.age} years old {props.occupation}
      </p>
    </div>
  );
};

export { Greeting };

// function Greeting() {
//   return (
//     <div>
//       <p>
//         Hello, I am {props.name}, a{props.age} years old {props.occupation}
//       </p>
//     </div>
//   );
// }

// export { Greeting };
