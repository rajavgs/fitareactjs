import React, { useRef, useEffect } from "react";

function Ref() {
  const titleRef = useRef();

  useEffect(function () {
    setTimeout(() => {
      titleRef.current.textContent = "Update Text";
    }, 5000);
  }, []);

  return <div ref={titleRef}>Original Title</div>;
}

export default Ref;
