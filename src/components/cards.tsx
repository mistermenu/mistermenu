import { apiGetProductImageById } from "../api/products";
import { Counter } from "./button";

export function Cards(props) {
  return (
    <div className="h-96 w-72 overflow-hidden rounded-xl bg-rose-50 shadow-2xl">
      <img src={props.productImageId} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Counter>Add to Cart</Counter>
    </div>
  );
}
