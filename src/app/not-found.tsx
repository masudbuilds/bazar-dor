import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-220px)] flex flex-col justify-center items-center px-4 py-16 text-center">
      <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 max-w-lg w-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-5">
        {/* Error Badge & Icon */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-green-50 border border-green-100/60 flex items-center justify-center text-4xl shadow-inner">
          🛒
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600">
            ৪০৪ • পৃষ্ঠা পাওয়া যায়নি
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            পাতাটি খুঁজে পাওয়া যায়নি
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed font-normal">
            আপনি যে পাতাটি খুঁজছেন তা মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ রয়েছে।
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] active:scale-95 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <span>←</span>
            <span>হোম পেজে ফিরে যান</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;