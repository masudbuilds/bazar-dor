import Image from "next/image";
import Link from "next/link";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <section className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 max-w-xl space-y-4">
          {/* Eyebrow / Date pill */}
          <div>
            <span className="inline-block bg-[#EAF7ED] text-[#1E7E34] text-sm font-semibold px-3 py-1 rounded-full">
              {date}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-[38px] font-extrabold text-gray-900 leading-tight">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-normal">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href="#সব-পণ্য"
              className="inline-flex items-center justify-center bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              সব পণ্য দেখুন
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="shrink-0 flex justify-center items-center">
          <Image
            src="/bazar-hero.png"
            alt="বাজার দর"
            height={260}
            width={260}
            className="w-56 h-auto sm:w-64 md:w-72 object-contain"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
