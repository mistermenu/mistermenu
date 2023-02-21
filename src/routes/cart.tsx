import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <header className="flex p-5 shadow-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div>
            <Link to="/">
              {" "}
              <FaChevronLeft className="text-3xl" />
            </Link>
          </div>

          <div>
            <h1 className=" font-sans text-3xl font-extrabold">
              ORDER CART{" "}
              <AiOutlineShoppingCart className="inline text-4xl text-red-mistermenu" />
            </h1>
            <h4 className="text-sm font-semibold text-gray-400">
              MISTERMENU @PELAZA INDONESIA
            </h4>
          </div>

          <div></div>
        </nav>
      </header>
    </>
  );
}

export function CartItems() {
  return (
    <section className="my-10 mx-auto flex max-w-6xl rounded-md border border-gray-300 p-5 pt-8">
      <div>
        <p>ORDER ITEM(S)</p>
      </div>
    </section>
  );
}