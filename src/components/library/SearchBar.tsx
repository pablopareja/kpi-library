'use client'

import { useEffect, useState } from 'react'

import { useDebouncedCallback } from '@/hooks/useDebouncedCallback'

import { useSearchStore } from '@/stores/useSearchStore'
import { SearchInput } from '../ui/SearchInput'

// Default time used for debouncing the search call in milliseconds
const DEFAULT_DEBOUNCE_TIMEOUT = 300

export const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>('')
  const setSearchQuery = useSearchStore(state => state.setSearchText)

  const debouncedSetSearchQuery = useDebouncedCallback(setSearchQuery, DEFAULT_DEBOUNCE_TIMEOUT)

  useEffect(() => {
    debouncedSetSearchQuery(searchText)
  }, [searchText])

  const handleSearch = (value: string) => {
    setSearchText(value)
  }
  const handleClear = () => {
    setSearchText('')
  }
  return (
    <SearchInput
      className="w-full mt-8"
      onChange={handleSearch}
      onClear={handleClear}
      value={searchText}
    />
  )
}
