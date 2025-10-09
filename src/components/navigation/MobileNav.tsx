import { useState } from "react";
import { Link } from "react-router-dom";
import { X, List, ArrowRight, CaretDown } from "@phosphor-icons/react";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const bgColor = activeRange?.bgColor ?? "bg-white/5 backdrop-blur-lg";
  const textColor = activeRange?.textColor ?? "text-white";
  const currentLogo = activeRange?.logo ?? logo;

  const isDarkText = textColor.includes("black");
  const iconColor = isDarkText ? "black" : "white";

  const handleDropdownToggle = (menuName: string) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

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

      {/* Mobile dropdown menu */}
      {menu && (
        <div className="flex justify-center mt-3 px-4">
          <div
            className={`w-full max-w-[820px] rounded-3xl p-8 shadow-2xl transition-all duration-300 ${bgColor} ${textColor}`}
          >
            <ul className="space-y-6 text-lg font-medium">
              {menuItems.map((link, index) => {
                const hasSubmenu = !!link.submenu;

                return (
                  <li key={index}>
                    {hasSubmenu ? (
                      <div>
                        {/* Parent item with dropdown toggle */}
                        <button
                          onClick={() => handleDropdownToggle(link.menu)}
                          className="flex items-center justify-between w-full custom-link hover:opacity-80 transition-opacity duration-200"
                        >
                          <span>{link.menu}</span>
                          <CaretDown
                            size={20}
                            className={`transition-transform duration-300 ${
                              openDropdown === link.menu ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Submenu section */}
                        {openDropdown === link.menu && (
                          <div className="bg-white p-6 rounded-2xl mt-4 space-y-4">
                            {/* Optional quick links like "Products overview" */}
                            {/* <div className="grid grid-cols-1 gap-3">
                              <Link
                                to="#"
                                onClick={toggle}
                                className="rounded-lg p-3 text-center font-medium bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 hover:opacity-90 transition"
                              >
                                Products overview
                              </Link>
                              <Link
                                to="#"
                                onClick={toggle}
                                className="rounded-lg p-3 text-center font-medium bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 hover:opacity-90 transition"
                              >
                                View demo
                              </Link>
                            </div> */}

                            {/* Submenu items */}
                            <div className="flex flex-col gap-4 mt-3">
                              {link.submenu?.map((sub, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={sub.url}
                                  onClick={toggle}
                                  className="block p-3 hover:bg-gray-50 transition"
                                >
                                  <h5 className="font-semibold text-blue-700 text-base">
                                    {sub.title}
                                  </h5>
                                  <p className="text-sm text-gray-600 mt-1 leading-snug">
                                    {sub.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.url || "#"}
                        onClick={toggle}
                        className="custom-link block hover:opacity-80 transition-opacity duration-200"
                      >
                        {link.menu}
                      </Link>
                    )}
                  </li>
                );
              })}

              <li className="pt-2">
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
