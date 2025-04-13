'use client'

import { useEffect, useState } from 'react'

import { SearchInput } from '../ui/SearchInput'

export const SearchBar = () => {
  const [searchText, setSearchText] = useState<string | null>(null)

  useEffect(() => {}, [searchText])

  const handleSearch = (value: string) => {
    setSearchText(value)
  }
  return <SearchInput className="w-full" onChange={handleSearch} />
}
