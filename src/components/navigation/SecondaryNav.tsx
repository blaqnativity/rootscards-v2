import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { navMenu2 } from "@/constants/navConstants";
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

interface MainNavProps {
  ranges?: ScrollRange[];
}

export const SecondaryNav: React.FC<MainNavProps> = ({ ranges = [] }) => {
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
    return scrollY >= range.start; // open-ended range
  });

  // Default styles if no range is matched
  const bgColor = activeRange?.bgColor || "bg-transparent";
  const textColor = activeRange?.textColor || "text-white";
  const logoToShow = activeRange?.logo || logo;

  return (
    <>
      <nav
        className={`absolute hidden lg:block w-full z-40 transition-colors duration-300 ${bgColor}`}
      >
        <header className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoToShow}
                alt="logo"
                className="h-[1.3em] md:h-[1.5em]"
              />
              <span className={`logoText ${textColor}`}>rootscards</span>
            </Link>
            <ul
              className={`flex font-medium space-x-8 items-center ${textColor}`}
            >
              {navMenu2.map((link, index) => (
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

      {/* Mobile nav */}
      <MobileNav activeRange={activeRange} menuItems={navMenu2} />
    </>
  );
};
