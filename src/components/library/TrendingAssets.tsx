import { Suspense } from 'react'
import { AssetList } from './AssetList'
import { AssetListSkeleton } from './AssetListSkeleton'

export const TrendingAssets = () => {
  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-bold">Trending</h2>
      <p className="text-sm text-gray-400">Most popular by community</p>
      <Suspense fallback={<AssetListSkeleton />}>
        <AssetList type="Trending" highlightCards={true} />
      </Suspense>
    </div>
  )
}
