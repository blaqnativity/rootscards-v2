import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import type { NavItem } from "@/constants/navConstants";
import { BtnMain } from "../buttons/BtnMain";
import { MobileNav } from "./MobileNav";
import logo from "/lightLogo.svg";

export interface ScrollRange {
  start: number;
  end?: number;
  bgColor?: string;
  textColor?: string;
  logo?: string;
}

interface SecondaryNavProps {
  ranges?: ScrollRange[];
  menuItems: NavItem[]; // ✅ expects array of NavItem
}

export const SecondaryNav: React.FC<SecondaryNavProps> = ({
  ranges = [],
  menuItems, // ✅ properly destructured from props
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find the matching range based on scroll
  const activeRange = ranges.find((range) => {
    if (range.end !== undefined) {
      return scrollY >= range.start && scrollY < range.end;
    }
    return scrollY >= range.start;
  });

  // Defaults if no range is matched
  const bgColor = activeRange?.bgColor || "bg-transparent";
  const textColor = activeRange?.textColor || "text-white";
  const logoToShow = activeRange?.logo || logo;

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`absolute hidden lg:block w-full z-40 transition-colors duration-300 ${bgColor}`}
      >
        <header className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/shortlets" className="flex items-center gap-2">
              <img
                src={logoToShow}
                alt="logo"
                className="h-[1.3em] md:h-[1.5em]"
              />
              <span className={`logoText ${textColor}`}>rootscards</span>
            </Link>

            {/* Menu Items */}
            <ul
              className={`flex font-medium space-x-8 items-center ${textColor}`}
            >
              {menuItems.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url || "#"}
                    className="custom-link hover:opacity-80 transition"
                  >
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

      {/* Mobile Nav */}
      <MobileNav activeRange={activeRange} menuItems={menuItems} />
    </>
  );
};
