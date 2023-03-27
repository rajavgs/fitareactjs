import { useState, useEffect } from "react";

function DateTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);
  return (
    <div className="App">
      <h1>React JS</h1>
      <input type="text" />
      <p>{currentTime}</p>
    </div>
  );
}

export default DateTime;
