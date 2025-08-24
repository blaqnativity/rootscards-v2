import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to: string;
  icon?: React.ComponentType<{ size?: number }>;
  text: string;
}

export const BtnOutline: React.FC<ButtonProps> = ({ to, icon: Icon, text }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center rounded-full bg-transparent text-white border border-white font-bold h-10 pl-[1px] py-[1px] pr-4 hover:opacity-90 transition"
    >
      {Icon && (
        <span className="flex items-center justify-center h-full w-10 rounded-full bg-white text-black">
          <Icon size={18} />
        </span>
      )}

      {/* Text on the right */}
      <span className="ml-2 text-sm">{text}</span>
    </Link>
  );
};
