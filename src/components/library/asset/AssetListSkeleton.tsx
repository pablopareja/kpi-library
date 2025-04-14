// This component is used together with Suspense to show visual feedback to the user
// while the assets are being loaded

const NUMBER_OF_ASSET_PLACEHOLDERS = 6

export const AssetListSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {[...Array(NUMBER_OF_ASSET_PLACEHOLDERS)].map((_, i) => (
        <div
          key={i}
          className="flex-1 min-w-[250px] max-w-sm basis-[calc(33.333%-1rem)] bg-gray-100 animate-pulse rounded p-4 h-[120px]"
        >
          <div className="w-2/3 h-4 bg-gray-300 mb-2 rounded" />
          <div className="w-full h-3 bg-gray-300 mb-1 rounded" />
          <div className="w-1/2 h-3 bg-gray-300 rounded" />
        </div>
      ))}
    </div>
  )
}
