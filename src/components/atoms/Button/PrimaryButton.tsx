import React, { ButtonHTMLAttributes } from 'react'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined'
  fullWidth?: boolean
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = '',
  variant = 'filled',
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    'h-10 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 cursor-pointer'

  const variantStyles =
    variant === 'filled'
      ? 'bg-rose-300 text-white hover:bg-rose-500'
      : 'bg-white text-rose-300 border border-rose-300 hover:bg-rose-50 hover:border-rose-500 hover:text-rose-500'

  const widthStyles = fullWidth ? 'w-full' : 'w-auto'

  return (
    <button className={`${baseStyles} ${variantStyles} ${widthStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}
