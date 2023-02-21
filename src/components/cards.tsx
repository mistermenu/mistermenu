import { apiGetProductImageById } from "../api/products";
import { Counter } from "./button";

export function Cards(props) {
  return (
    <div className="h-96 w-72 overflow-hidden rounded-xl bg-rose-50 shadow-2xl">
      <img
        className="h-52 w-full object-cover"
        src={props.productImageId}
        alt={props.name}
      />
      <h2 className="m-5 text-2xl">{props.name}</h2>
      <p className="m-5 my-0 mx-5 mb-5	text-xl">{props.description}</p>
      <Counter>Add to Cart</Counter>
    </div>
  );
}
