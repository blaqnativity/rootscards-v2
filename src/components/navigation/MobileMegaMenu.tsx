import { Link } from "react-router-dom";

interface SubmenuItem {
  title: string;
  description: string;
  url: string;
}

interface MobileMegaMenuProps {
  submenu: SubmenuItem[];
  onClose?: () => void;
}

export const MobileMegaMenu: React.FC<MobileMegaMenuProps> = ({
  submenu,
  onClose,
}) => {
  return (
    <div className="w-full text-black rounded-b-xl p-6 flex flex-col gap-8 bg-white shadow-lg">
      {/* Gradient quick links section (matches desktop style) */}
      <div className="flex flex-col gap-4">
        <Link
          to="#"
          onClick={onClose}
          className="flex items-center justify-center rounded-xl p-6 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 hover:opacity-90 transition h-24"
        >
          <h4 className="font-semibold text-lg text-center">
            Products Overview
          </h4>
        </Link>
        <Link
          to="#"
          onClick={onClose}
          className="flex items-center justify-center rounded-xl p-6 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 hover:opacity-90 transition h-24"
        >
          <h4 className="font-semibold text-lg text-center">View Demo</h4>
        </Link>
      </div>

      {/* Submenu grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {submenu.map((sub, subIdx) => (
          <Link
            key={subIdx}
            to={sub.url}
            onClick={onClose}
            className="hover:bg-gray-50 rounded-lg p-4 transition border border-gray-100 space-y-2"
          >
            <h5 className="font-semibold text-blue-800 flex items-center justify-between">
              {sub.title} <span className="text-gray-400 text-sm">→</span>
            </h5>
            <p className="text-sm text-gray-600 leading-snug">
              {sub.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
