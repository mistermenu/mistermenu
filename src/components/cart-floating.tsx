import { Link } from "react-router-dom";

export function FloatingCart() {
  return (
    <Link to="./cart">
      <div className="fixed bottom-0 left-0 w-full p-3">
        <div className="static rounded-lg bg-red-mistermenu opacity-50 hover:opacity-100">
          <h1 className="p-5 text-center text-white ">Cart</h1>
        </div>
      </div>
    </Link>
  );
}
