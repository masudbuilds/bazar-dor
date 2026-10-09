export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-pulse">
      {/* Category Header Skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-gray-200 shrink-0" />
        <div className="space-y-2">
          <div className="h-7 w-32 bg-gray-200 rounded-md" />
          <div className="h-4 w-48 bg-gray-200 rounded-md" />
        </div>
      </div>

      {/* Sort Bar Skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 px-6 py-4 flex items-center justify-end">
        <div className="h-8 w-36 bg-gray-200 rounded-lg" />
      </div>

      {/* Subtitle Skeleton */}
      <div className="h-4 w-40 bg-gray-200 rounded-md" />

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gray-200 shrink-0" />
              <div className="space-y-2 flex-1">
                <div className="h-4 w-28 bg-gray-200 rounded" />
                <div className="h-3 w-16 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="flex justify-between items-end pt-2">
              <div className="space-y-1.5">
                <div className="h-2.5 w-12 bg-gray-200 rounded" />
                <div className="h-5 w-20 bg-gray-200 rounded" />
              </div>
              <div className="h-6 w-14 bg-gray-200 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
