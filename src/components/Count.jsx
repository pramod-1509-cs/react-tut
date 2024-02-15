import React, { useState } from "react";

function Count(props) {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
 
  if (typeof props.onCountChange === "function") {
    props.onCountChange(count);
  }

  return (
    <div>
      <h1>Count component</h1>
      {count > 0 ? (
        <p>Count: {count}</p>
      ) : (
        <p>Count is zero</p>
      )}
      <button onClick={incrementCount}>Click here</button>
    </div>
  );
}

export default Count;
