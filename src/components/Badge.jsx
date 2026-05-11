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
    default: 'bg-brand-surface-raised text-brand-text-secondary border border-blue-500',
    primary: 'bg-brand-accent/10 text-brand-accent border border-brand-accent/50',
    secondary: 'bg-blue-500/10 text-blue-600 border border-blue-500/50',
    success: 'bg-green-500/10 text-green-600 border border-green-500/50',
    warning: 'bg-slate-200/30 text-slate-600 border border-slate-300/50',
    error: 'bg-red-500/10 text-red-600 border border-red-500/50',
    accent: 'bg-brand-accent text-white font-semibold',
    ghost: 'bg-transparent text-brand-text-secondary border border-blue-500',
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
