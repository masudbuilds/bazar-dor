export default function ProductLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6 animate-pulse">
      {/* Breadcrumbs skeleton */}
      <div className="h-4 w-48 bg-gray-200 rounded" />

      {/* ProductHeader skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-5 w-full">
          <div className="w-16 h-16 rounded-2xl bg-gray-200 shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="h-7 w-48 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-3 w-40 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="w-36 h-28 bg-gray-100 rounded-xl shrink-0" />
      </div>

      {/* Price Summary skeleton */}
      <div className="space-y-3">
        <div className="h-6 w-32 bg-gray-200 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-5 space-y-3"
            >
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-7 w-28 bg-gray-200 rounded" />
              <div className="h-3 w-36 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Table skeleton */}
      <div className="space-y-3">
        <div className="h-6 w-44 bg-gray-200 rounded" />
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-100 rounded w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
