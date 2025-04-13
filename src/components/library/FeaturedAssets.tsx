import { Suspense } from 'react'
import { AssetList } from './AssetList'
import { AssetListSkeleton } from './AssetListSkeleton'

export const FeaturedAssets = () => {
  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-bold">Featured</h2>
      <p className="text-sm text-gray-400">Curated top picks from this week</p>
      <Suspense fallback={<AssetListSkeleton />}>
        <AssetList type="Featured" highlightCards={true} />
      </Suspense>
    </div>
  )
}
