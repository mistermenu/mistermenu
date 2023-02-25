import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { HeaderNavigation } from "../components/header-navigation";

import { FloatingCart } from "../components/cart-floating";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export function RootRoute() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <ShoppingCartProvider>
      <div className="bg-white">
        <HeaderNavigation />
        {isLoading && (
          <main className="flex min-h-[754px] items-center justify-center p-10">
            <FaSpinner className="animate-spin text-4xl" />
          </main>
        )}
        {!isLoading && (
          <main className="min-h-[730px] flex-col">
            <Outlet />
          </main>
        )}
        <footer className=" bg-gray-200 p-2	text-center font-newscycle font-bold text-black">
          <FloatingCart />
          <p>
            © Made with ❤️ By{" "}
            <span className="tracking-widest">MISTERMENU</span>{" "}
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
