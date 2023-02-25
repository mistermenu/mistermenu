import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function HeaderNavigation() {
  const { cartQuantity } = useShoppingCart();
  const activeStyle = "bg-red-200 border-red-200";

  return (
    <header>
      <div className="flex p-5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div></div>
          <NavLink to="/">
            <h1 className="font-rocksalt text-red-mistermenu">MisterMenu</h1>
          </NavLink>
          <button className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-red-mistermenu transition duration-300 ease-in-out hover:bg-orange-400">
            <FaShoppingCart className="text-2xl text-white " />
            <div className="outline-red absolute top-0 right-0 flex h-6 w-6 translate-x-1/4 -translate-y-1/4 items-center justify-center rounded-full bg-gray-400 font-sans text-white outline outline-2">
              {cartQuantity}
            </div>
          </button>
        </div>
      </div>

      <div className="flex w-full justify-center overflow-x-auto bg-slate-400 py-4 ">
        <div>
          <NavLink to="/recomendation">
            {({ isActive }) => (
              <div className="border-1 border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img
                    className="p-3"
                    src="/assets/images/Rekomendasi.png"
                    alt=""
                  />
                  <h1 className="overflow-x-auto text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
                    RECOMMENDATION
                  </h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>

        <div>
          <NavLink to="/chicken">
            {({ isActive }) => (
              <div className="border-1 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img className="p-3" src="/assets/images/AYAM.png" alt="" />
                  <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
                    CHICKEN
                  </h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/porridge">
            {({ isActive }) => (
              <div className="border-1 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img className="p-3" src="/assets/images/BUBUR.png" alt="" />
                  <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
                    PORRIDGE
                  </h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/seafood">
            {({ isActive }) => (
              <div className="border-1 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img
                    className="p-3"
                    src="/assets/images/SEAFOOD.png"
                    alt=""
                  />
                  <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
                    SEAFOOD
                  </h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/soup">
            {({ isActive }) => (
              <div className="border-1 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img className="p-3" src="/assets/images/SUP.png" alt="" />
                  <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
                    SOUP
                  </h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/drink">
            {({ isActive }) => (
              <div className="border-1 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img
                    className="p-3"
                    src="/assets/images/MINUMAN.png"
                    alt=""
                  />
                  <h1 className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base lg:text-lg">
                    DRINK
                  </h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
