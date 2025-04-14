import { useAssetStore } from '@/stores/useAssetStore'
import { useFilterStore } from '@/stores/useFilterStore'
import { useEffect } from 'react'
import { LoadingText } from '../ui/Loading'
import { AssetList } from './asset/AssetList'
import { FeaturedAssets } from './FeaturedAssets'
import { FilterBar } from './FilterBar'

export const FilterResults = () => {
  const filter = useFilterStore(state => state.filter)
  const { assets, fetchAssets, loading } = useAssetStore()

  useEffect(() => {
    if (filter) {
      fetchAssets({ type: filter })
    }
  }, [filter])

  return (
    <div className="flex flex-col gap-8">
      <FilterBar className="max-w-3xl" />
      {filter !== 'Featured' ? (
        <div>
          {loading && <LoadingText className="w-full text-center" />}
          <AssetList assets={assets} loading={loading} />
        </div>
      ) : (
        <FeaturedAssets assets={assets} loading={loading} />
      )}
    </div>
  )
}
