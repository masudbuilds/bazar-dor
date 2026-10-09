"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UserAuthButtons() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      toast.success("সফলভাবে সাইন আউট হয়েছে");
      setDropdownOpen(false);
      router.push("/");
      router.refresh();
    } catch {
      toast.error("সাইন আউট ব্যর্থ হয়েছে");
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-16 h-8 bg-gray-100 rounded-lg animate-pulse" />
        <div className="w-16 h-8 bg-gray-100 rounded-lg animate-pulse" />
      </div>
    );
  }

  if (session?.user) {
    const user = session.user;
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 border border-gray-300 flex items-center justify-center shrink-0">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "User"}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm font-bold text-gray-700">
                {user.name ? user.name[0] : "U"}
              </span>
            )}
          </div>
          <span className="text-sm font-semibold text-gray-800 hidden sm:inline-block">
            {user.name}
          </span>
          <span className="text-gray-400 text-xs">▼</span>
        </button>

        {/* Dropdown Menu matching Figma */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
            <div className="px-4 pb-3 border-b border-gray-100">
              <p className="font-bold text-sm text-gray-900 truncate">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 truncate mt-0.5">
                {user.email}
              </p>
            </div>

            <div className="py-1">
              <Link
                href="/profile"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>👤</span>
                <span>আমার প্রোফাইল</span>
              </Link>
            </div>

            <div className="pt-1 border-t border-gray-100">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors text-left cursor-pointer"
              >
                <span>↩</span>
                <span>সাইন আউট</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Link
        href="/sign-in"
        className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
      >
        সাইন ইন
      </Link>
      <Link
        href="/sign-up"
        className="px-4 py-1.5 text-xs sm:text-sm font-medium bg-[#15803D] hover:bg-[#166534] text-white rounded-lg transition-colors shadow-sm"
      >
        সাইন আপ
      </Link>
    </div>
  );
}
