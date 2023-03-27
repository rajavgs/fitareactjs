import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function CompA() {
  const { updateData } = useContext(MyContext);

  function handleClick() {
    const newData = "Hellow from componentA";
    updateData(newData);
  }
  return (
    <div>
      <button onClick={handleClick}>Update data</button>
    </div>
  );
}

export default CompA;
