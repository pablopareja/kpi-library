import { FeaturedAssets } from './FeaturedAssets'
import { FilterBar } from './FilterBar'
import { TrendingAssets } from './TrendingAssets'

export const AssetResults = () => {
  return (
    <>
      <FilterBar className="max-w-3xl" />
      <FeaturedAssets />
      <TrendingAssets />
    </>
  )
}
