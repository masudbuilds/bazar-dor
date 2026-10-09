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

interface ProductHeaderProps {
  product: Product;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const isUp = product.change.dir === "up" || product.change.pct > 0;
  const isDown = product.change.dir === "down" || product.change.pct < 0;
  const absPct = Math.abs(product.change.pct);
  const diffPrice = Math.abs(product.today - product.yesterday);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      {/* Left side: Icon, Name, Category Tag & Note */}
      <div className="flex items-start gap-5">
        <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl shrink-0 shadow-inner">
          {product.categoryIcon || "🛒"}
        </div>
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {product.nameBn}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-normal">
            {getUnitText(product.unit)} • {product.categoryNameBn}
          </p>
          <p className="text-xs text-gray-500 pt-1">
            গতকালের তুলনায় আজ দাম{" "}
            <span className="font-semibold text-gray-700">
              {isUp ? "বেড়েছে" : isDown ? "কমেছে" : "অপরিবর্তিত রয়েছে"}
            </span>
            {diffPrice > 0 && ` • ${toBengaliNumber(diffPrice)} টাকা`}
          </p>
        </div>
      </div>

      {/* Right side: Today's Price Box */}
      <div className="bg-[#F8FAF9] border border-gray-100 rounded-xl p-4 sm:p-5 min-w-42.5 text-center self-start md:self-auto">
        <span className="text-[11px] text-gray-500 font-medium block">
          আজকের দাম
        </span>
        <div className="text-3xl font-extrabold text-gray-900 my-1">
          {toBengaliNumber(product.today)}
        </div>
        <div className="text-xs text-gray-500 mb-1.5">
          টাকা / {product.unit === "kg" ? "কেজি" : product.unit === "litre" ? "লিটার" : product.unit === "dozen" ? "ডজন" : product.unit === "piece" ? "পিস" : product.unit}
        </div>
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
          {!isUp && !isDown && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
              <span>—</span>
              <span>০.০%</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
