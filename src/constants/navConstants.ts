// navmenu
export interface NavItem {
  menu: string;
  url: string;
  icon?: React.FC<{ size?: number }>;
}

// main navmenu
export const navMenu: NavItem[] = [
  { menu: "View demo", url: "/demo" },
  { menu: "Product", url: "/shortlets" },
  { menu: "Documentation", url: "#" },
  { menu: "Pricing", url: "/pricing" },
  { menu: "Sign In/Up", url: "https://app.rootscards.com" },
];
export const navMenu2: NavItem[] = [
  { menu: "View demo", url: "/demo" },
  { menu: "Pricing", url: "/pricing" },
  { menu: "Sign In/Up", url: "https://app.rootscards.com" },
];

import logo from "/lightLogo.svg";
import darkLogo from "/darkLogo.svg";

export const navRange1 = [
  {
    start: 10,
    end: 900.8,
    bgColor: "bg-white/5 backdrop-blur-2xl",
    textColor: "text-white",
    logo,
  },
  {
    start: 900.8,
    end: 1863.2,
    bgColor: "bg-white shadow-md",
    textColor: "text-black",
    logo: darkLogo,
  },
  {
    start: 1863.2,
    end: 2871.1,
    bgColor: "bg-white/5 backdrop-blur-2xl",
    textColor: "text-white",
    logo,
  },
  {
    start: 2871.1,
    bgColor: "bg-white shadow-md",
    textColor: "text-black",
    logo: darkLogo,
  },
];

export const navRange2 = [
  {
    start: 10,
    end: 900.8,
    bgColor: "bg-white/5 backdrop-blur-2xl",
    textColor: "text-white",
    logo,
  },
  {
    start: 900.8,
    end: 1863.2,
    bgColor: "bg-white shadow-md",
    textColor: "text-black",
    logo: darkLogo,
  },
  {
    start: 1863.2,
    end: 2871.1,
    bgColor: "bg-white/5 backdrop-blur-2xl",
    textColor: "text-white",
    logo,
  },
  {
    start: 2871.1,
    bgColor: "bg-white shadow-md",
    textColor: "text-black",
    logo: darkLogo,
  },
];
