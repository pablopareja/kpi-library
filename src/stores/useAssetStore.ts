import { fetchAssetById } from '@/lib/endpoints/fetchAssetById'
import { AssetTypeOptions, fetchAssets } from '@/lib/endpoints/fetchAssets'
import { AssetSummary, AssetWithType } from '@/types'
import { create } from 'zustand'

type AssetStore = {
  assets: AssetSummary[] // List of assets from API (only includes the summary data)
  selectedAsset: AssetWithType | null // Details of a selected asset
  loading: boolean // Loading state of the API calls
  error: string | null // Error message if any
  fetchAssets: (filter: { type?: AssetTypeOptions; search?: string }) => Promise<void> // List API call (GET /api/assets)
  fetchAssetById: (id: string) => Promise<void> // Detail API call (GET /api/assets/:id)
}

export const useAssetStore = create<AssetStore>(set => ({
  assets: [],
  selectedAsset: null,
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

  // Fetch full detail for a specific asset
  fetchAssetById: async id => {
    set({ loading: true, error: null })
    try {
      const data = await fetchAssetById(id)
      set({ selectedAsset: data, loading: false })
    } catch (err) {
      set({ error: `Asset with id ${id} not found`, loading: false })
    }
  },
}))
