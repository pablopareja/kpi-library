export const AssetModalContentSkeleton = () => (
  <div className="flex flex-col gap-16">
    <div className="flex justify-center w-full">Loading asset... </div>
    <div className="animate-pulse">
      <div className="w-2/3 h-4 bg-gray-300 mb-2 rounded" />
      <div className="w-full h-3 bg-gray-300 mb-1 rounded" />
      <div className="w-1/2 h-3 bg-gray-300 rounded" />
    </div>
  </div>
)
