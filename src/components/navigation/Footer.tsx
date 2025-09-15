import { Link } from "react-router-dom";
import logo from "/lightLogo.svg";
import {
  WhatsappLogo,
  LinkedinLogoIcon,
  XLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <>
      <footer className="w-full bg-black py-10 md:py-20 text-white">
        <div className="mx-auto max-w-[1680px] px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* block one */}
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-baseline-last gap-1 md:gap-2">
                <img src={logo} alt="logo" className="h-[1.1em] md:h-[1.5em]" />
                <span className="logoText lowercase">rootscards</span>
              </Link>
              <Link to="/">Contact</Link>
              <Link to="/">Pricing</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Use</Link>
            </div>
            {/* block two */}
            <div className="flex flex-col gap-4">
              <Link to="/">Advanced Features</Link>
              <Link to="/">AI-Powered Segmentation</Link>
              <Link to="/">Small Identity Engine</Link>
              <Link to="/">Real Time Dashboard</Link>
            </div>
            {/* block three */}
            <div className="flex flex-col gap-4">
              <Link to="/">Product</Link>
              <Link to="/">AI-Powered Segmentation</Link>
              <Link to="/">Small Identity Engine</Link>
              <Link to="/">Real Time Dashboard</Link>
            </div>
            {/* block four */}
            <div className="flex flex-col gap-4">
              <Link to="/">Support</Link>
              <Link to="/">AI-Powered Segmentation</Link>
              <Link to="/">Small Identity Engine</Link>
              <Link to="/">Real Time Dashboard</Link>
            </div>

            {/* social icons */}
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-4">
                <Link to="/" className="icon">
                  <LinkedinLogoIcon size={22} weight="fill" />
                </Link>
                <Link to="/" className="icon">
                  <InstagramLogo size={22} weight="fill" />
                </Link>
                <Link to="/" className="icon">
                  <YoutubeLogo size={22} weight="fill" />
                </Link>
                <Link to="/" className="icon">
                  <XLogo size={22} weight="fill" />
                </Link>
              </div>
              {/* whatsapp */}
              <span className="flex items-center gap-2">
                <WhatsappLogo size={32} weight="fill" />
                send us a dm
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
