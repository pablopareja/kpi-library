import { delay } from '@/lib/utils'
import { NextResponse } from 'next/server'

/**
 * GET /api/access
 * Here I simulate the request that would be used to get the data for a specific asset.
 * Full details from the asset are returned here
 */
export async function GET(_: Request, { params }: { params: { message: string } }) {
  await delay(1500) // I simulate a delay of 1.5 seconds for this API endpoint

  // Here I would be implementing the corresponding logic pertaining the access request for
  // the library as a whole with the message params.message

  return NextResponse.json({ accessRequestSent: true, message: params.message })
}
