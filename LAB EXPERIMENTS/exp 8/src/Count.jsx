import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h1>React Counter</h1>
      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)} className="btn">
          Increment (+)
        </button>

        <button onClick={() => setCount(count - 1)} className="btn">
          Decrement (-)
        </button>

        <button onClick={() => setCount(0)} className="btn">
          Reset
        </button>
      </div>
    </div>
  )
}

export default Count
