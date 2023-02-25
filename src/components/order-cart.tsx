import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./cart-item";

export function OrderCart() {
  const { cartItems } = useShoppingCart();

  return (
    <div className="my-4 mx-auto flex max-w-6xl flex-col rounded-md border border-gray-300 p-5 pt-8">
      {cartItems &&
        cartItems.map((item) => <CartItem key={item.id} {...item} />)}
    </div>
  );
}
