import Image from "next/image";
import Navbar from "./Navbar";
import PriceTicker from "./PriceTicker";
import Link from "next/link";
import UserAuthButtons from "./UserAuthButtons";
import { Suspense } from "react";
// import { io } from "next/cache";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Header = () => {
  return (
    <header className="bg-white pt-3 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto pb-2">
          <Link 
          href="/" className="flex items-center gap-2">
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
          </Link>
        <UserAuthButtons />
      </div>
      <Suspense fallback={<div className="h-10 border-t border-gray-100 bg-white" />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div className="h-8 border-t border-gray-100 bg-[#FAFAFA]" />}>
        <PriceTicker />
      </Suspense>
    </header>
  );
};

export default Header;
