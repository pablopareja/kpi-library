'use client'

import clsx from 'clsx'
import { SearchIcon } from '../icons/SearchIcon'

interface SearchInputProps {
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export const SearchInput = ({
  onChange,
  placeholder = 'Type to search...',
  className = '',
}: SearchInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return (
    <div
      className={clsx(
        'flex items-center gap-2 px-3 py-1 border border-solid border-gray-500 rounded-[10px]',
        className
      )}
    >
      <SearchIcon className="w-5 h-5 text-gray-500" />
      <input
        className="focus:outline-none"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  )
}
