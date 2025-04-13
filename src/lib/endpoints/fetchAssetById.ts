import { AssetWithType } from '@/types'
import { getBaseUrl } from '../getBaseUrl'

/**
 * Fetches full asset details by ID from the API.
 * @param id The unique ID of the asset to be retrieved
 * @returns The full asset object
 * @throws If the asset is not found or the API call fails
 */
export const fetchAssetById = async (id: string): Promise<AssetWithType> => {
  // We need this when the method is called from Server Components, since there relative URLs can't be resolved automatically
  const baseUrl = getBaseUrl()

  const res = await fetch(`${baseUrl}/api/assets/${id}`, {
    next: { revalidate: 0 }, // This is disabling static caching so that data is freshed fresh on every request
    // It could not make sense depending on the frequency with which assets are created/updated
  })

  if (!res.ok) {
    throw new Error(`Asset with id "${id}" not found`)
  }

  return res.json()
}
