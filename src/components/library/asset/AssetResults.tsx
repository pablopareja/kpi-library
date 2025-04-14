'use client'

import { useSearchStore } from '@/stores/useSearchStore'
import { FilterResults } from '../FilterResults'
import { SearchResults } from '../SearchResults'

export const AssetResults = () => {
  const search = useSearchStore(state => state.searchText)

  return <div className="w-full max-w-3xl">{search ? <SearchResults /> : <FilterResults />}</div>
}
