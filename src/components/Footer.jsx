import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/AshwathNagarajan',
      label: 'GitHub',
      hoverColor: 'hover:text-white',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/ashwath-nagarajan-ad31',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <footer className="relative bg-transparent overflow-hidden">
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none\" />
      {/* Background Gradient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-br from-brand-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-tl from-amber-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-50px' }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ margin: '-50px' }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            Ashwath Nagarajan
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ margin: '-50px' }}
            className="max-w-2xl text-gray-400 text-lg leading-relaxed"
          >
            Designed and built with passion for AI, development, and impactful digital experiences.
          </motion.p>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ margin: '-50px' }}
            className="w-24 h-1.5 bg-gradient-to-r from-brand-accent to-amber-400 rounded-full"
            style={{ transformOrigin: 'center' }}
          />

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ margin: '-50px' }}
            className="flex gap-6 justify-center"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                  viewport={{ margin: '-50px' }}
                  whileHover={{ scale: 1.25, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br from-brand-accent/20 to-amber-400/10 border border-white/20 flex items-center justify-center text-brand-accent hover:border-brand-accent/60 transition-all duration-300 group ${social.hoverColor}`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon className="text-lg group-hover:text-amber-300 transition-colors duration-300" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ margin: '-50px' }}
          className="mt-12 pt-8 border-t border-brand-border/20 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {currentYear}{' '}
            <span className="text-white font-semibold">
              Ashwath Nagarajan.
            </span>{' '}
            All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            viewport={{ margin: '-50px' }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-accent/20 to-amber-400/10 border border-white/20 flex items-center justify-center text-brand-accent hover:border-brand-accent/60 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-sm group-hover:text-amber-300 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
