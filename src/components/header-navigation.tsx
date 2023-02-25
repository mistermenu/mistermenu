import { NavLink } from "react-router-dom";

export function HeaderNavigation() {
  const activeStyle = "bg-red-200 border-red-200";

  return (
    <header>
      <div className="flex w-full overflow-x-auto bg-slate-200 py-8 outline-violet-400 lg:justify-center">
        <div>
          <NavLink to="/recomendation">
            {({ isActive }) => (
              <div className="border-1 h-46 w-40 border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img
                    className="p-3"
                    src="/assets/images/Rekomendasi.png"
                    alt=""
                  />
                  <h1 className="text-lg font-semibold text-gray-600">
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
              <div className="border-1 h-46 w-40 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img className="p-3" src="/assets/images/AYAM.png" alt="" />
                  <h1 className="text-lg font-semibold text-gray-600">
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
              <div className="h-46 border-1 w-40 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img className="p-3" src="/assets/images/BUBUR.png" alt="" />
                  <h1 className="text-lg font-semibold text-gray-600">
                    PORRIDGE
                  </h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>
        <NavLink to="/seafood">
          {({ isActive }) => (
            <div className="h-46 border-1 w-40 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
              <div className={isActive ? activeStyle : undefined}>
                <img className="p-3" src="/assets/images/SEAFOOD.png" alt="" />
                <h1 className="text-lg font-semibold text-gray-600">SEAFOOD</h1>
              </div>
            </div>
          )}
        </NavLink>
        <div>
          <NavLink to="/soup">
            {({ isActive }) => (
              <div className="h-46 border-1 w-40 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img className="p-3" src="/assets/images/SUP.png" alt="" />
                  <h1 className="text-lg font-semibold text-gray-600">SOUP</h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/drink">
            {({ isActive }) => (
              <div className="h-46 border-1 w-40 border-gray-200 bg-white  text-center shadow-2xl hover:border-red-200 hover:bg-red-200 md:rounded-sm md:border-[3px]">
                <div className={isActive ? activeStyle : undefined}>
                  <img
                    className="p-3"
                    src="/assets/images/MINUMAN.png"
                    alt=""
                  />
                  <h1 className="text-lg font-semibold text-gray-600">DRINK</h1>
                </div>
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
