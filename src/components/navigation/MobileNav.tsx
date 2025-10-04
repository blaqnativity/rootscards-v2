import { Link } from "react-router-dom";
import { X, List, ArrowRight } from "@phosphor-icons/react";
import { BtnMain } from "../buttons/BtnMain";
import { useToggle } from "../../hooks/useToggle";
import logo from "/lightLogo.svg";
import type { ScrollRange } from "./MainNav";

interface NavItem {
  menu: string;
  url?: string;
  submenu?: {
    title: string;
    description: string;
    url: string;
  }[];
}

interface MobileNavProps {
  activeRange?: ScrollRange;
  menuItems: NavItem[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeRange,
  menuItems,
}) => {
  const { isToggled: menu, toggle } = useToggle();

  // Scroll-based styles (with defaults)
  const bgColor = activeRange?.bgColor ?? "bg-white/5 backdrop-blur-lg";
  const textColor = activeRange?.textColor ?? "text-white";
  const currentLogo = activeRange?.logo ?? logo;

  // Icon color detection based on text color
  const isDarkText = textColor.includes("black");
  const iconColor = isDarkText ? "black" : "white";

  return (
    <nav className="lg:hidden fixed top-6 left-0 w-full z-50 pointer-events-auto">
      <header className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <div
            className={`w-full max-w-[880px] rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-colors duration-300 ${bgColor} ${textColor}`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={currentLogo}
                alt="logo"
                className="h-[1.15em] transition-all duration-300"
              />
              <span
                className={`logoText lowercase text-base font-medium ${textColor} transition-colors duration-300`}
              >
                rootscards
              </span>
            </Link>

            {/* Toggle button */}
            <button
              onClick={toggle}
              aria-expanded={menu}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
            >
              {menu ? (
                <X size={28} color={iconColor} />
              ) : (
                <List size={28} color={iconColor} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown menu */}
      {menu && (
        <div className="flex justify-center mt-3 px-4">
          <div
            className={`w-full max-w-[820px] rounded-3xl p-8 shadow-2xl transition-all duration-300 ${bgColor} ${textColor}`}
          >
            <ul className="space-y-8 text-lg font-medium">
              {menuItems.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url || "#"}
                    onClick={toggle}
                    className="custom-link block hover:opacity-80 transition-opacity duration-200"
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
                  btnBg={isDarkText ? "bg-black" : "bg-white"}
                  textColor={isDarkText ? "text-white" : "text-black"}
                  btnBorder={isDarkText ? "border-black" : "border-white"}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
