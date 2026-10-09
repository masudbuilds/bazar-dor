import { Suspense } from "react";
import { navData } from "@/utils/api";
import CategoryNavLinks from "./CategoryNavLinks";
import Link from "next/link";

const Navbar = async () => {
  const navs = await navData();

  return (
    <div className="border-t border-gray-100 bg-white">
      <Suspense
        fallback={
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            {(navs || []).map((nav) => (
              <Link
                key={nav.id}
                href={`/category/${nav.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-700"
              >
                <span>{nav.icon}</span>
                <span>{nav.nameBn}</span>
              </Link>
            ))}
          </div>
        }
      >
        <CategoryNavLinks navs={navs} />
      </Suspense>
    </div>
  );
};

export default Navbar;
