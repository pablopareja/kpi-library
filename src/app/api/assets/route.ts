import { assets } from '@/data/assets'
import { delay } from '@/lib/utils'
import { AssetType } from '@/types'
import { NextResponse } from 'next/server'

/**
 * GET /api/assets
 * Here I simulate the request that would be used to get the library assets.
 * This endpoint supports filtering by asset type
 */
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  // Simulate network latency to make Suspense/loading states visible
  await delay(3000)

  let filtered = []

  switch (type) {
    case 'Featured':
      // Return only assets where `featured` is true
      filtered = assets.filter(asset => asset.featured)
      break
    case 'Trending':
      // Return only assets where `trending` is true
      filtered = assets.filter(asset => asset.trending)
      break
    case AssetType.Kpi:
    case AssetType.Layout:
    case AssetType.DataViz:
    case AssetType.Storyboard:
      // Match specific asset types
      filtered = assets.filter(asset => asset.type === type)
      break
    default:
      // No filtering – return all assets
      filtered = assets
  }

  // Return only summary fields used in cards (not full asset details).
  // I'm doing this to simulate the fact that in a real-world scenario, assets could include properties or details
  // that are not necessary to be returned here and could make the request to take more time unnecessarily
  const summarized = filtered.map(({ id, name, description, type, updatedAtDate }) => ({
    id,
    name,
    description,
    type,
    updatedAtDate,
  }))

  return NextResponse.json(summarized)
}
