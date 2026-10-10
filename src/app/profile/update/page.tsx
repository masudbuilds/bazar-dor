"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (!isPending && !session?.user) {
      toast.error("অনুগ্রহ করে সাইন ইন করুন");
      router.push("/sign-in");
    }
  }, [session, isPending, router]);

  const currentName = name !== null ? name : session?.user?.name || "";

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentName.trim()) {
      toast.error("অনুগ্রহ করে আপনার নাম প্রদান করুন");
      return;
    }

    setIsUpdating(true);

    try {
      const { error } = await authClient.updateUser({
        name: currentName.trim(),
      });

      if (error) {
        toast.error(error.message || "তথ্য আপডেট করা যায়নি");
        setIsUpdating(false);
        return;
      }

      toast.success("তথ্য সফলভাবে আপডেট করা হয়েছে!");
      setIsUpdating(false);
      router.push("/profile");
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "কোনো সমস্যা হয়েছে";
      toast.error(message);
      setIsUpdating(false);
    }
  };

  if (isPending) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 space-y-6 animate-pulse">
        <div className="h-7 w-48 bg-gray-200 rounded" />
        <div className="bg-white rounded-2xl border border-gray-100 p-6 h-56" />
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/profile"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-green-700 transition-colors mb-2"
        >
          <span>←</span>
          <span>প্রোফাইলে ফিরে যান</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          তথ্য আপডেট করুন
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
          আপনার প্রোফাইলের নাম পরিবর্তন বা হালনাগাদ করুন।
        </p>
      </div>

      {/* Form Card (C3 Requirement) */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-5">
        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              নাম (Name)
            </label>
            <input
              type="text"
              value={currentName}
              onChange={(e) => setName(e.target.value)}
              placeholder="আপনার নাম লিখুন"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isUpdating}
              className="w-full sm:w-auto bg-[#15803D] hover:bg-[#166534] disabled:opacity-70 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all shadow-sm cursor-pointer"
            >
              {isUpdating ? "আপডেট হচ্ছে..." : "Update Information"}
            </button>
            <Link
              href="/profile"
              className="w-full sm:w-auto text-center border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all"
            >
              বাতিল করুন
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
