import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  icon?: React.ComponentType<{ size?: number }>;
  text?: string;
  textColor?: string; // e.g. "text-gray-800"
  iconBg?: string; // e.g. "bg-gray-800"
  iconColor?: string; // e.g. "text-white"
  btnBg?: string; // e.g. "bg-white"
  btnBorder?: string; // e.g. "border border-gray-300"
  onClick?: () => void;
}

export const BtnMain: React.FC<ButtonProps> = ({
  to,
  icon: Icon,
  text = "Click Me",
  textColor = "text-gray-800",
  iconBg = "bg-gray-800",
  iconColor = "text-white",
  btnBg = "bg-white",
  btnBorder = "border-none",
  onClick,
}) => {
  const classes = `w-fit inline-flex items-center rounded-full font-bold h-10 pl-[3px] py-[2px] pr-4 hover:opacity-90 transition ${btnBg} ${btnBorder}`;

  const content = (
    <>
      {Icon && (
        <span
          className={`flex items-center justify-center h-full w-10 rounded-full p-2 ${iconBg} ${iconColor}`}
        >
          <Icon size={18} />
        </span>
      )}
      <span className={`ml-2 text-sm ${textColor} cursor-pointer`}>{text}</span>
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
