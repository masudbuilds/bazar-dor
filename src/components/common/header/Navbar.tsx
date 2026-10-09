import { navData } from "@/utils/api";
import Link from "next/link";

const Navbar = async () => {
  const navs = await navData();
  return (
    <div className="border-t border-gray-100">
      <div className="flex flex-wrap gap-8 max-w-7xl mx-auto p-2">
        {navs.map((nav) => (
          <Link
            href={`/category/${nav.slug}`}
            key={nav.id}
            className="flex items-center gap-1 hover:bg-gray-100 cursor-pointer text-black px-2 py-1 rounded-md"
          >
            <span>{nav.icon}</span>
            <span>{nav.nameBn}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
