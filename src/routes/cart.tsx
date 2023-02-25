import { useNavigate, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft, FaShoppingCart } from "react-icons/fa";

import { apiGetProducts } from "../api/products";
import { useLoaderData } from "react-router-dom";

import { OrderCart } from "../components/order-cart";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { ReactNode } from "react";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function CartRoute() {
  return (
    <>
      <ShoppingCartProvider>
        <CartHeading />
        <OrderCart />
        <OrderSummary />
      </ShoppingCartProvider>
    </>
  );
}

export function CartHeading() {
  return (
    <>
      <Header />
      <div className="flex justify-center p-5">
        <div className="flex items-center gap-2">
          <AiOutlineShoppingCart className="inline text-3xl text-red-mistermenu xl:text-4xl" />
          <h1 className="text-3xl  font-extrabold">ORDER CART</h1>
        </div>
      </div>
    </>
  );
}

export function Header() {
  const navigate = useNavigate();
  const { cartQuantity } = useShoppingCart();

  return (
    <div className="flex p-5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-3xl" />
        </button>

        <NavLink to="/">
          <h1 className="font-rocksalt text-red-mistermenu">MisterMenu</h1>
        </NavLink>

        <NavLink
          to="/cart"
          className="relative flex h-12 w-12 items-center justify-center rounded-md bg-red-mistermenu transition duration-300 ease-in-out hover:bg-red-700"
        >
          <FaShoppingCart className="text-2xl text-white " />
          <div className="outline-red absolute top-0 right-0 flex h-6 w-6 translate-x-1/4 -translate-y-1/4 items-center justify-center rounded-full bg-gray-400 font-sans text-white outline outline-2">
            {cartQuantity}
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export function OrderSummary() {
  const totalPayment = TotalPayment();
  return (
    <div className="mx-4">
      <div className="my-2 mx-auto flex max-w-6xl rounded-md p-5 pt-5 shadow-inner shadow-slate-300 drop-shadow-md">
        <div className="w-full ">
          <div>
            <h1 className="font-bold text-gray-500">PAYMENT SUMMARY</h1>
          </div>
          <div className="flex w-full justify-between">
            <h1 className="font-bold text-gray-900">TOTAL PAYMENT</h1>
            <p>{totalPayment}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-6xl rounded-md  bg-red-700 p-4">
        <div className="flex w-full items-center justify-center">
          <h1 className="font-bold text-white">CONFIRM ORDER </h1>
        </div>
      </div>
    </div>
  );
}

export function TotalPayment(): ReactNode {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const { cartItems } = useShoppingCart();

  const totalPayment = formatCurrency(
    cartItems.reduce((total, cartItem) => {
      const item = products.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
  );

  return totalPayment;
}
