import { AssetList } from './AssetList'

export const FeaturedAssets = () => {
  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-bold">Featured</h2>
      <p className="text-sm text-gray-400">Curated top picks from this week</p>
      <AssetList type="Featured" highlightCards={true} />
    </div>
  )
}
