import { Suspense } from 'react'
import { AssetList } from './AssetList'
import { AssetListSkeleton } from './AssetListSkeleton'

interface TrendingAssetsProps {
  search?: string
}

export const TrendingAssets = ({ search = '' }: TrendingAssetsProps) => {
  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-bold">Trending</h2>
      <p className="text-sm text-gray-400">Most popular by community</p>
      <Suspense fallback={<AssetListSkeleton />}>
        <AssetList type="Trending" search={search} highlightCards={true} />
      </Suspense>
    </div>
  )
}
