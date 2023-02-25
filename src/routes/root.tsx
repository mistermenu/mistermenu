import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { HeaderNavigation } from "../components/header-navigation";

import { FloatingCart } from "../components/cart-floating";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { HeaderMenu } from "../components/header-menu";

export function RootRoute() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <ShoppingCartProvider>
      <div className="bg-white">
        <HeaderMenu />
        <HeaderNavigation />

        {isLoading && (
          <main className="flex items-center justify-center p-10">
            <FaSpinner className="animate-spin text-4xl" />
          </main>
        )}

        {!isLoading && (
          <main>
            <Outlet />
          </main>
        )}

        <footer className="bg-gray-200 p-5 pb-24 text-center font-newscycle font-bold text-black">
          <FloatingCart />
          <p>
            <span>© Made with ❤️ by </span>
            <span className="tracking-widest">MisterMenu</span>
            <span className="bg-gradient-to-b from-violet-200 to-violet-800 bg-clip-text text-transparent">
              .AI
            </span>
          </p>
        </footer>

        <ScrollRestoration />
      </div>
    </ShoppingCartProvider>
  );
}
