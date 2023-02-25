import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export function FloatingCart() {
  return (
    <Link to="./cart">
      <div className="fixed left-2 bottom-2 w-49/50 rounded-lg bg-red-mistermenu opacity-50 hover:opacity-100">
        <h1 className="p-5 text-center text-white ">Cart</h1>
      </div>
    </Link>
  );
}
