"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/cards/ProductCard";
import SortDropdown from "@/components/others/SortDropdown";
import { Product } from "@/types/Product";

const toBengaliNumber = (num: number | string): string => {
  return String(num).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
};

interface CategoryHeaderProps {
  nameBn: string;
  icon: string;
  count: number;
}

interface CategoryProductViewProps {
  initialProducts: Product[];
  categoryInfo: CategoryHeaderProps | null;
}

export default function CategoryProductView({
  initialProducts,
  categoryInfo,
}: CategoryProductViewProps) {
  const [sortOrder, setSortOrder] = useState<string>("default");

  // Numeric sorting for challenge C1
  const sortedProducts = useMemo(() => {
    const list = [...initialProducts];
    if (sortOrder === "low-to-high") {
      return list.sort((a, b) => a.today - b.today);
    }
    if (sortOrder === "high-to-low") {
      return list.sort((a, b) => b.today - a.today);
    }
    return list;
  }, [initialProducts, sortOrder]);

  // Empty state (যদি ক্যাটাগরিতে কোনো পণ্য না থাকে বা ভুল ক্যাটাগরি হয়)
  if (!categoryInfo || initialProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-2xl border border-gray-100 p-12 max-w-lg mx-auto shadow-sm">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            কোনো পণ্য পাওয়া যায়নি
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য তালিকাভুক্ত নেই অথবা ক্যাটাগরিটি সঠিক নয়।
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* 1. Category Header Banner Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex items-center gap-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl shrink-0 shadow-inner">
          {categoryInfo.icon}
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {categoryInfo.nameBn}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal">
            {toBengaliNumber(categoryInfo.count)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* 2. Sort Control Bar Card */}
      <div className="bg-white rounded-2xl border border-gray-100 px-6 py-4 flex items-center justify-end shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <SortDropdown currentSort={sortOrder} onSortChange={setSortOrder} />
      </div>

      {/* 3. Items Count Subtitle */}
      <div>
        <p className="text-xs sm:text-sm text-gray-500 font-medium">
          মোট {toBengaliNumber(sortedProducts.length)}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      {/* 4. Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
