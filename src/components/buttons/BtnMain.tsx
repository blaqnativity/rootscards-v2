import { useTheme } from "../../context/themeContext";
import { Link } from "react-router-dom";

// main button props
interface ButtonProps {
  to: string;
  icon?: React.ComponentType<{ size?: number }>;
  text: string;
  textColor?: string;
  iconBg?: string;
  iconColor?: string;
  btnBg?: string;
}

export const BtnMain: React.FC<ButtonProps> = ({ to, icon: Icon, text }) => {
  // theme context to change button styles dynamically
  const { btnBg, textColor, iconColor, iconBg } = useTheme();
  return (
    <Link
      to={to}
      className={`inline-flex items-center rounded-full ${btnBg} ${textColor} font-bold h-10 pl-[1px] py-[1px] pr-4 hover:opacity-90 transition`}
    >
      {Icon && (
        <span
          className={`${iconColor} ${iconBg} flex items-center justify-center h-full w-10 rounded-full`}
        >
          <Icon size={18} />
        </span>
      )}

      {/* Text on the right */}
      <span className="ml-2 text-sm">{text}</span>
    </Link>
  );
};
