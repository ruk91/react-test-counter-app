import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0)

  const increment = () => {
    // setCount((prev) => prev + 1)
    setCount(count + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const switchSigns = () => {
    setCount((prev) => prev * -1)
  }

  return (
    <div>
      <h1>Count: <h3>{count}</h3>
      </h1>
      <button onCLick={increment}>Increment</button>
      <button onCLick={decrement}>Decrement</button>
      <button onCLick={reset}>Reset</button>
      <button onCLick={switchSigns}>Switch Signs</button>
    </div>
  );
}

export default Counter;
