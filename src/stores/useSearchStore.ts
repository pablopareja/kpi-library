import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type SearchStore = {
  searchText: string
  setSearchText: (text: string) => void
}

export const useSearchStore = create<SearchStore>()(
  devtools(
    set => ({
      searchText: '',
      setSearchText: text => set({ searchText: text }, false, 'search/setSerchText'), // This is the name of the action that will appear in the dev tools
    }),
    { name: 'SearchStore' } // This is the pointer that will appear in dev tools for debugging purposes
  )
)
