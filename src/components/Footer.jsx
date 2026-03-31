import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ashwathnagarajan14@gmail.com',
      href: 'mailto:ashwathnagarajan14@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 877 810 3077',
      href: 'tel:+918778103077',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Tirupur, Tamil Nadu',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/ashwath-nagarajan-ad31',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/AshwathNagarajan',
      label: 'GitHub',
    },
    {
      icon: FaGlobe,
      href: '#home',
      label: 'Portfolio',
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
    <footer className="relative bg-gradient-to-b from-brand-surface-raised/30 to-brand-surface-raised/50 overflow-hidden border-t border-white/10">
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none" />
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Left Column: Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ margin: '-50px' }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Ashwath Nagarajan
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about AI, web technologies, and creating impactful digital experiences.
            </p>
          </motion.div>

          {/* Center-Left Column: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ margin: '-50px' }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Center-Right Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ margin: '-50px' }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-brand-accent transition-colors duration-300 group"
                    >
                      <Icon className="w-5 h-5 flex-shrink-0 group-hover:text-brand-accent" />
                      <span className="text-sm">{info.value}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Right Column: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ margin: '-50px' }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Connect
            </h4>
            <div className="flex gap-3">
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
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-accent/20 to-amber-400/10 border border-white/30 hover:border-brand-accent/60 flex items-center justify-center text-brand-accent transition-all duration-300 group"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon className="text-base group-hover:text-amber-300 transition-colors duration-300" />
                </motion.a>
              )
            })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ margin: '-50px' }}
          className="my-12 h-1 bg-gradient-to-r from-transparent via-brand-accent/80 to-transparent rounded-full"
          style={{ transformOrigin: 'center' }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ margin: '-50px' }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear}{' '}
            <span className="text-gray-400">
              Ashwath Nagarajan.
            </span>{' '}
            All rights reserved.
          </p>

          {/* Built With */}
          <p className="text-xs text-gray-500">
            Designed & Built with ❤️ using React & Tailwind CSS
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            viewport={{ margin: '-50px' }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-accent/20 to-amber-400/10 border border-white/30 hover:border-brand-accent/60 flex items-center justify-center text-brand-accent transition-all duration-300 group"
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
