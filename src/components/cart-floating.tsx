import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export function FloatingCart() {
  return (
    <Link to="./cart">
      <div className="fixed bottom-10 left-0 w-full px-[900px] drop-shadow-[0_-50px_50px_#E5E7EB] transition-all">
        <div className="static flex justify-center rounded-lg bg-red-mistermenu ">
          <h1 className="flex items-center p-5 text-white">
            <span className="mx-2">
              <FaShoppingCart />
            </span>
            Cart
          </h1>
    <Link to="/cart">
      <div className="fixed bottom-0 left-0 w-full p-3">
        <div className="static rounded-md bg-red-mistermenu hover:bg-red-900">
          <h1 className="p-3 text-center text-xl text-white">
            Products in Cart
          </h1>
        </div>
      </div>
    </Link>
  );
}
