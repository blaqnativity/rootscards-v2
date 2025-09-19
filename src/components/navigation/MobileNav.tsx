import logo from "/lightLogo.svg";
import darkLogo from "/darkLogo.svg";
import { Link } from "react-router-dom";
import { X, List, ArrowRight } from "@phosphor-icons/react";
import { navMenu } from "../../constants/navConstants";
import { BtnMain } from "../buttons/BtnMain";
import { useToggle } from "../../hooks/useToggle";

interface MobileNavProps {
  isWhiteBackground: boolean;
}

export const MobileNav = ({ isWhiteBackground }: MobileNavProps) => {
  const { isToggled: menu, toggle } = useToggle();

  return (
    <nav className="lg:hidden fixed top-6 left-0 w-full z-50 pointer-events-auto">
      <header className="max-w-[1680px] mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <div
            className={`w-full max-w-[880px] rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-colors duration-300 ${
              isWhiteBackground
                ? "bg-white text-black"
                : "bg-white/5 backdrop-blur-lg text-white"
            }`}
          >
            <Link to="/" className="flex items-center gap-3">
              <img
                src={isWhiteBackground ? darkLogo : logo}
                alt="logo"
                className="h-[1.15em]"
              />
              <span
                className={`logoText lowercase text-base ${
                  isWhiteBackground ? "text-black" : "text-white"
                }`}
              >
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
                <X size={28} color={isWhiteBackground ? "black" : "white"} />
              ) : (
                <List size={28} color={isWhiteBackground ? "black" : "white"} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {menu && (
        <div className="flex justify-center mt-3 px-4">
          <div
            className={`w-full max-w-[820px] rounded-3xl p-8 shadow-2xl transition-colors duration-300 ${
              isWhiteBackground
                ? "bg-white text-black"
                : "bg-white/5 backdrop-blur-2xl text-white"
            }`}
          >
            <ul className="space-y-8 text-lg font-medium">
              {navMenu.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    onClick={toggle}
                    className="custom-link block hover:opacity-80 transition"
                  >
                    {link.menu}
                  </Link>
                </li>
              ))}
              <li>
                <BtnMain
                  to="https://app.rootscards.com/signup"
                  text="Start free trial"
                  icon={ArrowRight}
                  // ✅ Dynamic styles
                  btnBg={isWhiteBackground ? "bg-black" : "bg-white"}
                  textColor={isWhiteBackground ? "text-white" : "text-black"}
                  btnBorder={
                    isWhiteBackground ? "border-black" : "border-white"
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
