import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { navMenu } from "@/constants/navConstants";
import { BtnMain } from "@/components/buttons/BtnMain";
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
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeRange = ranges.find((range) => {
    if (range.end !== undefined)
      return scrollY >= range.start && scrollY < range.end;
    return scrollY >= range.start;
  });

  const isDropdownActive = !!activeMenu;

  const desktopBgColor = "bg-transparent";
  const desktopTextColor = "text-white";
  const desktopLogo = lightLogo;

  const bgColor = isDropdownActive ? "bg-white" : desktopBgColor;
  const textColor = isDropdownActive ? "text-black" : desktopTextColor;
  const logoToShow = isDropdownActive ? darkLogo : desktopLogo;

  const mobileBgColor = activeRange?.bgColor || "bg-transparent";
  const mobileTextColor = activeRange?.textColor || "text-white";
  const mobileLogo = activeRange?.logo || lightLogo;

  // Hover handlers only for dropdown items
  const handleMouseEnter = (menu: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveMenu(null), 150);
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
            <Link to="/" className="flex items-center gap-1">
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
              {navMenu.map((link, index) => {
                const hasSubmenu = !!link.submenu;

                return (
                  <li
                    key={index}
                    className="relative"
                    {...(hasSubmenu && {
                      onMouseEnter: () => handleMouseEnter(link.menu),
                      onMouseLeave: handleMouseLeave,
                    })}
                  >
                    {hasSubmenu ? (
                      <button className="custom-link cursor-pointer flex items-center gap-1 hover:opacity-80 transition-opacity duration-200">
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
                );
              })}

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
            onMouseEnter={() => handleMouseEnter(activeMenu || "")}
            onMouseLeave={handleMouseLeave}
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
