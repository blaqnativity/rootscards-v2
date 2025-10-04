import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { navMenu2 } from "@/constants/navConstants";
import { BtnMain } from "../buttons/BtnMain";
import { MobileNav } from "./MobileNav";
import lightLogo from "/lightLogo.svg";

export interface ScrollRange {
  start: number;
  end?: number;
  bgColor?: string;
  textColor?: string;
  logo?: string;
}

interface SecondaryNavProps {
  ranges?: ScrollRange[];
}

export const SecondaryNav: React.FC<SecondaryNavProps> = ({ ranges = [] }) => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position (for mobile)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine active scroll range for mobile
  const activeRange = ranges.find((range) => {
    if (range.end !== undefined)
      return scrollY >= range.start && scrollY < range.end;
    return scrollY >= range.start;
  });

  // --- DESKTOP NAV (static styling like MainNav) ---
  const desktopBgColor = "bg-transparent";
  const desktopTextColor = "text-white";
  const desktopLogo = lightLogo;

  // --- MOBILE NAV (scroll-reactive) ---
  const mobileBgColor = activeRange?.bgColor || "bg-transparent";
  const mobileTextColor = activeRange?.textColor || "text-white";
  const mobileLogo = activeRange?.logo || lightLogo;

  return (
    <>
      {/* Desktop Nav */}
      <nav className="absolute hidden lg:block w-full z-40 px-4 mt-1">
        <header
          className={`max-w-[1400px] mx-auto px-4 md:px-8 py-4 relative rounded-xl transition-colors duration-300 ${desktopBgColor}`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/shortlets" className="flex items-center gap-2">
              <img
                src={desktopLogo}
                alt="logo"
                className="h-[1.3em] md:h-[1.5em] transition-all duration-200"
              />
              <span
                className={`logoText ${desktopTextColor} transition-colors duration-200`}
              >
                rootscards
              </span>
            </Link>

            {/* Menu */}
            <ul
              className={`flex font-medium space-x-8 items-center ${desktopTextColor} transition-colors duration-200`}
            >
              {navMenu2.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="custom-link hover:opacity-80 transition-opacity duration-200"
                  >
                    {link.menu}
                  </Link>
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
      </nav>

      {/* Mobile Nav (scroll-reactive) */}
      <MobileNav
        activeRange={{
          start: activeRange?.start ?? 0,
          end: activeRange?.end,
          bgColor: mobileBgColor,
          textColor: mobileTextColor,
          logo: mobileLogo,
        }}
        menuItems={navMenu2}
      />
    </>
  );
};
