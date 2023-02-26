import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function FloatingCart() {
  const { cartQuantity } = useShoppingCart();
  return (
    <Link to="/cart">
      <div className="fixed bottom-0 left-0 w-full p-3">
        <div className="static rounded-md bg-red-mistermenu hover:bg-red-900">
          <h1 className="p-3 text-center text-xl text-white">
            Products in Cart ({cartQuantity})
          </h1>
        </div>
      </div>
    </Link>
  );
}
