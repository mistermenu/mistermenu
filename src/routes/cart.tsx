import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    <header className="flex p-5">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-3xl" />
        </button>

        <Link to={"/"}>
          <h1 className=" font-rocksalt   text-red-mistermenu ">MisterMenu </h1>
        </Link>

        <div></div>
      </nav>
    </header>
  );
}

export function CartItems() {
  return (
    <section className="my-4 mx-auto flex max-w-6xl rounded-md border border-gray-300 p-5 pt-8">
      <div>
        <p>ORDER ITEM(S)</p>
      </div>
    </section>
  );
}
