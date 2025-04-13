'use client'

import { AssetWithType } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { Dialog } from '../ui/Modal'

interface Props {
  asset: AssetWithType
}

export const AssetDialog = ({ asset }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString())
    // I need to be careful and only remove the id from the URL params to keep the
    // rest of the state in place (the filtered state would be overwritten otherwise)
    params.delete('id')

    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <Dialog open={true} onClose={handleClose}>
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-4xl font-bold">{asset.name}</div>
        <div className="text-sm text-gray-400">{asset.type}</div>
        <p className="text-gray-600 mt-2">{asset.description}</p>
      </div>
    </Dialog>
  )
}
