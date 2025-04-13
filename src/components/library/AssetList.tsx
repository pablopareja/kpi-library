// Server Component used inside <Suspense> to show asset cards
// Loads data directly from mock API using fetch()

import { fetchAssets } from '@/lib/endpoints/fetchAssets'
import { FilterOption } from '@/stores/useFilterStore'
import { AssetSummary } from '@/types'
import { AssetCard } from './AssetCard'

interface AssetListProps {
  type: FilterOption | 'Trending'
  highlightCards?: boolean
}

export const AssetList = async ({ type, highlightCards = false }: AssetListProps) => {
  const assets = await fetchAssets(type)

  return (
    <div className="grid grid-cols-3 gap-4">
      {assets.map((asset: AssetSummary) => (
        <div key={`asset-${asset.id}`}>
          <AssetCard asset={asset} highlighted={highlightCards} />
        </div>
      ))}
    </div>
  )
}
