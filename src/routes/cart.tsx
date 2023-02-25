import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartItems } from "../components/cart-items";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function CartRoute() {
  const products = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <CartHeading />
      <CartItems />
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

  return (
    <div className="flex p-5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div>
          <button onClick={() => navigate(-1)}>
            <FaChevronLeft className="text-3xl" />
          </button>
        </div>
        <Link to="/">
          <h1 className="font-rocksalt text-red-mistermenu">MisterMenu</h1>
        </Link>
        <button className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-red-mistermenu transition duration-300 ease-in-out hover:bg-orange-400">
          <FaShoppingCart className="text-2xl text-white " />
          <div className="outline-red absolute top-0 right-0 flex h-6 w-6 translate-x-1/4 -translate-y-1/4 items-center justify-center rounded-full bg-gray-400 font-sans text-white outline outline-2">
            3
          </div>
        </button>
      </div>
    </div>
  );
}
