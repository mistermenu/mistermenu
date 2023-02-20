import { Outlet } from "react-router-dom";
import { HeaderNavigation } from "../components/header-navigation";

export function RootRoute() {
  return (
    <>
      <HeaderNavigation />

      <main>
        <Outlet />
      </main>

      <footer className="my-5">
        <p>Copyright</p>
      </footer>
    </>
  );
}
