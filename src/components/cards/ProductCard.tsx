import Link from "next/link";
import { Product } from "@/types/Product";

const toBengaliNumber = (num: number | string): string => {
  return String(num).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
};

const getUnitText = (unit: string): string => {
  switch (unit) {
    case "kg":
      return "প্রতি কেজি";
    case "litre":
      return "প্রতি লিটার";
    case "dozen":
      return "প্রতি ডজন";
    case "piece":
      return "প্রতি পিস";
    default:
      return unit.startsWith("প্রতি") ? unit : `প্রতি ${unit}`;
  }
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isUp = product.change.dir === "up" || product.change.pct > 0;
  const isDown = product.change.dir === "down" || product.change.pct < 0;
  const isFlat = !isUp && !isDown;
  const absPct = Math.abs(product.change.pct);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-gray-200 transition-all duration-200"
    >
      {/* Top Row: Icon + Name and Unit */}
      <div className="flex items-center gap-3.5 mb-5">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl shrink-0 border border-gray-100/80">
          {product.categoryIcon || "🛒"}
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900 text-base group-hover:text-green-700 transition-colors truncate">
            {product.nameBn}
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            {getUnitText(product.unit)}
          </p>
        </div>
      </div>

      {/* Bottom Row: Today's Price + Change Badge */}
      <div className="flex items-end justify-between pt-1">
        <div>
          <span className="block text-[11px] text-gray-600 font-medium mb-0.5">
            আজকের দাম
          </span>
          <div className="text-lg font-extrabold text-gray-900">
            {toBengaliNumber(product.today)}{" "}
            <span className="text-sm font-semibold text-gray-700">টাকা</span>
          </div>
        </div>

        {/* Change Badge */}
        <div>
          {isUp && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-rose-50 text-rose-600">
              <span>▲</span>
              <span>{toBengaliNumber(absPct.toFixed(1))}%</span>
            </span>
          )}
          {isDown && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600">
              <span>▼</span>
              <span>{toBengaliNumber(absPct.toFixed(1))}%</span>
            </span>
          )}
          {isFlat && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
              <span>—</span>
              <span>০.০%</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
