import { apiGetProductImageById } from "../api/products";
import { Counter } from "./button";

export function Cards() {
  return (
    <div className="h-96 w-72 overflow-hidden rounded-xl bg-rose-50 shadow-2xl">
      <img
        className="h-52 w-full object-cover"
        src={products.image}
        alt={products.name}
      />
      <h2 className="m-5 text-2xl">{}</h2>
      <p className="m-5 my-0 mx-5 mb-5	text-xl">{products.name}</p>
      <Counter>Add to Cart</Counter>
    </div>
  );
}
