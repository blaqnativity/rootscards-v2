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
  btnBorder?: string;
}

export const BtnSecondary: React.FC<ButtonProps> = ({
  to,
  icon: Icon,
  text = "Click Me",
  textColor = "text-gray-800",
  iconBg = "bg-gray-800",
  iconColor = "text-white",
  btnBg = "bg-white",
  btnBorder = "border border-none",
}) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center rounded-full font-bold h-10 pr-[2px] py-[1px] pl-4 hover:opacity-90 transition ${btnBg} ${btnBorder}`}
    >
      {/* Text on the left */}
      <span className={`text-sm mr-2 ${textColor}`}>{text}</span>
      {Icon && (
        <span
          className={`flex items-center justify-center h-full w-10 rounded-full ${iconBg} ${iconColor}`}
        >
          <Icon size={18} />
        </span>
      )}
    </Link>
  );
};
