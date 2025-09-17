import logo from "/lightLogo.svg";
import { Link } from "react-router-dom";
import { X, List, ArrowRight } from "@phosphor-icons/react";
import { navMenu } from "../../constants/navConstants";
import { useToggle } from "../../hooks/useToggle";
import { BtnMain } from "../buttons/BtnMain";

export const MainNav = () => {
  const { isToggled: menu, toggle } = useToggle();

  return (
    <>
      {/* Desktop nav */}
      <nav className="absolute hidden lg:block w-full z-40">
        <header className="max-w-[1680px] mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" className="h-[1.3em] md:h-[1.5em]" />
              <span className="logoText">rootscards</span>
            </Link>

            <ul className="flex font-medium space-x-8 items-center">
              {navMenu.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="custom-link">
                    {link.menu}
                  </Link>
                </li>
              ))}
              <BtnMain
                to="https://app.rootscards.com/signup"
                text="Start free trial"
                icon={ArrowRight}
              />
            </ul>
          </div>
        </header>
      </nav>

      {/* Mobile nav (fixed) */}
      <nav className="lg:hidden fixed top-6 left-0 w-full z-50 pointer-events-auto">
        <header className="max-w-[1680px] mx-auto px-4 md:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-[880px] rounded-full bg-white/5 backdrop-blur-lg px-6 py-3 flex items-center justify-between shadow-sm">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="logo" className="h-[1.15em]" />
                <span className="logoText lowercase text-white text-base">
                  rootscards
                </span>
              </Link>

              {/* Toggle */}
              <button
                onClick={toggle}
                aria-expanded={menu}
                aria-label="Toggle mobile menu"
                className="p-2 rounded-full"
              >
                {menu ? (
                  <X size={28} color="white" />
                ) : (
                  <List size={28} color="white" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile dropdown (under the pill) */}
        {menu && (
          <div className="flex justify-center mt-3 px-4">
            <div className="w-full max-w-[820px] rounded-3xl bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">
              <ul className="space-y-8 text-lg font-medium text-white">
                {navMenu.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      onClick={toggle}
                      className="block hover:opacity-80 transition"
                    >
                      {link.menu}
                    </Link>
                  </li>
                ))}

                {/* CTA */}
                <li>
                  <BtnMain
                    to="https://app.rootscards.com/signup"
                    text="Sign In/Up"
                    icon={ArrowRight}
                  />
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
