import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCopy, FaCheck } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
  })

  const [copiedEmail, setCopiedEmail] = useState(false)

  const contactDetails = {
    email: 'ashwathnagarajan14@gmail.com',
    phone: '+91 8778103077',
    location: 'Tirupur, Tamil Nadu',
    github: 'https://github.com/AshwathNagarajan',
    linkedin: 'https://linkedin.com/in/ashwath-nagarajan-ad31',
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true, isSuccess: false })

    // Simulated submission - replace with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setFormStatus({ isSubmitting: false, isSuccess: true })
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSuccess: false })
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: contactDetails.email,
      link: `mailto:${contactDetails.email}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: contactDetails.phone,
      link: `tel:${contactDetails.phone}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: contactDetails.location,
      link: '#',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: contactDetails.github,
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: contactDetails.linkedin,
      color: 'hover:text-blue-400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="relative min-h-screen py-20 bg-transparent -mb-px overflow-hidden">
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none" />
      {/* Background Gradient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-amber-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: '-50px' }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Let's <span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-gradient-to-r from-brand-accent to-amber-400 rounded-full mx-auto mb-6"
            style={{ transformOrigin: 'center' }}
          />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm open to internships, collaborations, and exciting project opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="relative space-y-6 md:pl-8">
            {/* Vertical Decorative Bar - Modern */}
            <div className="hidden md:block absolute left-0 top-12 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent via-brand-accent/40 to-transparent z-0 pointer-events-none shadow-lg shadow-brand-accent/20" />
            
            {/* Content Container */}
            <div className="relative z-10">
              {/* Contact Cards */}
              <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const hintTexts = [
                  'Best for project discussions',
                  'Available for quick communication',
                  'Open to remote opportunities'
                ]
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                    viewport={{ margin: '-50px' }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative overflow-visible"
                  >
                    {/* Card Container with layered design */}
                    <div className="relative h-full">
                      {/* Glow backdrop - expands on hover */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.15, opacity: 1 }}
                        className="absolute inset-0 -m-3 rounded-2xl bg-gradient-to-br from-brand-accent/20 via-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                      />

                      {/* Card Base */}
                      <div className="relative rounded-2xl overflow-hidden border-2 border-white group-hover:border-brand-accent transition-all duration-500">
                        {/* Main Content Area */}
                        <div className="relative bg-transparent p-4 rounded-2xl flex items-center gap-4 group-hover:bg-brand-surface-raised/40 transition-all duration-500">
                          
                          {/* Animated Icon Block - Floating */}
                          <motion.div
                            whileHover={{ rotate: 6, scale: 1.12 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            className="relative flex-shrink-0"
                          >
                            {/* Pulsing Halo */}
                            <motion.div
                              animate={{ 
                                boxShadow: [
                                  '0 0 20px rgba(251, 191, 36, 0.4)',
                                  '0 0 40px rgba(251, 191, 36, 0.6)',
                                  '0 0 20px rgba(251, 191, 36, 0.4)'
                                ]
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="absolute inset-0 w-14 h-14 rounded-xl"
                            />

                            {/* Icon Container - Premium Glass */}
                            <div className="relative w-14 h-14 rounded-xl overflow-hidden">
                              {/* Gradient Background */}
                              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/30 to-amber-500/10 group-hover:from-brand-accent/50 group-hover:to-amber-500/20 transition-all duration-500" />
                              
                              {/* Border */}
                              <div className="absolute inset-0 rounded-xl border border-brand-accent/40 group-hover:border-brand-accent/70 transition-all duration-500" />
                              
                              {/* Inner Highlight */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                              
                              {/* Icon */}
                              <div className="relative inset-0 flex items-center justify-center h-14 w-14">
                                <motion.div
                                  whileHover={{ scale: 1.15 }}
                                  className="relative"
                                >
                                  <Icon className="text-xl text-brand-accent group-hover:text-amber-300 transition-colors duration-500" />
                                </motion.div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Content Block */}
                          <div className="flex-1 min-w-0">
                            <motion.h3 
                              className="text-[10px] font-bold text-gray-400 group-hover:text-brand-accent transition-colors duration-500 uppercase tracking-[0.15em] mb-1"
                              initial={{ opacity: 0.7 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {info.label}
                            </motion.h3>
                            <p className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors duration-500 truncate group-hover:text-amber-100">
                              {info.value}
                            </p>
                            <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-500 mt-1.5 leading-tight">
                              {hintTexts[index]}
                            </p>
                          </div>

                          {/* Action Indicator */}
                          <motion.div
                            initial={{ x: 0, opacity: 0.5 }}
                            whileHover={{ x: 4, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 text-gray-500 group-hover:text-brand-accent transition-colors duration-500"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </div>

                        {/* Animated Accent Line - Top */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4 }}
                          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent via-amber-400 to-transparent"
                          style={{ transformOrigin: 'left' }}
                        />
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ margin: '-50px' }}
              className="pt-2"
            >
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Connect
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.45 + index * 0.06 }}
                      viewport={{ margin: '-50px' }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`w-10 h-10 rounded-md bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent hover:border-brand-accent/60 hover:bg-brand-accent/20 transition-all duration-300 ${social.color}`}
                      title={social.name}
                    >
                      <Icon className="text-sm" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Email Copy Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ margin: '-50px' }}
              className="pt-2"
            >
              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full relative overflow-hidden rounded-lg border border-brand-accent/30 p-3 bg-brand-accent/10 hover:border-brand-accent/60 hover:bg-brand-accent/15 transition-all duration-300 flex items-center justify-between"
              >
                <span className="text-sm font-semibold text-brand-accent">Copy Email</span>
                <motion.div
                  animate={{ scale: copiedEmail ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {copiedEmail ? (
                    <FaCheck className="text-green-400 text-lg" />
                  ) : (
                    <FaCopy className="text-brand-accent text-lg group-hover:text-amber-300 transition-colors duration-300" />
                  )}
                </motion.div>
              </motion.button>
              {copiedEmail && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xs text-green-400 mt-2 text-center"
                >
                  ✓ Email copied to clipboard!
                </motion.p>
              )}
            </motion.div>
            </div>  {/* Close relative z-10 content container */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ margin: '-50px' }}
            className="relative overflow-hidden rounded-2xl border-2 border-white p-8 sm:p-10 bg-transparent hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300 group"
          >
            {/* Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-500/15 to-transparent rounded-full blur-3xl -mr-24 -mt-24 group-hover:from-amber-500/25 transition-all duration-400 opacity-0 group-hover:opacity-100" />

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ margin: '-50px' }}
                className="text-2xl font-bold text-white mb-6 group-hover:text-brand-accent transition-colors duration-300"
              >
                Send Me a Message
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ margin: '-50px' }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-brand-surface-input/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-accent/80 focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300 placeholder-gray-500"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  viewport={{ margin: '-50px' }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-brand-surface-input/50 border border-brand-border/40 rounded-lg text-white focus:outline-none focus:border-brand-accent/80 focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ margin: '-50px' }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-brand-surface-input/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-accent/80 focus:ring-2 focus:ring-brand-accent/20 transition-all duration-300 placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  viewport={{ margin: '-50px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formStatus.isSubmitting}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-brand-accent to-amber-400 hover:shadow-lg hover:shadow-brand-accent/50 text-brand-bg-primary font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-brand-bg-primary border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : formStatus.isSuccess ? (
                    <>
                      <FaCheck className="text-lg" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {formStatus.isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm text-center"
                  >
                    ✓ Thank you for reaching out! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
