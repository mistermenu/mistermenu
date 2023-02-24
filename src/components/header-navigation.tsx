import { Link } from "react-router-dom";

export function HeaderNavigation() {
  return (
    <header>
      <div className="flex justify-center">
        <div className=" w-36">
          <Link to="/">
            <h1 className="p-5 text-center font-rocksalt text-red-mistermenu ">
              MisterMenu
            </h1>
          </Link>
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
