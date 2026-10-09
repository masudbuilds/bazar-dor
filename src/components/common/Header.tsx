import Image from "next/image";
// import { Suspense } from "react";
// import { io } from "next/cache";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Header = () => {
  return (
    <header className="bg-white p-4 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-lg bg-green-700 w-12 h-12 p-2"
            src="/logo-icon.png"
            alt="বাজার দর"
            width={50}
            height={50}
            priority
          />
          <div>
            <div className="text-2xl font-bold">বাজার দর</div>
            <div>
              <span className="text-xs text-gray-600">{date}</span>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-ghost">সাইন ইন</button>
          <button className="btn  bg-green-600 text-white">সাইন আপ</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
