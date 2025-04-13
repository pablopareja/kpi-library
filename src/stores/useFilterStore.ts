import { AssetType } from '@/types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type FilterOption = AssetType | 'Featured'

type FilterState = {
  filter: FilterOption
  setFilter: (filter: FilterOption) => void
}

export const useFilterStore = create<FilterState>()(
  devtools(
    set => ({
      filter: 'Featured',
      setFilter: filter => set({ filter }, false, 'search/setFilter'), // This is the name of the action that will appear in the dev tools
    }),
    { name: 'FilterStore' } // This is the pointer that will appear in dev tools for debugging purposes
  )
)
