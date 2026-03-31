import { motion } from 'framer-motion'

/**
 * SectionHeading Component
 * Reusable component for consistent section titles across the portfolio
 * 
 * Usage:
 * <SectionHeading
 *   title="About Me"
 *   subtitle="Learn more about my background and passion"
 *   alignment="center"
 *   showAccentLine
 * />
 */
const SectionHeading = ({
  title,
  subtitle,
  alignment = 'center',
  showAccentLine = true,
  variant = 'primary',
  animated = true,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const content = (
    <div className={`${alignmentClasses[alignment]} mb-8`}>
      {/* Title */}
      <h2
        className={`section-title ${
          variant === 'primary' ? 'text-white' : 'text-gradient-lg'
        }`}
      >
        {title}
      </h2>

      {/* Accent Line */}
      {showAccentLine && (
        <div
          className={`section-accent-line ${
            alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : 'ml-0'
          } mb-6`}
        />
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="section-subtitle-lg text-brand-text-muted">
          {subtitle}
        </p>
      )}
    </div>
  )

  return animated ? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {content}
    </motion.div>
  ) : (
    content
  )
}

export default SectionHeading
