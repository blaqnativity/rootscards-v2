import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { navMenu } from "../../constants/navConstants";
import { BtnMain } from "../buttons/BtnMain";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import lightLogo from "/lightLogo.svg";
import darkLogo from "/darkLogo.svg";
import { motion } from "framer-motion";

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

  // Track scroll position (for mobile)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine the active scroll range (for mobile only)
  const activeRange = ranges.find((range) => {
    if (range.end !== undefined)
      return scrollY >= range.start && scrollY < range.end;
    return scrollY >= range.start;
  });

  // State for dropdown
  const isDropdownActive = !!activeMenu;

  // --- DESKTOP NAV STYLES (fixed, not scroll-based) ---
  const desktopBgColor = "bg-transparent";
  const desktopTextColor = "text-white";
  const desktopLogo = lightLogo;

  // Adjust when dropdown is open
  const bgColor = isDropdownActive ? "bg-white" : desktopBgColor;
  const textColor = isDropdownActive ? "text-black" : desktopTextColor;
  const logoToShow = isDropdownActive ? darkLogo : desktopLogo;

  // --- MOBILE NAV STYLES (scroll-based) ---
  const mobileBgColor = activeRange?.bgColor || "bg-transparent";
  const mobileTextColor = activeRange?.textColor || "text-white";
  const mobileLogo = activeRange?.logo || lightLogo;

  const handleMenuToggle = (menuName: string) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const activeSubmenu =
    navMenu.find((link) => link.menu === activeMenu)?.submenu || [];

  return (
    <>
      {/* Desktop nav */}
      <nav className="absolute hidden lg:block w-full z-40 px-4 mt-1">
        <header
          className={`max-w-[1400px] mx-auto px-4 md:px-8 py-4 relative rounded-xl transition-colors duration-300 ${bgColor}`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoToShow}
                alt="logo"
                className="h-[1.3em] md:h-[1.5em]"
              />
              <span className={`logoText ${textColor}`}>rootscards</span>
            </Link>

            {/* Desktop menu */}
            <ul
              className={`flex font-medium space-x-8 items-center ${textColor} transition-colors duration-200`}
            >
              {navMenu.map((link, index) => (
                <li key={index} className="relative">
                  {link.submenu ? (
                    <button
                      onClick={() => handleMenuToggle(link.menu)}
                      className="custom-link cursor-pointer flex items-center gap-1 hover:opacity-80 transition-opacity duration-200"
                    >
                      {link.menu}
                      <CaretDown
                        className={`ml-1 transition-transform duration-300 ${
                          activeMenu === link.menu ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.url || "#"}
                      className="custom-link hover:opacity-80 transition-opacity duration-200"
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

          {/* Mega Menu */}
          <motion.div
            layout
            animate={activeSubmenu.length > 0 ? "open" : "closed"}
            style={{ visibility: "hidden" }}
            variants={{
              open: { visibility: "visible", opacity: 1 },
              closed: { visibility: "hidden", opacity: 0 },
            }}
            className="mx-auto overflow-hidden mt-2"
          >
            <MegaMenu submenu={activeSubmenu} />
          </motion.div>
        </header>
      </nav>

      {/* Mobile nav (scroll-reactive) */}
      <MobileNav
        activeRange={{
          start: activeRange?.start ?? 0,
          end: activeRange?.end,
          bgColor: mobileBgColor,
          textColor: mobileTextColor,
          logo: mobileLogo,
        }}
        menuItems={navMenu}
      />
    </>
  );
};
