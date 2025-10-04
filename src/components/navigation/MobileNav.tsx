import { Link } from "react-router-dom";
import { X, List, ArrowRight } from "@phosphor-icons/react";
import { BtnMain } from "../buttons/BtnMain";
import { useToggle } from "../../hooks/useToggle";

import logo from "/lightLogo.svg";
import type { ScrollRange } from "./MainNav";

// Define the type for nav items (support submenu too, in case needed later)
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

  // Defaults for color and logo
  const bgColor = activeRange?.bgColor ?? "bg-white/5 backdrop-blur-lg";
  const textColor = activeRange?.textColor ?? "text-white";
  const currentLogo = activeRange?.logo ?? logo;

  // Determine icon color based on text color
  const iconColor = textColor.includes("black") ? "black" : "white";

  return (
    <nav className="lg:hidden fixed top-6 left-0 w-full z-50 pointer-events-auto">
      <header className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <div
            className={`w-full max-w-[880px] rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-colors duration-300 ${bgColor} ${textColor}`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={currentLogo} alt="logo" className="h-[1.15em]" />
              <span className={`logoText lowercase text-base ${textColor}`}>
                rootscards
              </span>
            </Link>

            {/* Toggle button */}
            <button
              onClick={toggle}
              aria-expanded={menu}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-full"
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

      {/* Mobile dropdown menu */}
      {menu && (
        <div className="flex justify-center mt-3 px-4">
          <div
            className={`w-full max-w-[820px] rounded-3xl p-8 shadow-2xl transition-colors duration-300 ${bgColor} ${textColor}`}
          >
            <ul className="space-y-8 text-lg font-medium">
              {menuItems.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url || "#"}
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
                  btnBg={iconColor === "black" ? "bg-black" : "bg-white"}
                  textColor={
                    iconColor === "black" ? "text-white" : "text-black"
                  }
                  btnBorder={
                    iconColor === "black" ? "border-black" : "border-white"
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
