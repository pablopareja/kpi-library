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
    <div className="flex flex-wrap gap-4">
      {assets.map((asset: AssetSummary) => (
        <div key={`asset-${asset.id}`} className="flex-1 basis-[calc(33.333%-1rem)]">
          <AssetCard asset={asset} highlighted={highlightCards} />
        </div>
      ))}
    </div>
  )
}
