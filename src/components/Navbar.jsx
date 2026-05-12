import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiUser, FiBook, FiCode, FiBriefcase, FiGrid, FiAward, FiMail } from 'react-icons/fi'

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
    { label: 'Home', id: 'home', icon: FiHome },
    { label: 'About', id: 'about', icon: FiUser },
    { label: 'Education', id: 'education', icon: FiBook },
    { label: 'Skills', id: 'skills', icon: FiCode },
    { label: 'Experience', id: 'experience', icon: FiBriefcase },
    { label: 'Projects', id: 'projects', icon: FiGrid },
    { label: 'Achievements', id: 'achievements', icon: FiAward },
    { label: 'Contact', id: 'contact', icon: FiMail },
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
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.2 } },
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
      {/* Desktop Top Navbar - Icon Only Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pointer-events-none"
      >
        <div
          className={`
            flex items-center justify-center gap-2
            px-4 py-2.5
            rounded-full
            mt-6
            pointer-events-auto
            transition-all duration-300
            ${
              scrolled
                ? 'bg-brand-surface-raised/60 backdrop-blur-2xl border-2 border-blue-500 shadow-lg'
                : 'bg-white/40 backdrop-blur-lg border-2 border-blue-500'
            }
          `}
        >
          {/* Logo - Gradient Text */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <button
              onClick={() => handleNavClick('home')}
            className="text-sm font-black bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent hover:from-brand-accent-light hover:to-brand-accent transition-all duration-300"
            >
              AN
            </button>
          </motion.div>

          {/* Separator */}
          <div className="w-px h-5 bg-brand-border/50" />

          {/* Navigation Icons Only */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  title={item.label}
                  className={`
                    relative p-1.5 rounded-lg
                    flex items-center justify-center
                    transition-all duration-300
                    group
                    ${
                      isActive
                        ? 'text-brand-accent'
                        : 'text-brand-text-secondary hover:text-brand-accent'
                    }
                  `}
                >
                  <Icon size={18} className="shrink-0" />
                  
                  {/* Tooltip on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 px-3 py-1.5 bg-white border-2 border-blue-500 rounded-lg text-xs font-medium text-brand-text-primary whitespace-nowrap pointer-events-none z-50"
                  >
                    {item.label}
                  </motion.div>
                  
                  {/* Active indicator dot below */}
                  <span className="absolute left-1/2 -translate-x-[45%] bottom-0">
                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                      }}
                      className="block w-1.5 h-1.5 bg-brand-accent rounded-full"
                    />
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Top Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <div
          className={`
            absolute left-1/2 -translate-x-1/2 top-3 sm:top-4
            max-w-fit
            flex items-center justify-between
            px-3 sm:px-4 py-2
            rounded-full
            pointer-events-auto
            transition-all duration-300
            ${
              scrolled
                ? 'bg-brand-surface-raised/60 backdrop-blur-2xl border-2 border-blue-500 shadow-lg'
                : 'bg-white/40 backdrop-blur-lg border-2 border-blue-500'
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
              className="text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent hover:from-brand-accent-light hover:to-brand-accent transition-all duration-300"
            >
              AN 
            </button>
          </motion.div>

          {/* Mobile Menu Button - Dynamic Section Icon */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-1.5 rounded-lg hover:bg-brand-accent/10 transition-colors duration-300 text-brand-text-secondary hover:text-brand-accent relative"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {(() => {
                const currentItem = navItems.find(item => item.id === activeSection)
                const CurrentIcon = currentItem?.icon || FiHome
                return (
                  <motion.div
                    key={activeSection}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CurrentIcon size={20} />
                  </motion.div>
                )
              })()}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-text-primary/20 backdrop-blur-md z-30 md:hidden"
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
              fixed inset-0 md:hidden z-40
              bg-brand-bg-primary backdrop-blur-xl
              overflow-hidden pt-20
            "
          >
            {/* Mobile Navigation Links */}
            <div className="flex flex-col divide-y divide-brand-border/20 h-full">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    custom={index}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full px-6 py-6 text-left flex-1
                      font-medium text-base
                      transition-all duration-300
                      flex items-center gap-4
                      ${
                        isActive
                          ? 'bg-brand-accent/10 text-brand-accent border-l-4 border-brand-accent'
                          : 'text-brand-text-secondary hover:bg-brand-accent/5 hover:text-brand-accent'
                      }
                    `}
                  >
                    <Icon size={24} className={isActive ? 'text-brand-accent' : 'text-brand-text-secondary'} />
                    <span>
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
