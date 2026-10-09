import Breadcrumbs from "@/components/product/Breadcrumbs";
import ProductHeader from "@/components/product/ProductHeader";
import PriceSummary from "@/components/product/PriceSummary";
import MarketPriceTable from "@/components/product/MarketPriceTable";
import { Product } from "@/types/Product";
import Link from "next/link";

interface ProductDetailPageProps {
  params: Promise<{ productId: string }>;
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { productId } = await params;

  let product: Product | null = null;

  try {
    const isNumeric = /^\d+$/.test(productId);
    let targetId = productId;

    if (!isNumeric) {
      // Find id from slug
      const allRes = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products",
        {
          next: { revalidate: 3600 },
        }
      );
      if (allRes.ok) {
        const allProducts: Product[] = await allRes.json();
        const matched = allProducts.find((p) => p.slug === productId);
        if (matched) {
          targetId = String(matched.id);
        }
      }
    }

    const res = await fetch(
      `https://api.abcz.workers.dev/api/bazardor/products/${targetId}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (res.ok) {
      product = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch product:", error);
    product = null;
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-2xl border border-gray-100 p-12 max-w-lg mx-auto shadow-sm">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            পণ্যটি খুঁজে পাওয়া যায়নি
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            অনুরোধকৃত পণ্যটির তথ্য এই মুহূর্তে উপলভ্য নেই।
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        categorySlug={product.category}
        categoryNameBn={product.categoryNameBn}
        productNameBn={product.nameBn}
      />

      {/* 2. Product Header */}
      <ProductHeader product={product} />

      {/* 3. Price Summary Stats */}
      <PriceSummary product={product} />

      {/* 4. Market Price Table */}
      <MarketPriceTable product={product} />
    </div>
  );
};

export default ProductDetailPage;
