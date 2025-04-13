import { getAssetIllustration } from '@/lib/getAssetIllustration'
import { AssetSummary } from '@/types'
import clsx from 'clsx'

interface AssetCardProps {
  asset: AssetSummary
  highlighted?: boolean
}

export const AssetCard = ({ asset, highlighted = false }: AssetCardProps) => {
  const Illustration = getAssetIllustration(asset.type)
  return (
    <div
      className={clsx('flex items-center p-4 min-w-80', {
        'bg-white border border-gray-200 rounded border-solid': highlighted,
      })}
    >
      <Illustration className="rounded max-w-24" />
      <div className="flex flex-col gap-2">
        <span className="text-black">{asset.name}</span>
        <span>{asset.description}</span>
        <span className="text-gray-400">{asset.updatedAtDate}</span>
      </div>
    </div>
  )
}
