import logo from "/lightLogo.svg";
import { Link } from "react-router-dom";

// phosphor-react-icons import
import { X, List, ArrowRight } from "@phosphor-icons/react";
import { navMenu } from "../../constants/navConstants";
import { useToggle } from "../../hooks/useToggle";
import { BtnMain } from "../buttons/BtnMain";

export const MainNav = () => {
  const { isToggled: menu, toggle } = useToggle();

  return (
    <nav className="absolute text-white w-full transition-all duration-400 bg-transparent">
      <header className="max-w-[1680px] mx-auto py-5 px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-baseline-last gap-2">
            <img src={logo} alt="logo" className="h-[1.5em]" />
            <span className="logoText lowercase">rootscards</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex font-medium space-x-8 items-center">
            {navMenu.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className="custom-link">
                  {link.menu}
                </Link>
              </li>
            ))}
            <BtnMain
              to="https://app.rootscards.com/signup"
              text="start free trial"
              icon={ArrowRight}
            />
          </ul>

          {/* Toggle Button */}
          <div className="lg:hidden z-50" onClick={toggle}>
            {menu ? <X size={24} /> : <List size={24} />}
          </div>
        </div>
      </header>
    </nav>
  );
};
