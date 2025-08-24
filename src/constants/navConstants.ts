// phosphor-icons-react
// import {
//   DotsThree,
//   SignIn,
//   ListBullets,
//   Code,
//   Tag,
//   Barcode,
//   AddressBook,
//   Monitor,
// } from "@phosphor-icons/react";

// navmenu
export interface NavItem {
  menu: string;
  url: string;
  icon?: React.FC<{ size?: number }>;
}

// main navmenu
export const navMenu: NavItem[] = [
  // { menu: "About", url: "/about" },
  { menu: "View demo", url: "#" },
  // { menu: "Features", url: "/features" },
  { menu: "Documentation", url: "#" },
  { menu: "Pricing", url: "#" },
  // { menu: "Check-in Suite", url: "/check-in-suite" },
  // { menu: "Contact sales", url: "/contact-sales" },
  { menu: "Sign In/Up", url: "https://app.rootscards.com" },
];
