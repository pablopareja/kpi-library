'use client'

import clsx from 'clsx'
import ClearIcon from '../icons/ClearIcon'
import { SearchIcon } from '../icons/SearchIcon'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  showClear?: boolean
  onClear?: () => void
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Type to search...',
  className = '',
  showClear = true,
  onClear,
}: SearchInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  const handleInputClear = () => {
    onClear?.()
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
        className="w-full focus:outline-none"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
      />
      {showClear && value && (
        <div onClick={handleInputClear}>
          <ClearIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      )}
    </div>
  )
}
