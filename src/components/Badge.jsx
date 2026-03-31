/**
 * Badge Component
 * Reusable badge for tags, labels, and status indicators
 * 
 * Usage:
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning" size="lg">Featured</Badge>
 * <Badge icon={StarIcon} variant="accent">Premium</Badge>
 */
const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  className = '',
}) => {
  const variantClasses = {
    default: 'bg-brand-surface-raised text-brand-text-secondary border border-brand-border',
    primary: 'bg-brand-accent/10 text-brand-accent border border-brand-accent/50',
    secondary: 'bg-blue-500/10 text-blue-400 border border-blue-500/50',
    success: 'bg-green-500/10 text-green-400 border border-green-500/50',
    warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/50',
    error: 'bg-red-500/10 text-red-400 border border-red-500/50',
    accent: 'bg-brand-accent text-black font-semibold',
    ghost: 'bg-transparent text-brand-text-secondary border border-brand-border',
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  const badgeClasses = `
    inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-300
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim()

  return (
    <span className={badgeClasses}>
      {Icon && <Icon size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} className="flex-shrink-0" />}
      {children}
    </span>
  )
}

export default Badge
