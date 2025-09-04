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

export const BtnMain: React.FC<ButtonProps> = ({
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
      className={`inline-flex items-center rounded-full font-bold h-10 pl-[2px] py-[2px] pr-4 hover:opacity-90 transition ${btnBg} ${btnBorder}`}
    >
      {Icon && (
        <span
          className={`flex items-center justify-center h-full w-10 rounded-full p-3 ${iconBg} ${iconColor}`}
        >
          <Icon size={18} />
        </span>
      )}

      {/* Text on the right */}
      <span className={`ml-2 text-sm ${textColor}`}>{text}</span>
    </Link>
  );
};
