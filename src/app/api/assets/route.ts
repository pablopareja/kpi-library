import { assets } from '@/data/assets'
import { delay } from '@/lib/utils'
import { NextResponse } from 'next/server'

/**
 * GET /api/assets
 * Here I simulate the request that would be used to get the library assets.
 * This endpoint supports filtering by asset type
 */
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type') // type parameter
  const search = searchParams.get('search')?.toLowerCase() // search parameter

  // Simulate network latency to make Suspense/loading states visible
  await delay(3000)

  let filtered = assets

  // I filter by type first
  // The 'Featured' type is a special case since we're also returning Trending assets in this case
  if (type === 'Featured') {
    filtered = filtered.filter(asset => asset.featured || asset.trending)
  } else if (['Kpi', 'Layout', 'DataViz', 'Storyboard'].includes(type ?? '')) {
    filtered = filtered.filter(asset => asset.type === type)
  }

  // Then I apply text search if present
  // NOTE: this is a simplistic search approach that should be improved in real scenarios
  if (search) {
    filtered = filtered.filter(
      asset =>
        asset.name.toLowerCase().includes(search) ||
        asset.description.toLowerCase().includes(search)
    )
  }

  // Return only summary fields used in cards (not full asset details).
  // I'm doing this to simulate the fact that in a real-world scenario, assets could include properties or details
  // that are not necessary to be returned here and could make the request to take more time unnecessarily
  const summarized = filtered.map(
    ({ id, name, description, type, updatedAtDate, trending, featured }) => ({
      id,
      name,
      description,
      type,
      updatedAtDate,
      trending,
      featured,
    })
  )

  return NextResponse.json(summarized)
}
