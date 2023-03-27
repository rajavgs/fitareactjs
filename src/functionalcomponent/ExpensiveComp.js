import React, { useMemo } from "react";

function ExpensiveComp({ number }) {
  console.log("Rendering expensoveComponent with number", number);

  const expensiveValue = useMemo(() => {
    console.log("computing expsenvie value");
    let res = 0;
    for (let i = 0; i < 10000000; i++) {
      res += i;
    }
    return XPathResult;
  }, [number]);

  return <div>ExpensiveComp {expensiveValue}</div>;
}

export default ExpensiveComp;
