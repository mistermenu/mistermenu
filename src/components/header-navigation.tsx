import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function HeaderNavigation() {
  const { cartQuantity } = useShoppingCart();

  return (
    <header className="flex-1 border-black">
      <div className="p-5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div></div>
          <Link to="/">
            <h1 className="font-rocksalt text-red-mistermenu">MisterMenu</h1>
          </Link>
          <button className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-red-mistermenu transition duration-300 ease-in-out hover:bg-orange-400">
            <FaShoppingCart className="text-2xl text-white " />
            <div className="outline-red absolute top-0 right-0 flex h-6 w-6 translate-x-1/4 -translate-y-1/4 items-center justify-center rounded-full bg-gray-400 font-sans text-white outline outline-2">
              {cartQuantity}
            </div>
          </button>
        </div>
      </div>

      <div className="flex w-full justify-center bg-slate-400 py-4">
        <div className="border-1 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
          <Link to="/recomendation">
            <img className="p-3" src="/assets/images/Rekomendasi.png" alt="" />
            <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
              RECOMMENDATION
            </h1>
          </Link>
        </div>
        <div className="border-1 border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px] ">
          <Link to="/chicken">
            <img className="p-3" src="/assets/images/AYAM.png" alt="" />
            <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
              CHICKEN
            </h1>
          </Link>
        </div>
        <div className="border-1 border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
          <Link to="/porridge">
            <img className="p-3" src="/assets/images/BUBUR.png" alt="" />
            <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
              PORRIDGE
            </h1>
          </Link>
        </div>
        <div className="border-1 border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
          <Link to="/seafood">
            <img className="p-3" src="/assets/images/SEAFOOD.png" alt="" />
            <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
              SEAFOOD
            </h1>
          </Link>
        </div>
        <div className="border-1 border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
          <Link to="/soup">
            <img className="p-3" src="/assets/images/SUP.png" alt="" />
            <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
              SOUP
            </h1>
          </Link>
        </div>
        <div className="border-1 border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
          <Link to="/drink">
            <img className="p-3" src="/assets/images/MINUMAN.png" alt="" />
            <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
              DRINK
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
