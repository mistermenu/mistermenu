import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./cart-item";

export function OrderCart() {
  const { cartItems } = useShoppingCart();

  return (
    <div className="my-4 mx-4 flex max-w-6xl flex-col rounded-md border border-gray-300 p-5 pt-8 xl:mx-auto">
      <div>
        <h1 className="font-LIGHT mb-5 font-newscycle text-2xl text-gray-500">
          ORDER ITEM(S)
        </h1>
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
