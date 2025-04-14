import { useAssetStore } from '@/stores/useAssetStore'
import { useSearchStore } from '@/stores/useSearchStore'
import { useEffect } from 'react'
import { LoadingText } from '../ui/Loading'
import { AssetList } from './AssetList'

export const SearchResults = () => {
  const searchText = useSearchStore(state => state.searchText)
  const { assets, fetchAssets, loading } = useAssetStore()

  useEffect(() => {
    if (searchText) {
      fetchAssets({ search: searchText })
    }
  }, [searchText])

  return (
    <div className="flex flex-col gap-8 mt-16 w-full">
      <h3 className="font-bold text-xl">Search Results</h3>
      {loading && <LoadingText className="flex justify-center w-full" />}
      <AssetList assets={assets} loading={loading} />
      {!loading && assets.length === 0 && (
        <div className="flex justify-center w-full text-gray-400">
          No assets found for the search provided
        </div>
      )}
    </div>
  )
}
