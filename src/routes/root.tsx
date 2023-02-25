import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { HeaderNavigation } from "../components/header-navigation";

import { ShowFloatingCart } from "../components/cart-floating-show";
import { Footer } from "../components/footer";

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
        <ShowFloatingCart />
        <Footer />
        <ScrollRestoration />
      </div>
    </ShoppingCartProvider>
  );
}
