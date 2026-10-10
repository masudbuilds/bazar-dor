"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      toast.success("সফলভাবে সাইন আউট হয়েছে");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("সাইন আউট ব্যর্থ হয়েছে");
    }
  };


  if (isPending) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-6 animate-pulse">
        <div className="space-y-2">
          <div className="h-7 w-40 bg-gray-200 rounded" />
          <div className="h-4 w-60 bg-gray-200 rounded" />
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 h-28" />
        <div className="bg-white rounded-2xl border border-gray-100 p-6 h-40" />
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  const user = session.user;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          আমার প্রোফাইল
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      {/* 1. User Info Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "User"}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl font-bold text-gray-700">
                {user.name ? user.name[0] : "👤"}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-gray-900 truncate">
              {user.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 truncate mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto flex-wrap">
          <Link
            href="/profile/update"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#15803D] hover:bg-[#166534] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
          >
            <span>✏️</span>
            <span>তথ্য আপডেট করুন</span>
          </Link>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>↩</span>
            <span>সাইন আউট</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;