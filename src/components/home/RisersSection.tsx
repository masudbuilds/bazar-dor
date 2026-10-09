import { productData } from "@/utils/api";
import ProductCard from "../cards/ProductCard";

const RisersSection = async () => {
  const products = await productData();

  const risers = products
    .filter((p) => p.change.dir === "up" || p.change.pct > 0)
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-rose-600 font-bold text-sm">▲</span>
        <h2 className="text-xl font-bold text-gray-900">আজ দাম বেড়েছে</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {risers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RisersSection;