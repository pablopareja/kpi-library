import { AssetTypeOptions, fetchAssets } from '@/lib/endpoints/fetchAssets'
import { AssetSummary } from '@/types'
import { create } from 'zustand'

type AssetStore = {
  assets: AssetSummary[] // List of assets from API (only includes the summary data)
  loading: boolean // Loading state of the API calls
  error: string | null // Error message if any
  fetchAssets: (filter: { type?: AssetTypeOptions; search?: string }) => Promise<void> // List API call (GET /api/assets)
}

export const useAssetStore = create<AssetStore>(set => ({
  assets: [],
  loading: false,
  error: null,

  // Fetch summary list of assets (optionally filtered by type)
  fetchAssets: async (filter: { type?: AssetTypeOptions; search?: string } = {}) => {
    set({ loading: true, error: null })
    try {
      const data = await fetchAssets(filter)
      set({ assets: data, loading: false })
    } catch (err) {
      set({ error: 'Failed to load assets', loading: false })
    }
  },
}))
