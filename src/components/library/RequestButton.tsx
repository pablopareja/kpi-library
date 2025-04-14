'use client'

import { RequestIcon } from '@/components/icons/RequestIcon'
import { Button } from '../ui/Button'

interface RequestButtonProps {
  onClick?: () => void
  className?: string
}

export const RequestButton = ({ onClick, className = '' }: RequestButtonProps) => {
  const handleClick = () => {
    onClick?.()
  }

  return (
    <Button
      className={className}
      variant="secondary"
      label="Request"
      icon={<RequestIcon className={'w-8 h-8'} />}
      onClick={handleClick}
    />
  )
}
