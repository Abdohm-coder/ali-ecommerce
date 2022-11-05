import { MoonIcon, SunIcon } from "../icons/index";
import { useThemeContext } from "../utils/theme.context";
import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
import { ROUTES } from "../utils/routes";
import { useDataContext } from "../utils/data.context";
import { useEffect } from "react";

export default function Navbar() {
  const { pageInfo } = useDataContext();
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    // Count Visits
  }, []);

  const Icon = theme === "dark" ? SunIcon : MoonIcon;
  const logo =
    theme === "dark" ? pageInfo.logo.dark_mode : pageInfo.logo.light_mode;
  return (
    <>
      <main className="h-full min-h-screen pb-10">
        <nav className="flex items-center overflow-hidden h-20">
          <section className="layout">
            <div className="flex items-center justify-between w-full h-10 px-1">
              <Link to={ROUTES.HOME}>
                <span className="overflow-hidden relative max-h-10">
                  <img
                    className="object-contain w-36 max-w-full"
                    alt={logo}
                    src={logo}
                  />
                </span>
              </Link>
              <button
                onClick={() =>
                  setTheme((theme) => (theme === "dark" ? "light" : "dark"))
                }
                className="dark:text-white focus:ring-4 ring-btn-dark bg-white/10 hover:bg-white/30 p-1 h-10 w-10 flex items-center justify-center rounded-xl cursor-pointer">
                <Icon className="w-5 h-5 " />
              </button>
            </div>
          </section>
        </nav>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
