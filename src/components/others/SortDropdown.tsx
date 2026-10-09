"use client";

interface SortDropdownProps {
  currentSort: string;
  onSortChange: (sortValue: string) => void;
}

const SortDropdown = ({ currentSort, onSortChange }: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500 font-medium">সাজান</span>
      <div className="relative inline-block">
        <select
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 cursor-pointer shadow-sm transition-all"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-to-high">দাম: কম থেকে বেশি</option>
          <option value="high-to-low">দাম: বেশি থেকে কম</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-400">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;