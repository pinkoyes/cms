import React from 'react'

const Button = ({
  children,
  onClick,
  className,
  disabled = false,
  type = 'button',
  size = 'medium',
  variant = 'blue',
}) => {
  const baseClasses = `font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-2 text-lg'
  }

  const variantClasses = {
    blue: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    red: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
    green: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
    black: 'bg-black text-white'
  }

  const disabledClasses = 'opacity-50 cursor-not-allowed'

  const buttonClasses = `
    ${baseClasses}
    ${className}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? disabledClasses : ''}
  `

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
