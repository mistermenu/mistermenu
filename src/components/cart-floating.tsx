import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export function FloatingCart() {
  return (
    <Link to="./cart">
      <div className="fixed bottom-10 left-0 w-full px-[900px] drop-shadow-[0_-50px_50px_#E5E7EB] transition-all">
        <div className="static flex justify-center rounded-lg bg-red-mistermenu ">
          <h1 className="flex items-center p-5 text-white">
            <span className="mx-2">
              <FaShoppingCart />
            </span>
            Products in Cart
          </h1>
        </div>
      </div>
    </Link>
  );
}
