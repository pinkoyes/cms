import React from "react";

const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    fullWidth = false,
    disabled = false,
    className = ''
}) => {
    const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
        success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
        danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
        warning: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500'
    }
    
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    }

    const widthClass = fullWidth ? 'w-full' : ''
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''

    const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClass}
    ${disabledClass}
    ${className}
  `.trim()

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

export default Button;
