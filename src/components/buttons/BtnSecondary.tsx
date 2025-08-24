import { Link } from "react-router-dom";

interface ButtonProps {
  to: string;
  text: string;
  textColor?: string;
  btnBg?: string;
}

export const BtnSecondary: React.FC<ButtonProps> = ({
  to,
  text,
  textColor = "text-black",
  btnBg,
}) => {
  return (
    <Link
      to={to}
      className={`${btnBg} ${textColor} px-5 py-3 font-bold rounded-full`}
    >
      {text}
    </Link>
  );
};
