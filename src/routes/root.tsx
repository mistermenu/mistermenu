import { Outlet, useNavigation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { HeaderNavigation } from "../components/header-navigation";

export function RootRoute() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-white">
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

      <footer className="my-5">
        <p>Copyright 2023 MisterMenu</p>
      </footer>
    </div>
  );
}
