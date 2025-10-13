import logo from "/darkLogo.svg";
import { Link } from "react-router-dom";
import {
  LinkedinLogoIcon,
  XLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export const SubFooter = () => {
  return (
    <>
      <section className="w-full bg-[#F0F0F0] py-5 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-1">
            <img src={logo} className="h-[1.1em] md:h-[1.5em]" />
            <span className="logoText">rootscards</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/" className="icon">
              <LinkedinLogoIcon size={24} weight="fill" />
            </Link>
            <Link to="/" className="icon">
              <InstagramLogo size={24} weight="fill" />
            </Link>
            <Link to="/" className="icon">
              <YoutubeLogo size={24} weight="fill" />
            </Link>
            <Link to="/" className="icon">
              <XLogo size={24} weight="fill" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
