import React from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiCode, FiTarget, FiAward } from 'react-icons/fi'

function About() {
  const highlights = [
    {
      icon: FiCpu,
      title: 'AI/ML Engineering',
      description:
        'Developing intelligent systems with advanced machine learning, NLP, and computer vision technologies.',
    },
    {
      icon: FiCode,
      title: 'Full Stack Development',
      description:
        'Creating scalable web applications with React, Python, and modern backend frameworks.',
    },
    {
      icon: FiTarget,
      title: 'Problem Solving',
      description:
        'Tackling complex challenges with creative solutions and data-driven decision making.',
    },
    {
      icon: FiAward,
      title: 'Innovation & Impact',
      description:
        'Delivering high-quality projects that create measurable value and drive positive change.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center bg-transparent text-white -mb-px overflow-hidden"
    >
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none" />
      {/* Background gradient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-bl from-brand-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ margin: '-50px' }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ margin: '-50px' }}
            className="w-24 h-1.5 bg-gradient-to-r from-brand-accent to-amber-400 rounded-full mx-auto mb-6"
            style={{ transformOrigin: 'center' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-yellow-400 font-semibold">AI engineer and full-stack developer</span> dedicated to creating intelligent solutions that solve real-world problems and drive innovation.
            </p>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              My expertise spans <span className="text-yellow-400 font-semibold">machine learning, NLP, web development, and system design</span>, with a proven track record of delivering production-grade applications and scalable architectures.
            </p>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I'm committed to continuous learning, collaboration, and using technology as a tool to create meaningful digital experiences and contribute to collaborative teams.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative p-6 rounded-2xl bg-transparent border-2 border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-brand-accent/20 to-amber-400/10 border border-white/20 group-hover:border-brand-accent/80 text-brand-accent transition-all duration-300"
                    >
                      <Icon size={24} />
                    </motion.div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                      {highlight.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About