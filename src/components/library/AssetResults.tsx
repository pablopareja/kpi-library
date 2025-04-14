'use client'

import { useFilterStore } from '@/stores/useFilterStore'
import { useSearchStore } from '@/stores/useSearchStore'
import { FilterBar } from './FilterBar'
import { SearchResults } from './SearchResults'

export const AssetResults = () => {
  const filter = useFilterStore(state => state.filter)
  const search = useSearchStore(state => state.searchText)

  console.log('filter', filter, 'search', search)

  return (
    <div className="w-full">
      {!search && <FilterBar className="max-w-3xl" />}
      {search && <SearchResults />}
      {/* <FeaturedAssets />
      <TrendingAssets /> */}
    </div>
  )
}
