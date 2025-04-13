import { FilterOption } from '@/stores/useFilterStore'
import { AssetSummary } from '@/types'
import { getBaseUrl } from '../getBaseUrl'

export type AssetTypeOptions = FilterOption | 'Trending'

/**
 * Fetches assets from the API.
 * Results retrieved can be filterd by type
 * @param type Asset type to be used for filtering (including special options like 'Featured' and 'Trending')
 * @returns An array of filtered assets -or all of them if no filter is provided
 * @throws If there's an error when failing the assets
 */
export const fetchAssets = async (type?: AssetTypeOptions): Promise<AssetSummary[]> => {
  // We need this when the method is called from Server Components, since there relative URLs can't be resolved automatically
  const baseUrl = getBaseUrl()
  // Build the URL conditionally
  const url = type
    ? `${baseUrl}/api/assets?type=${encodeURIComponent(type)}` // encoded in case type contains spaces or slashes in the future
    : `${baseUrl}/api/assets`

  const res = await fetch(url, {
    next: { revalidate: 0 }, // This is disabling static caching so that data is freshed fresh on every request
    // It could not make sense depending on the frequency with which assets are created/updated
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch assets: ${res.status}`)
  }

  return res.json()
}
