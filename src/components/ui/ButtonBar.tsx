import clsx from 'clsx'

interface ButtonBarProps {
  options: { label: string; value: string }[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export const ButtonBar = ({ options, value, onChange, className = '' }: ButtonBarProps) => {
  return (
    <div
      className={clsx(
        'flex flex-wrap items-center justify-between gap-2 p-1 bg-gray-200 rounded',
        className
      )}
    >
      {options.map(option => (
        <div
          key={`option-${option.value}`}
          className={clsx(
            'flex flex-1 items-center justify-center px-8 py-2 rounded cursor-pointer transition-colors',
            {
              'bg-white text-black': option.value === value,
              'text-gray-500 hover:text-gray-400': option.value !== value,
            }
          )}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}
