import clsx from 'clsx'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: ButtonVariant
  icon?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

// base styles for the button
const baseStyles =
  'flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white hover:bg-gray-700 active:bg-gray-800',
  secondary: 'bg-gray-600 text-white hover:bg-gray-400 active:bg-gray-500',
}

export const Button = ({
  label,
  variant = 'primary',
  icon,
  onClick,
  type = 'button',

  className,
  disabled,
  ...props
}: ButtonProps) => {
  // we are combining the base styles with the variant styles and any other
  // extra styles needed depending on the props
  const combined = clsx(
    baseStyles,
    variants[variant],
    disabled && 'opacity-60 cursor-not-allowed',
    className
  )

  return (
    <button type={type} onClick={onClick} className={combined} disabled={disabled} {...props}>
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  )
}
