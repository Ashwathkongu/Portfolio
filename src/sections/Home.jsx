import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Button from '../components/Button'

/**
 * Home/Hero Section
 * Premium hero section with two-column layout
 * Left: text content with greeting, name, role, tagline, CTA buttons, social links
 * Right: stylized image card with glow effects
 */
function Home() {
  // Container animation - staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Social links data
  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/AshwathNagarajan',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/ashwathnagarajan',
      label: 'LinkedIn',
    },
    {
      icon: FiMail,
      href: 'mailto:ashwathnagarajan14@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden -mb-px"
    >
      
      {/* Animated background light effects */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-accent/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />
      
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Section transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0f1c] via-[#0a0f1c]/60 to-transparent pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-12 lg:gap-20 items-center w-full relative">
        
          {/* LEFT COLUMN: Text Content */}
          <motion.div className="space-y-8 flex flex-col justify-center relative z-10 max-w-lg">
            {/* Portfolio Label */}
            <motion.div variants={itemVariants} className='w-fit'>
              <div className="border-2 border-white rounded-full px-4 py-2.5 w-fit">
                <p className="text-gray-300 font-medium text-sm tracking-[0.15em] uppercase flex items-center gap-2">
                  <span>← Portfolio</span>
                </p>
              </div>
            </motion.div>

            {/* Name - Large Bold */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black leading-tight text-white tracking-tight">
                Ashwath<br />
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black leading-tight text-transparent bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text tracking-tight">
                Nagarajan
              </h1>
            </motion.div>

            {/* Role Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-2 border-2 border-gray-500 rounded text-gray-300 font-medium text-sm uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-colors duration-300">
                AI/ML Engineer
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl font-light"
            >
              Building intelligent systems and scalable solutions that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                icon={FiArrowRight}
                iconPosition="right"
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/AshwathNagarajan.pdf'
                  link.download = 'AshwathNagarajan_Resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-6"
            >
              <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Connect:</p>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.2,
                      y: -2,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-lg border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Premium Image Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center relative pr-4"
          >
            {/* Premium Background Glow Layer */}
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-radial-gradient rounded-full blur-3xl pointer-events-none -z-5"
              style={{
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.05) 30%, transparent 70%)',
              }}
            />

            {/* Image Container with Premium Effects */}
            <motion.div
              className="relative flex items-center justify-center w-72 aspect-[3/4]"
            >
              {/* Soft Vignette Background */}
              <motion.div
                className="absolute inset-0 rounded-[24px] pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)',
                }}
              />

              {/* Rounded Backlight */}
              <motion.div
                animate={{
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-brand-accent/30 via-brand-accent/10 to-transparent blur-2xl pointer-events-none -z-10"
              />

              {/* Main Image with Premium Styling */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden border-2 border-white bg-transparent hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300 group">
                {/* Let's Connect Label */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-6 right-6 z-10 px-4 py-2 bg-brand-accent/90 text-white rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  Let's Connect →
                </motion.div>

                {/* Image */}
                <motion.img 
                  src="/ashwath.jpg" 
                  alt="Ashwath Nagarajan" 
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Soft Edge Vignette - Premium fade */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 80% 100% at 50% 100%, transparent 40%, rgba(0,0,0,0.6) 100%)',
                  }}
                />

                {/* Top light vignette */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(251,191,36,0.1) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Testimonial Quote Below Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 max-w-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl"
              >
                <p className="text-xs text-gray-300 italic leading-relaxed text-center">
                  "*Building AI solutions that make a real impact.*"
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Premium Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <p className="text-xs font-light text-gray-500 uppercase tracking-[0.1em]">Scroll</p>
          <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center hover:border-brand-accent/60 transition-colors duration-300">
            <motion.div
              animate={{ y: [4, 8, 4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 h-2 bg-gradient-to-b from-brand-accent to-transparent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
