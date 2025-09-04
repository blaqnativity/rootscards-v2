import { createContext, useContext } from "react";
import LogoLight from "/lightLogo.svg";
import LogoDark from "/darkLogo.svg";

// Create context with default values
export const ThemeContext = createContext({
  isDarkBg: false,
  logo: LogoLight,
  // textColor: "text-black",
  // iconColor: "text-white",
  // iconBg: "bg-black",
  // btnBg: "bg-white",
});

// Hook to use theme
export const useTheme = () => useContext(ThemeContext);

// Helper to get theme values
export const getThemeValues = (isDarkBg: boolean) => ({
  isDarkBg,
  logo: isDarkBg ? LogoDark : LogoLight,
  // textColor: isDarkBg ? "text-white" : "text-black",
  // iconColor: isDarkBg ? "text-black" : "text-white",
  // iconBg: isDarkBg ? "bg-white" : "bg-black",
  // btnBg: isDarkBg ? "bg-black" : "bg-white",
});
