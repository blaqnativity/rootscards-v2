import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { navMenu } from "../../constants/navConstants";
import { BtnMain } from "../buttons/BtnMain";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import lightLogo from "/lightLogo.svg";
import darkLogo from "/darkLogo.svg";

export interface ScrollRange {
  start: number;
  end?: number;
  bgColor?: string;
  textColor?: string;
  logo?: string;
}

interface MainNavProps {
  ranges?: ScrollRange[];
}

export const MainNav: React.FC<MainNavProps> = ({ ranges = [] }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeRange = ranges.find((range) => {
    if (range.end !== undefined) {
      return scrollY >= range.start && scrollY < range.end;
    }
    return scrollY >= range.start;
  });

  const isDropdownActive = !!activeMenu;

  // Style logic
  const bgColor = isDropdownActive
    ? "bg-white"
    : activeRange?.bgColor || "bg-transparent";

  const textColor = isDropdownActive
    ? "text-black"
    : activeRange?.textColor || "text-white";

  const logoToShow = isDropdownActive
    ? darkLogo
    : activeRange?.logo || lightLogo;

  const handleMenuToggle = (menuName: string) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const activeSubmenu =
    navMenu.find((link) => link.menu === activeMenu)?.submenu || [];

  return (
    <>
      <nav className="absolute hidden lg:block w-full z-40 transition-all duration-300 px-4 mt-4">
        <header
          className={`max-w-[1400px] mx-auto px-4 md:px-8 py-6 relative transition-all duration-300 
          rounded-t-xl ${bgColor}`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoToShow}
                alt="logo"
                className="h-[1.3em] md:h-[1.5em] transition-all duration-200"
              />
              <span
                className={`logoText ${textColor} transition-colors duration-200`}
              >
                rootscards
              </span>
            </Link>

            {/* Desktop menu */}
            <ul
              className={`flex font-medium space-x-8 items-center ${textColor} transition-colors duration-200`}
            >
              {navMenu.map((link, index) => (
                <li
                  key={index}
                  className="relative"
                  onClick={() => handleMenuToggle(link.menu)}
                >
                  {link.submenu ? (
                    <button className="custom-link cursor-pointer flex items-center gap-1 hover:opacity-80">
                      {link.menu}
                      <span className="ml-1">
                        <CaretDown />
                      </span>
                    </button>
                  ) : (
                    <Link
                      to={link.url || "#"}
                      className="custom-link hover:opacity-80"
                    >
                      {link.menu}
                    </Link>
                  )}
                </li>
              ))}

              <BtnMain
                to="https://app.rootscards.com/signup"
                text="Start free trial"
                icon={ArrowRight}
                btnBg="bg-white"
                textColor="text-black"
                iconBg="bg-black"
              />
            </ul>
          </div>
        </header>

        {/* Mega Menu — toggles like FAQ, stays attached */}
        <div
          className={`max-w-[1400px] mx-auto transition-all duration-300 overflow-hidden ${
            activeMenu ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          {activeSubmenu.length > 0 && (
            <div className="rounded-b-xl shadow-lg border border-t-0 border-gray-100">
              <MegaMenu submenu={activeSubmenu} />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile nav */}
      <MobileNav activeRange={activeRange} menuItems={navMenu} />
    </>
  );
};
