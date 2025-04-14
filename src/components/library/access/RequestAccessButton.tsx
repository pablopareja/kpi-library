'use client'

import { RequestIcon } from '@/components/icons/RequestIcon'
import { Asset } from '@/types'
import { useState } from 'react'
import { Button } from '../../ui/Button'
import { RequestAccessModal } from './RequestAccessModal'

interface RequestAccessButtonProps {
  onClick?: () => void
  className?: string
  asset?: Asset // it requests access for the whole library when no asset is provided
}

export const RequestAccessButton = ({
  onClick,
  className = '',
  asset,
}: RequestAccessButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    onClick?.()
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <Button
        className={className}
        variant="secondary"
        label="Request"
        icon={<RequestIcon className={'w-6 h-6'} />}
        onClick={handleClick}
      />
      {modalOpen && <RequestAccessModal onClose={handleCloseModal} asset={asset} />}
    </div>
  )
}
