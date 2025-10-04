import { Link } from "react-router-dom";

interface SubmenuItem {
  title: string;
  description: string;
  url: string;
}

interface MegaMenuProps {
  submenu: SubmenuItem[];
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ submenu }) => {
  return (
    <div className="mx-auto text-black bg-white rounded-b-xl p-8 grid grid-cols-3 gap-8 z-[9999] relative">
      {/* Left column */}
      <div className="flex flex-col gap-4">
        <Link
          to="#"
          className="rounded-xl p-4 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 transition"
        >
          <h4 className="font-semibold text-lg">Products Overview</h4>
        </Link>
        <Link
          to="#"
          className="rounded-xl p-4 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 transition"
        >
          <h4 className="font-semibold text-lg">View demo</h4>
        </Link>
      </div>

      {/* Right columns (submenu grid) */}
      <div className="col-span-2 grid grid-cols-2 gap-6">
        {submenu.map((sub, subIdx) => (
          <Link
            key={subIdx}
            to={sub.url}
            className="hover:bg-gray-50 rounded-lg p-3 transition custom-link space-y-3"
          >
            <h5 className="custom-link flex items-center gap-2 text-blue-800">
              {sub.title} →
            </h5>
            <p className="text-sm text-gray-600">{sub.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
