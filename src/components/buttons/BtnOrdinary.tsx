import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  text?: string;
  textColor?: string; // e.g. "text-gray-800"
  btnBg?: string; // e.g. "bg-white"
  btnBorder?: string; // e.g. "border border-gray-300"
  onClick?: () => void;
}

export const BtnOrdinary: React.FC<ButtonProps> = ({
  to,
  text = "Click Me",
  textColor = "text-gray-800",
  btnBg = "bg-white",
  btnBorder = "border-none",
  onClick,
}) => {
  const classes = `w-full shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] text-center items-center rounded-full font-bold py-3 px-5 hover:opacity-90 transition ${btnBg} ${btnBorder}`;

  const content = (
    <>
      <span className={`text-sm ${textColor} cursor-pointer`}>{text}</span>
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
