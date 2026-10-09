import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

import { priceTrackerData } from "@/utils/api";

const toBengaliNumber = (num: number | string): string => {
  return String(num).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
};

const getUnitText = (unit: string): string => {
  switch (unit) {
    case "kg":
      return "কেজি";
    case "litre":
      return "লিটার";
    case "dozen":
      return "ডজন";
    case "piece":
      return "পিস";
    default:
      return unit;
  }
};

const PriceTicker = async () => {
  const priceData = await priceTrackerData();
  const movingProducts = priceData.filter(
    (product) => product.change.pct !== 0 && product.change.dir !== "flat"
  );

  return (
    <div className="border-t  border-gray-200 bg-gray-50 overflow-hidden text-xs">
      <MarqueeText direction="right" duration={35} className="py-2.5">
        {movingProducts.map((price) => {
          const isUp = price.change.dir === "up" || price.change.pct > 0;
          const absPct = Math.abs(price.change.pct);

          return (
            <div
              key={price.id}
              className="inline-flex items-center gap-1.5 px-4 border-r border-gray-200 shrink-0 select-none whitespace-nowrap"
            >
              <span>{price.categoryIcon}</span>
              <span className="font-medium text-gray-800">{price.nameBn}</span>
              <span className="text-gray-500">
                {toBengaliNumber(price.today)} টাকা/{getUnitText(price.unit)}
              </span>
              <span
                className={`font-semibold flex items-center gap-0.5 ${
                  isUp ? "text-rose-600" : "text-emerald-600"
                }`}
              >
                <span>{isUp ? "▲" : "▼"}</span>
                <span>{toBengaliNumber(absPct.toFixed(1))}%</span>
              </span>
            </div>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default PriceTicker;
