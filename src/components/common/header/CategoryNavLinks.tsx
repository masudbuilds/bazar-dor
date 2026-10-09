"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "@/types/Nav";

export default function CategoryNavLinks({ navs }: { navs: Nav[] }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      {navs.map((nav) => {
        const isActive =
          pathname === `/category/${nav.slug}` ||
          pathname.startsWith(`/category/${nav.slug}/`);

        return (
          <Link
            key={nav.id}
            href={`/category/${nav.slug}`}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              isActive
                ? "bg-[#15803D] text-white shadow-sm"
                : "bg-transparent text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>{nav.icon}</span>
            <span>{nav.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
}
