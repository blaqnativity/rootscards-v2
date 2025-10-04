// navmenu
export interface SubNavItem {
  title: string;
  description: string;
  url: string;
  icon?: React.FC<{ size?: number }>;
}

export interface NavItem {
  menu: string;
  url?: string;
  submenu?: SubNavItem[];
  icon?: React.FC<{ size?: number }>;
}

//navMenu items
export const navMenu: NavItem[] = [
  { menu: "View demo", url: "/demo" },

  {
    menu: "Products",
    submenu: [
      {
        title: "Rootscards Check-in",
        description:
          "Streamline visitor management with easy digital check-in.",
        url: "/check-in",
      },
      {
        title: "Rootscards for Events",
        description: "Seamless registration and attendee tracking for events.",
        url: "/events",
      },
      {
        title: "Rootscards for Offices",
        description: "Modernize office entries and visitor access.",
        url: "/offices",
      },
      {
        title: "Rootscards for Shortlets",
        description: "Simplify guest management for rentals and apartments.",
        url: "/shortlets",
      },
      {
        title: "Rootscards for Churches",
        description:
          "Efficient attendance and guest tracking for congregations.",
        url: "/churches",
      },
    ],
  },

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
    end: 2871.1,
    bgColor: "bg-white shadow-md",
    textColor: "text-black",
    logo: darkLogo,
  },
  {
    start: 1863.2,
    end: 2871.1,
    bgColor: "bg-white shadow-md",
    textColor: "text-black",
    logo: darkLogo,
  },
  {
    start: 2871.1,
    bgColor: "bg-white shadow-md",
    textColor: "text-black",
    logo: darkLogo,
  },
];
