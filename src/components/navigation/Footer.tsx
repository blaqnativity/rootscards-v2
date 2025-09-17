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
        <div className="flex flex-col gap-10 mx-auto max-w-[1680px] px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 gap-y-10 items-start">
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
              <Link to="/" className="logoText">
                Advanced Features
              </Link>
              <Link to="/">AI-Powered Segmentation</Link>
              <Link to="/">Small Identity Engine</Link>
              <Link to="/">Real Time Dashboard</Link>
            </div>
            {/* block three */}
            <div className="flex flex-col gap-4">
              <Link to="/" className="logoText">
                Product
              </Link>
              <Link to="/">Rootscard</Link>
              <Link to="/">Rootscard Suite</Link>
              <Link to="/">View Demo</Link>
              <Link to="/">Dev Docs</Link>
            </div>
            {/* block four */}
            <div className="flex flex-col gap-4">
              <Link to="/" className="logoText">
                Support
              </Link>
              <Link to="/">Product Updates</Link>
              <Link to="/">FAQs</Link>
              <Link to="/">Blogs</Link>
              <Link to="/">Help Docs</Link>
            </div>

            {/* social icons */}
            <div className="flex flex-col gap-6">
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
              <Link
                to="/"
                className="bg-[#1EAE54] flex items-center gap-2 px-4 py-2 rounded-full w-fit"
              >
                <WhatsappLogo size={22} />
                Chat on Whatsapp
              </Link>

              <span>support@rootscard.com</span>
            </div>
          </div>

          {/* copyright text */}
          <span>© Copyright rootscard* Inc. 2025</span>

          {/* line */}
          <div className="bg-white/30 h-[1px]"></div>

          <div>
            <span className="headerFive">Backed by techstars_</span>

            <ul className="mt-4 space-y-4">
              <li>
                * Mainstack offers its products and services in partnership with
                licensed transmitters and payment processors in their respective
                jurisdictions.
              </li>
              <li>
                * Mainstack offers its products and services in partnership with
                licensed transmitters and payment processors in their respective
                jurisdictions.
              </li>
              <li>
                * Mainstack offers its products and services in partnership with
                licensed transmitters and payment processors in their respective
                jurisdictions.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
