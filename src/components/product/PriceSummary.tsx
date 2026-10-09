import { Product } from "@/types/Product";

const toBengaliNumber = (num: number | string): string => {
  return String(num).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
};

interface PriceSummaryProps {
  product: Product;
}

const PriceSummary = ({ product }: PriceSummaryProps) => {
  const markets = product.markets || [];

  const minPrice =
    markets.length > 0
      ? Math.min(...markets.map((m) => m.min))
      : product.today;

  const maxPrice =
    markets.length > 0
      ? Math.max(...markets.map((m) => m.max))
      : product.today;

  const avgPrice = product.today;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* সর্বনিম্ন দাম */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="text-xs text-gray-500 font-medium block mb-1">
            সর্বনিম্ন দাম
          </span>
          <div className="text-2xl font-extrabold text-emerald-600">
            {toBengaliNumber(minPrice)}{" "}
            <span className="text-sm font-semibold">টাকা</span>
          </div>
          <p className="text-[11px] text-gray-600 mt-2">সবচেয়ে কম দামের বাজার</p>
        </div>

        {/* সর্বাধিক দাম */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="text-xs text-gray-500 font-medium block mb-1">
            সর্বাধিক দাম
          </span>
          <div className="text-2xl font-extrabold text-rose-600">
            {toBengaliNumber(maxPrice)}{" "}
            <span className="text-sm font-semibold">টাকা</span>
          </div>
          <p className="text-[11px] text-gray-600 mt-2">সবচেয়ে বেশি দামের বাজার</p>
        </div>

        {/* গড় দাম */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="text-xs text-gray-500 font-medium block mb-1">
            গড় দাম
          </span>
          <div className="text-2xl font-extrabold text-emerald-600">
            {toBengaliNumber(avgPrice)}{" "}
            <span className="text-sm font-semibold">টাকা</span>
          </div>
          <p className="text-[11px] text-gray-600 mt-2">
            প্রতি {product.unit === "kg" ? "কেজি" : product.unit === "litre" ? "লিটার" : product.unit === "dozen" ? "ডজন" : product.unit === "piece" ? "পিস" : product.unit}-এর হিসাবে
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
