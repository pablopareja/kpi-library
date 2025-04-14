'use client'

import { fetchAssetById } from '@/lib/endpoints/fetchAssetById'
import { getAssetIllustration } from '@/lib/getAssetIllustration'
import { AssetWithType } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FavoriteIcon } from '../icons/FavoriteIcon'
import { Button } from '../ui/Button'
import { Dialog } from '../ui/Modal'
import { TagPill } from '../ui/TagPill'
import { AssetModalContentSkeleton } from './AssetModalContentSkeleton'

export const AssetDialog = () => {
  const [asset, setAsset] = useState<AssetWithType | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const Illustration = getAssetIllustration(asset?.type)

  useEffect(() => {
    if (id) {
      fetchAssetById(id).then(assetValue => setAsset(assetValue))
    }
  }, [id])

  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString())
    // I need to be careful and only remove the id from the URL params to keep the
    // rest of the state in place (the filtered state would be overwritten otherwise)
    params.delete('id')
    router.push(`?${params.toString()}`, { scroll: false })

    // I have to clear the asset so that next time the dialog is opened we start from a clean state
    setAsset(null)
  }

  return (
    <Dialog open={!!id} onClose={handleClose} showCopyLinkButton={true}>
      {asset && (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-xl p-1 bg-gray-100">
            <Illustration className="w-10 h-10" />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold">{asset.name}</div>
              <div className="text-sm text-gray-400 bg-gray-100 rounded p-1">{asset.type}</div>
            </div>
            <p className="text-sm text-gray-400">{asset.shortDescription}</p>
          </div>
          <p>{asset.description}</p>
          {/* Tags */}
          {asset.tags.length > 0 && (
            <div className="flex gap-1">
              {asset.tags.map(tag => (
                <div key={`tag-${tag}`}>
                  <TagPill tag={tag} />
                </div>
              ))}
            </div>
          )}
          <Button
            className="w-full"
            variant="primary"
            icon={<FavoriteIcon className="w-5 h-5" />}
            label="Favorite item"
          />
        </div>
      )}
      {!asset && <AssetModalContentSkeleton />}
    </Dialog>
  )
}
