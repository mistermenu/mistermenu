import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function HeaderMenu() {
  const { cartQuantity } = useShoppingCart();

  return (
    <div className="flex p-5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div></div>
        <NavLink to="/">
          <h1 className="font-rocksalt text-red-mistermenu">MisterMenu</h1>
        </NavLink>
        <button className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-red-mistermenu transition duration-300 ease-in-out hover:bg-orange-400">
          <FaShoppingCart className="text-2xl text-white " />
          <div className="outline-red absolute top-0 right-0 flex h-6 w-6 translate-x-1/4 -translate-y-1/4 items-center justify-center rounded-full bg-gray-400 font-sans text-white outline outline-2">
            {cartQuantity}
          </div>
        </button>
      </div>
    </div>
  );
}
