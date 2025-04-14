// Server Component used inside <Suspense> to show asset cards
// Loads data directly from mock API using fetch()

import { AssetSummary } from '@/types'
import { AssetCard } from './AssetCard'
import { AssetListSkeleton } from './AssetListSkeleton'

interface AssetListProps {
  assets: AssetSummary[]
  loading?: boolean
  highlightCards?: boolean
}

export const AssetList = ({ assets, highlightCards = false, loading = false }: AssetListProps) => {
  if (loading) return <AssetListSkeleton />

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
