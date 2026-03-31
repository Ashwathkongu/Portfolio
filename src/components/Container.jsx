import { motion } from 'framer-motion'

/**
 * Container Component
 * Reusable wrapper for page sections with consistent spacing and width management
 * 
 * Usage:
 * <Container size="lg" padding="lg" animated>
 *   <SectionHeading title="My Section" />
 *   <p>Section content here...</p>
 * </Container>
 */
const Container = ({
  children,
  size = 'lg',
  padding = 'section',
  className = '',
  animated = true,
  background = 'primary',
  variant = 'default',
}) => {
  // Size variations for max-width
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-7xl',
    xl: 'max-w-8xl', // Custom from tailwind config
    full: 'w-full',
  }

  // Padding variations
  const paddingClasses = {
    none: 'py-0 px-0',
    sm: 'py-8 sm:py-12 px-4 sm:px-6 lg:px-8',
    md: 'py-12 sm:py-16 px-4 sm:px-6 lg:px-8',
    lg: 'py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8',
    xl: 'py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8',
    section: 'py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8',
  }

  // Background variations
  const backgroundClasses = {
    primary: 'bg-brand-bg-primary',
    secondary: 'bg-brand-bg-secondary',
    tertiary: 'bg-brand-bg-tertiary',
    elevated: 'bg-brand-surface-raised',
    glass: 'bg-white/5 backdrop-blur-md',
    gradient: 'bg-gradient-to-br from-brand-bg-primary to-brand-bg-secondary',
    accent: 'bg-brand-accent/5',
  }

  // Variant styles
  const variantClasses = {
    default: '',
    bordered: 'border border-brand-border rounded-xl',
    card: 'border border-brand-border rounded-xl shadow-card',
    glass: 'border border-white/10 rounded-xl backdrop-blur-md',
    accent: 'border-2 border-brand-accent/30 rounded-xl',
  }

  const containerClasses = `
    relative w-full mx-auto
    ${sizeClasses[size]}
    ${paddingClasses[padding]}
    ${backgroundClasses[background]}
    ${variantClasses[variant]}
  `.trim()

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delayChildren: 0.1 },
    },
  }

  const content = <div className={`${containerClasses} ${className}`}>{children}</div>

  if (animated) {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {content}
      </motion.section>
    )
  }

  return <>{content}</>
}

export default Container
