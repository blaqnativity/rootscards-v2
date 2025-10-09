import { Link } from "react-router-dom";

interface SubmenuItem {
  title: string;
  description: string;
  url: string;
}

interface MobileMegaMenuProps {
  submenu: SubmenuItem[];
  onClose?: () => void; // optional, to close the menu on link click
}

export const MobileMegaMenu: React.FC<MobileMegaMenuProps> = ({
  submenu,
  onClose,
}) => {
  return (
    <div className="w-full flex flex-col gap-6 mt-4">
      {/* Quick links section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          to="#"
          onClick={onClose}
          className="rounded-lg p-4 text-center font-medium bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 hover:opacity-90 transition"
        >
          Products overview
        </Link>
        <Link
          to="#"
          onClick={onClose}
          className="rounded-lg p-4 text-center font-medium bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 hover:opacity-90 transition"
        >
          View demo
        </Link>
      </div>

      {/* Submenu items */}
      <div className="flex flex-col gap-5 mt-4">
        {submenu.map((sub, subIdx) => (
          <Link
            key={subIdx}
            to={sub.url}
            onClick={onClose}
            className="rounded-lg p-4 border border-gray-200 hover:bg-gray-50 transition space-y-2"
          >
            <h5 className="font-semibold text-lg text-blue-700 flex items-center justify-between">
              {sub.title}
              <span className="text-gray-400 text-sm">→</span>
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
