import { AssetSummary } from '@/types'
import { AssetList } from './AssetList'

interface FeaturedAssetsProps {
  assets: AssetSummary[]
  loading?: boolean
}

export const FeaturedAssets = ({ assets, loading }: FeaturedAssetsProps) => {
  const featuredAssets = assets.filter(asset => asset.featured)
  const trendingAssets = assets.filter(asset => asset.trending)

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-bold">Featured</h2>
          <p className="text-sm text-gray-400">Curated top picks from this week</p>
        </div>
        <AssetList assets={featuredAssets} highlightCards={true} loading={loading} />
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-bold">Trending</h2>
          <p className="text-sm text-gray-400">Most popular by community</p>
        </div>
        <AssetList assets={trendingAssets} highlightCards={true} loading={loading} />
      </div>
    </div>
  )
}
