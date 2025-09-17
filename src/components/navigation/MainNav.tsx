import logo from "/lightLogo.svg";
import { Link } from "react-router-dom";
import { X, List, ArrowRight } from "@phosphor-icons/react";
import { navMenu } from "../../constants/navConstants";
import { useToggle } from "../../hooks/useToggle";
import { BtnMain } from "../buttons/BtnMain";

export const MainNav = () => {
  const { isToggled: menu, toggle } = useToggle();

  return (
    <nav className="fixed top-6 left-0 w-full z-50 pointer-events-auto">
      <header className="max-w-[1680px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center lg:justify-between">
          {/* Desktop brand + nav */}
          <Link to="/" className="hidden lg:flex items-center gap-2">
            <img src={logo} alt="logo" className="h-[1.3em] md:h-[1.5em]" />
            <span className="logoText lowercase">rootscards</span>
          </Link>

          <ul className="hidden lg:flex font-medium space-x-8 items-center">
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

          {/* Mobile pill */}
          <div className="lg:hidden flex-1 flex justify-center">
            <div className="w-full max-w-[880px] rounded-full border border-white/5 bg-white/5 backdrop-blur-lg px-6 py-3 flex items-center justify-between shadow-sm">
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
                  <List color="white" size={28} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile dropdown panel (directly under the pill, not full screen) */}
      {menu && (
        <div className="lg:hidden flex justify-center mt-3 px-4">
          <div className="w-full max-w-[820px] rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/5 p-8 shadow-2xl">
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
  );
};
