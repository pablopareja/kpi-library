import { AccessRequest } from '@/types'
import { getBaseUrl } from '../getBaseUrl'

/**
 *  This method simulates the call to the API method that sends an access request to
 *  either the whole library or a specific asset
 */
export const sendAccessRequest = async (accessRequest: AccessRequest): Promise<AccessRequest> => {
  const query = new URLSearchParams()
  query.append('description', accessRequest.description)
  if (accessRequest.assetId) {
    query.append('assetId', accessRequest.assetId)
  }

  // We need this when the method is called from Server Components, since there relative URLs can't be resolved automatically
  const baseUrl = getBaseUrl()
  const url = `${baseUrl}/api/access/${
    accessRequest.assetId ? `${accessRequest.assetId}` : ''
  }?${query.toString()}`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(
      `There was an error when sending the access request: ${JSON.stringify(accessRequest)}`
    )
  }

  return res.json()
}
