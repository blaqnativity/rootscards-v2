// phosphor-icons-react
import {
  DotsThree,
  SignIn,
  ListBullets,
  Code,
  Tag,
  Barcode,
  AddressBook,
  Monitor,
} from "@phosphor-icons/react";

// navmenu
export interface NavItem {
  menu: string;
  url: string;
  icon?: React.FC<{ size?: number }>;
}

// main navmenu
export const navMenu: NavItem[] = [
  // { menu: "About", url: "/about" },
  { menu: "View demo", url: "/demo" },
  // { menu: "Features", url: "/features" },
  { menu: "Documentation", url: "/documentation" },
  { menu: "Pricing", url: "/pricing" },
  // { menu: "Check-in Suite", url: "/check-in-suite" },
  // { menu: "Contact sales", url: "/contact-sales" },
  { menu: "Sign In/Up", url: "https://app.rootscards.com" },
];

// secondary navmenu for documentation
export const custom: NavItem[] = [
  // { menu: "Installation", url: "/installation" },
  // { menu: "Features", url: "/features" },
  // { menu: "Developer Hub", url: "/documentation/developer-hub" },
  // { menu: "API Reference", url: "/documentation/api-reference" },
  // { menu: "Check-in Suite", url: "/documentation/check-in-suite" },
  // { menu: "App Store", url: "/documentation/app-store" },
];

// Icons for the mobile-navbar (main nav-menu)
export const icons = {
  home: DotsThree,
  login: SignIn,
  features: ListBullets,
  docs: Code,
  pricing: Tag,
  checkin: Barcode,
  contact: AddressBook,
  demo: Monitor,
} as const;

export type IconKey = keyof typeof icons;

// mobile-navbar (main nav-menu)
export const mobileMenu: NavItem[] = [
  { menu: "Home", url: "/", icon: DotsThree },
  { menu: "Demo", url: "/demo", icon: Monitor },
  // { menu: "Features", url: "/features", icon: ListBullets },
  { menu: "Documentation", url: "/documentation", icon: Code },
  { menu: "Pricing", url: "/pricing", icon: Tag },
  // { menu: "Check-in Suite", url: "/check-in-suite", icon: Barcode },
  // { menu: "Contact sales", url: "/contact-sales", icon: AddressBook },
  { menu: "Sign In/Up", url: "https://app.rootscards.com", icon: SignIn },
];

// rootscards navigation constants
export interface NavItem {
  menu: string;
  url: string;
  external?: boolean;
  isButton?: boolean; // 👈 for links like "Start free trial"
}
export const headerLeftMenu: NavItem[] = [
  // { menu: "About", url: "/about" },
  { menu: "View demo", url: "/demo", external: true },
  // { menu: "Features", url: "/features" },
  { menu: "Documentation", url: "/documentation" },
];

export const headerRightMenu: NavItem[] = [
  { menu: "Pricing", url: "/pricing" },
  // { menu: "Check-in Suite", url: "/check-in-suite" },
  // { menu: "Contact sales", url: "/contact-sales" },
  { menu: "Sign In/Up", url: "https://app.rootscards.com", external: true },
];
