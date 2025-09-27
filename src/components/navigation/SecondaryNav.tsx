import darkLogo from "/darkLogo.svg";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { navMenu } from "../../constants/navConstants";
import { BtnMain } from "../buttons/BtnMain";
import { useEffect, useState } from "react";
import { MobileNav } from "./MobileNav";

// ...
export const SecondaryNav = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // define your scroll ranges
  const isWhiteBackground =
    (scrollY >= 900.8 && scrollY < 1863.2) || scrollY >= 2871.1;

  return (
    <>
      {/* Desktop nav */}
      <nav
        className={`absolute hidden lg:block w-full z-40 transition-colors duration-300 ${
          isWhiteBackground ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <header className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={darkLogo}
                alt="logo"
                className="h-[1.3em] md:h-[1.5em]"
              />
              <span
                className={`logoText ${
                  isWhiteBackground ? "text-black" : "text-white"
                }`}
              >
                rootscards
              </span>
            </Link>

            <ul
              className={`flex font-medium space-x-8 items-center ${
                isWhiteBackground ? "text-black" : "text-white"
              }`}
            >
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
          </div>
        </header>
      </nav>

      {/* Mobile nav */}
      <MobileNav isWhiteBackground={isWhiteBackground} />
    </>
  );
};
