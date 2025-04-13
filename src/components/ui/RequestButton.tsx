'use client'

import { RequestIcon } from '@/components/icons/RequestIcon'
import { Button } from './Button'

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
      label="Request"
      icon={<RequestIcon className={'w-8 h-8'} />}
      onClick={handleClick}
    />
  )
}
