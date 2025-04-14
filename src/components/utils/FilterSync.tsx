'use client'

import { FilterOption, useFilterStore } from '@/stores/useFilterStore'
import { useSearchStore } from '@/stores/useSearchStore'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

/**
 * This component keeps the Zustand state (filter and searchText)
 * in sync with the URL query parameters (?type=...&search=...).
 *
 * On mount: it reads from the URL and sets Zustand state.
 * On state change: it updates the URL accordingly.
 *
 * This makes the filter/search state:
 * - Persist in the URL for sharing or bookmarking
 * - Automatically restored on page reload
 */
export const FilterSync = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const filter = useFilterStore(state => state.filter)
  const setFilter = useFilterStore(state => state.setFilter)

  const searchText = useSearchStore(state => state.searchText)
  const setSearchText = useSearchStore(state => state.setSearchText)

  // I update Zustand using the URL values (if any) on first load
  useEffect(() => {
    const urlFilter = searchParams.get('type') ?? ''
    const urlSearch = searchParams.get('search') ?? ''

    // I only udpate the Zustand store when values exist in the URL and are actually differet from
    // the ones in the store
    if (urlFilter && urlFilter !== filter) setFilter(urlFilter as FilterOption)
    if (urlSearch && urlSearch !== searchText) setSearchText(urlSearch)
  }, [])

  // I also need to update the URL when the corresponding state from Zustand changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (filter) {
      params.set('type', filter)
    } else {
      params.delete('type')
    }
    if (searchText) {
      params.set('search', searchText)
    } else {
      params.delete('search')
    }

    const queryString = params.toString()
    router.replace(`?${queryString}`, { scroll: false })
  }, [filter, searchText])

  return null
}
