import { Suspense } from 'react'
import { AssetList } from './AssetList'
import { AssetListSkeleton } from './AssetListSkeleton'

interface FeaturedAssetsProps {
  search?: string
}

export const FeaturedAssets = ({ search = '' }: FeaturedAssetsProps) => {
  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-bold">Featured</h2>
      <p className="text-sm text-gray-400">Curated top picks from this week</p>
      <Suspense fallback={<AssetListSkeleton />}>
        <AssetList search={search} type="Featured" highlightCards={true} />
      </Suspense>
    </div>
  )
}
