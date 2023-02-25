import { Link } from "react-router-dom";

export function FloatingCart() {
  return (
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
