import { FilterOption } from '@/stores/useFilterStore'
import { AssetSummary } from '@/types'
import { getBaseUrl } from '../getBaseUrl'

export type AssetTypeOptions = FilterOption | 'Trending'

/**
 * Fetches assets from the API.
 * Results retrieved can be filtered by type &/or searched by a query string.
 *
 * @param filter - An object containing optional filtering parameters:
 *  - `type` (optional): The type of assets to filter by. Can be a `FilterOption` or `'Trending'`.
 *  - `search` (optional): A search query string to filter assets by name or other criteria.
 *
 * @returns An array of filtered assets, or all assets if no filter is provided.
 *
 * @throws If there's an error when fetching the assets, such as a network issue or server error.
 */
export const fetchAssets = async ({
  type,
  search,
}: {
  type?: AssetTypeOptions
  search?: string
}): Promise<AssetSummary[]> => {
  const query = new URLSearchParams()

  if (type) query.append('type', type)
  if (search) query.append('search', search)

  // We need this when the method is called from Server Components, since there relative URLs can't be resolved automatically
  const baseUrl = getBaseUrl()
  const url = `${baseUrl}/api/assets?${query.toString()}`

  console.log('url', url)

  const res = await fetch(url, {
    next: { revalidate: 0 }, // This is disabling static caching so that data is freshed fresh on every request
    // It could not make sense depending on the frequency with which assets are created/updated
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch assets: ${res.status}`)
  }

  return res.json()
}
