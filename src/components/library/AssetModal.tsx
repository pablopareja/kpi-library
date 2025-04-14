'use client'

import { fetchAssetById } from '@/lib/endpoints/fetchAssetById'
import { AssetWithType } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Dialog } from '../ui/Modal'
import { AssetModalContentSkeleton } from './AssetModalContentSkeleton'

export const AssetDialog = () => {
  const [asset, setAsset] = useState<AssetWithType | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

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
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-4xl font-bold">{asset.name}</div>
          <div className="text-sm text-gray-400">{asset.type}</div>
          <p className="text-gray-600 mt-2">{asset.description}</p>
        </div>
      )}
      {!asset && <AssetModalContentSkeleton />}
    </Dialog>
  )
}
