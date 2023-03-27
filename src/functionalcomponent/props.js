import React from "react";
import { Greeting } from "./Greeting";

export default function Wellcome() {
  return (
    <div>
      <Greeting name="Kumar" age={28} occupation="software developer" />
    </div>
  );
}
