import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string; // make optional like BtnMain
  icon?: React.ComponentType<{ size?: number }>;
  text?: string;
  textColor?: string; // e.g. "text-gray-800"
  iconBg?: string; // e.g. "bg-gray-800"
  iconColor?: string; // e.g. "text-white"
  btnBg?: string; // e.g. "bg-white"
  btnBorder?: string; // e.g. "border border-gray-300"
  onClick?: () => void;
}

export const BtnSecondary: React.FC<ButtonProps> = ({
  to,
  icon: Icon,
  text = "Book a Demo",
  textColor = "text-gray-800",
  iconBg = "bg-gray-800",
  iconColor = "text-white",
  btnBg = "bg-white",
  btnBorder = "border-none",
  onClick,
}) => {
  const classes = `w-fit inline-flex items-center cursor-pointer rounded-full font-bold h-10 pr-[2px] py-[1px] pl-4 hover:opacity-90 transition ${btnBg} ${btnBorder}`;

  const content = (
    <>
      {/* Text on the left */}
      <span className={`text-xs md:text-sm mr-2 ${textColor}`}>{text}</span>

      {/* Icon on the right */}
      {Icon && (
        <span
          className={`flex items-center justify-center h-full w-10 rounded-full ${iconBg} ${iconColor}`}
        >
          <Icon size={18} />
        </span>
      )}
    </>
  );

  return to ? (
    <Link to={to} className={classes}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};
