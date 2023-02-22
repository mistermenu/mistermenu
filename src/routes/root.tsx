import { Outlet } from "react-router-dom";
import { HeaderNavigation } from "../components/header-navigation";

export function RootRoute() {
  return (
    <div className="mx-36 bg-white">
      <HeaderNavigation />

      <main>
        <Outlet />
      </main>

      <footer className="my-5">
        <p>Copyright</p>
      </footer>
    </div>
  );
}
