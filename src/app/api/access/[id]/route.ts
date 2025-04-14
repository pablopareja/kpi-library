import { delay } from '@/lib/utils'
import { NextResponse } from 'next/server'

/**
 * GET /api/access/:id
 * Here I simulate the request that would be used to request access for a specific asset.
 * The value `accessRequestSent: true` is returned for the sake of simplicity
 */
export async function GET(
  _: Request,
  props: { params: Promise<{ id: string; description: string }> }
) {
  const params = await props.params
  await delay(1500) // I simulate a delay of 1.5 seconds for this API endpoint

  // Here I would be implementing the corresponding logic pertaining the access request for
  // a specific asset with id = params.id and with the message params.description

  return NextResponse.json({
    accessRequestSent: true,
    asset: params.id,
    message: params.description,
  })
}
