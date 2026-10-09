import { productData } from "@/utils/api";
import ProductCard from "../cards/ProductCard";

const toBengaliNumber = (num: number | string): string => {
  return String(num).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
};

const AllProductsSection = async () => {
  const products = await productData();

  return (
    <section id="সব-পণ্য" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 scroll-mt-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">সব পণ্য</h2>
        <p className="text-xs text-gray-500 mt-1">
          মোট {toBengaliNumber(products.length)}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProductsSection;