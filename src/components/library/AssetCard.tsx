'use client'

import { getAssetIllustration } from '@/lib/getAssetIllustration'
import { AssetSummary } from '@/types'
import clsx from 'clsx'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface AssetCardProps {
  asset: AssetSummary
  highlighted?: boolean
}

export const AssetCard = ({ asset, highlighted = false }: AssetCardProps) => {
  const Illustration = getAssetIllustration(asset.type)
  const searchParams = useSearchParams()

  // Clone existing params and add/update the `id`
  // Otherwise I would be overwriting the URL state when opening the detail modal
  // and thus losing the previous filtering state when closing it
  const params = new URLSearchParams(searchParams.toString())
  params.set('id', asset.id)

  return (
    <Link
      href={`?${params.toString()}`}
      className={clsx(
        'flex items-start p-4 min-w-80 h-34 gap-4 transition-transform duration-200 hover:scale-[1.02] cursor-pointer',
        {
          'bg-white border border-gray-200 rounded-xl border-solid': highlighted,
        }
      )}
    >
      <div className="rounded-xl p-1 bg-gray-100">
        <Illustration className="text-gray-500 w-24" />
      </div>
      <div className="flex flex-col gap-1 justify-between h-full">
        <div className="flex flex-col gap-1">
          <h4 className="text-black font-bold line-clamp-1" title={asset.name}>
            {asset.name}
          </h4>
          <p className="line-clamp-2">{asset.shortDescription}</p>
        </div>
        <p className="text-gray-400 text-sm">{asset.updatedAtDate}</p>
      </div>
    </Link>
  )
}
