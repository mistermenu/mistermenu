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
      <button
        onClick={increment}
        className="m-auto block cursor-pointer rounded-3xl border-0 bg-rose-800 p-2 py-2.5 px-5 text-base	text-white	"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="m-auto block cursor-pointer rounded-3xl border-0 bg-rose-800 p-2 py-2.5 px-5 text-base	text-white	"
      >
        -
      </button>
    </div>
  );
}
