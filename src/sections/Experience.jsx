import { motion } from 'framer-motion'
import { FaBriefcase, FaTrophy, FaCalendar, FaArrowRight } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      type: 'job',
      title: 'Frontend Developer',
      company: 'Pranav Techy',
      location: 'Remote',
      duration: 'Jan 2026 - Mar 2026',
      startDate: '2026-01',
      responsibilities: [
        'Developed a responsive frontend application using React.js with Vite',
        'Leveraged fast build tools and HMR for efficient development',
        'Implemented modular components and maintained code quality using ESLint',
        'Optimized performance and developer workflow with modern tooling',
      ],
      highlights: ['React.js', 'Vite', 'HMR', 'ESLint'],
      icon: FaBriefcase,
      accentColor: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'achievement',
      title: 'Smart India Hackathon Finalist',
      company: 'National Level Hackathon',
      location: 'India',
      duration: 'Sept 2025 - Nov 2025',
      startDate: '2025-09',
      responsibilities: [
        'Developed a frontend application for offline gamified learning for rural students',
        'Added chapter-wise quizzes, unit assessments, and multilingual support',
        'Designed for scalability and usability',
        'Built for low-spec devices and poor internet connectivity',
        'Included teacher dashboard and student progress/test assignment features',
      ],
      highlights: ['Gamified Learning', 'Multilingual Support', 'Low-spec Optimization', 'Dashboard Design'],
      icon: FaTrophy,
      accentColor: 'from-amber-500 to-orange-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center bg-transparent text-white -mb-px overflow-hidden"
    >
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none" />
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-tl from-amber-500/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ margin: '-50px' }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Work <span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ margin: '-50px' }}
            className="w-24 h-1.5 bg-gradient-to-r from-brand-accent to-amber-400 rounded-full mx-auto mb-6"
            style={{ transformOrigin: 'center' }}
          />
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-100px' }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line and Marker */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-accent via-brand-accent/50 to-transparent ml-7" />
                <div className={`absolute left-0 top-8 w-16 h-16 rounded-full bg-transparent border-2 border-white flex items-center justify-center hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300 group`}>
                  <IconComponent className={`text-2xl text-white group-hover:text-brand-accent transition-colors duration-300`} />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -4, x: 8 }}
                  className="ml-32 p-8 rounded-2xl bg-transparent border-2 border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-brand-accent font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-brand-accent" size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-brand-border/50 my-4" />

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-3">
                      {exp.type === 'job' ? 'Responsibilities' : 'Achievements'}
                    </p>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                        >
                          <FaArrowRight className="text-brand-accent flex-shrink-0 mt-1" size={12} />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border/30">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-accent/10 border border-white/20 text-brand-accent"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
