import { Product } from "@/types/Product";

const toBengaliNumber = (num: number | string): string => {
  return String(num).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
};

interface MarketPriceTableProps {
  product: Product;
}

const MarketPriceTable = ({ product }: MarketPriceTableProps) => {
  const markets = product.markets || [];

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">বাজারভিত্তিক আজকের দাম</h2>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/70 text-gray-500 text-xs font-semibold">
                <th className="py-3.5 px-6">বাজার</th>
                <th className="py-3.5 px-6">বিভাগ</th>
                <th className="py-3.5 px-6 text-center sm:text-left">সর্বনিম্ন</th>
                <th className="py-3.5 px-6 text-center sm:text-left">সর্বাধিক</th>
                <th className="py-3.5 px-6 text-right sm:text-left">গড়</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700">
              {markets.map((item, index) => {
                const avg = ((item.min + item.max) / 2).toFixed(2);
                const avgDisplay = avg.endsWith(".00")
                  ? parseInt(avg, 10)
                  : avg.endsWith("0")
                  ? parseFloat(avg).toFixed(1)
                  : avg;

                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/60 transition-colors"
                  >
                    <td className="py-3.5 px-6 font-medium text-gray-900">
                      {item.market}
                    </td>
                    <td className="py-3.5 px-6 text-gray-500">{item.division}</td>
                    <td className="py-3.5 px-6 text-center sm:text-left">
                      {toBengaliNumber(item.min)} টাকা
                    </td>
                    <td className="py-3.5 px-6 text-center sm:text-left">
                      {toBengaliNumber(item.max)} টাকা
                    </td>
                    <td className="py-3.5 px-6 text-right sm:text-left font-bold text-gray-900">
                      {toBengaliNumber(avgDisplay)} টাকা
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketPriceTable;
