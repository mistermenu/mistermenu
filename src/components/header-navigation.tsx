import { Link } from "react-router-dom";

export function HeaderNavigation() {
  return (
    <header>
      <Link to="/">
        <h1 className="p-5 text-center font-rocksalt text-red-mistermenu ">
          MisterMenu
        </h1>
      </Link>
    </header>
  );
}
