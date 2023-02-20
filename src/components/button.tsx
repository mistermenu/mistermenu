import { useState } from "react";
import { apiGetProductsById } from "../api/products";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <p>
        <apiGetProductsById />: {counter}
      </p>
      <button onClick={increment} className="bg-teal-500 p-2">
        +
      </button>
      <button onClick={decrement} className="bg-teal-500 p-2">
        -
      </button>
    </div>
  );
}
