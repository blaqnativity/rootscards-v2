import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  icon?: React.ComponentType<{ size?: number }>;
  text?: string;
  textColor?: string;
  iconBg?: string;
  iconColor?: string;
  btnBg?: string;
  btnBorder?: string;
  onClick?: () => void;
}

export const BtnMain: React.FC<ButtonProps> = ({
  to,
  icon: Icon,
  text = "Click Me",
  textColor = "gray-800",
  iconBg = "gray-800",
  iconColor = "white",
  btnBg = "white",
  btnBorder = "border border-none",
  onClick,
}) => {
  const classes = `inline-flex items-center rounded-full font-bold h-10 pl-[2px] py-[2px] pr-4 hover:opacity-90 transition bg-${btnBg} ${btnBorder}`;

  const content = (
    <>
      {Icon && (
        <span
          className={`flex items-center justify-center h-full w-10 rounded-full p-3 bg-${iconBg} text-${iconColor}`}
        >
          <Icon size={18} />
        </span>
      )}
      <span className={`ml-2 text-sm text-${textColor} cursor-pointer`}>
        {text}
      </span>
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
