import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export function FloatingCart() {
  return (
    <Link to="./cart">
      <div className="fixed bottom-10 left-0 w-full p-3">
        <div className="static rounded-lg bg-red-mistermenu hover:bg-orange-400">
          <h1 className="p-5 text-center text-white ">Cart</h1>
        </div>
      </div>
    </Link>
  );
}
