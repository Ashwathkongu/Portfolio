import { motion } from 'framer-motion'
import { forwardRef } from 'react'

/**
 * Button Component
 * Reusable, accessible, and highly customizable button component
 * 
 * Usage:
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click Me
 * </Button>
 * 
 * <Button variant="secondary" icon={IconComponent}>
 *   Secondary Action
 * </Button>
 */
const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'right',
      fullWidth = false,
      disabled = false,
      loading = false,
      animated = true,
      href,
      target,
      onClick,
      className = '',
      ...props
    },
    ref
  ) => {
    // Size variations
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-3',
      xl: 'px-10 py-5 text-xl gap-3',
    }

    // Variant styles
    const variantClasses = {
      primary:
        'btn-base bg-brand-accent text-black hover:bg-brand-accent_hover hover:shadow-glow-lg hover:scale-105 active:scale-95',
      secondary:
        'btn-base border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-black hover:shadow-glow',
      ghost:
        'btn-base text-brand-text-secondary hover:text-brand-accent hover:bg-brand-surface-hover bg-transparent',
      accent:
        'btn-base bg-brand-accent/10 text-brand-accent border border-brand-accent/50 hover:bg-brand-accent/20 hover:border-brand-accent/80',
      danger:
        'btn-base bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30 hover:border-red-500/80',
    }

    // Build button classes
    const buttonClasses = `
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${fullWidth ? 'w-full' : ''}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
      inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent cursor-pointer
    `.trim()

    // Button element with motion
    const buttonElement = (
      <motion.button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        {...props}
      >
        {/* Icon - Left */}
        {Icon && iconPosition === 'left' && !loading && (
          <Icon className="flex-shrink-0" size={20} />
        )}

        {/* Loading indicator */}
        {loading && (
          <div className="animate-spin">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}

        {/* Text */}
        <span>{children}</span>

        {/* Icon - Right */}
        {Icon && iconPosition === 'right' && !loading && (
          <Icon className="flex-shrink-0" size={20} />
        )}
      </motion.button>
    )

    // If it's a link button
    if (href) {
      return (
        <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {buttonElement}
        </a>
      )
    }

    return buttonElement
  }
)

Button.displayName = 'Button'

export default Button
