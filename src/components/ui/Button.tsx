import clsx from 'clsx'
import React from 'react'

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

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
  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-slate-900 active:bg-slate-950',
  secondary: 'bg-accent text-white hover:bg-slate-500 active:bg-slate-600',
}

export const Button = ({
  label,
  variant = ButtonVariant.Primary,
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
