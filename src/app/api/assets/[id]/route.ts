import { assets } from '@/data/assets'
import { delay } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

/**
 * GET /api/assets/:id
 * Here I simulate the request that would be used to get the data for a specific asset.
 * Full details from the asset are returned here
 */
export async function GET(_: NextRequest, context: { params: { id: string } }) {
  const params = await context.params
  const id = params.id

  await delay(1500) // I simulate a delay of 1.5 seconds for this API endpoint

  const asset = assets.find(a => a.id === id)

  if (!asset) {
    return NextResponse.json({ error: `Asset not found for id: ${id}` }, { status: 404 })
  }

  return NextResponse.json(asset)
}
