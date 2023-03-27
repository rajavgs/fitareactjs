import React, { createContext, useContext, useState } from "react";

//step: to createt a new context
export const MyContext = createContext();

//provider component
function MyProvider({ children }) {
  const [data, setData] = useState(null);

  function updateData(newData) {
    setData(newData);
  }

  //pass the datat and update the function to the context provider
  const value = { data, updateData };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyProvider;
