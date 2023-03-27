import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function CompC() {
  const { data } = useContext(MyContext);
  return <div>{data}</div>;
}

export default CompC;
