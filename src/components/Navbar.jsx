import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

/**
 * Navbar Component
 * Premium sticky navbar with glass effect, smooth scroll, and active link detection
 *
 * Features:
 * - Sticky positioning with detached/floating style
 * - Glass morphism effect with blur and semi-transparent background
 * - Responsive mobile hamburger menu
 * - Active link highlighting based on scroll position
 * - Smooth scroll to sections
 * - Subtle hover animations
 * - Accessibility support
 *
 * @component
 * @returns {JSX.Element} Premium navbar component
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ]

  // Detect scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Add scroll shadow effect
      setScrolled(window.scrollY > 20)

      // Detect active section
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if element is near the top of viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
      setIsOpen(false) // Close mobile menu
    }
  }

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <div
          className={`
            absolute left-1/2 -translate-x-1/2 top-4 sm:top-6
            max-w-fit
            flex items-center justify-between
            px-5 sm:px-6 py-3
            rounded-full
            pointer-events-auto
            transition-all duration-300
            ${
              scrolled
                ? 'bg-brand-bg-primary/30 backdrop-blur-2xl border-2 border-white shadow-lg'
                : 'bg-brand-bg-primary/15 backdrop-blur-lg border-2 border-white'
            }
          `}
        >
          {/* Logo / Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <button
              onClick={() => handleNavClick('home')}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent hover:from-brand-accent-light hover:to-brand-accent transition-all duration-300"
            >
              AN 
            </button>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    relative px-2.5 lg:px-3 py-1.5 text-xs lg:text-sm
                    font-medium rounded-lg
                    transition-all duration-300
                    ${
                      isActive
                        ? 'text-brand-accent bg-brand-accent/10'
                        : 'text-brand-text-secondary hover:text-brand-accent hover:bg-brand-accent/5'
                    }
                  `}
                >
                  {item.label}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut',
                    }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-full origin-left"
                  />
                </motion.button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-brand-accent/10 transition-colors duration-300 text-brand-text-secondary hover:text-brand-accent"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed top-20 left-4 right-4 md:hidden z-40
              bg-brand-bg-primary border border-brand-border/30
              rounded-2xl backdrop-blur-xl shadow-xl
              overflow-hidden
            "
          >
            {/* Mobile Navigation Links */}
            <div className="flex flex-col divide-y divide-brand-border/20">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id
                return (
                  <motion.button
                    key={item.id}
                    custom={index}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full px-4 sm:px-6 py-3 sm:py-4 text-left
                      font-medium text-sm sm:text-base
                      transition-all duration-300
                      flex items-center gap-3
                      ${
                        isActive
                          ? 'bg-brand-accent/10 text-brand-accent'
                          : 'text-brand-text-secondary hover:bg-brand-accent/5 hover:text-brand-accent'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mobile-indicator"
                        className="w-1.5 h-1.5 bg-brand-accent rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={isActive ? 'ml-2' : 'ml-3.5'}>
                      {item.label}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
