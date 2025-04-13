import { AssetWithType } from '@/types'

/**
 * Fetches full asset details by ID from the API.
 * @param id The unique ID of the asset to be retrieved
 * @returns The full asset object
 * @throws If the asset is not found or the API call fails
 */
export const fetchAssetById = async (id: string): Promise<AssetWithType> => {
  const res = await fetch(`/api/assets/${id}`, {
    next: { revalidate: 0 }, // This is disabling static caching so that data is freshed fresh on every request
    // It could not make sense depending on the frequency with which assets are created/updated
  })

  if (!res.ok) {
    throw new Error(`Asset with id "${id}" not found`)
  }

  return res.json()
}
