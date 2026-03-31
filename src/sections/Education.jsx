import { motion } from 'framer-motion'
import { FaBook, FaAward, FaCalendar } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      level: 'bachelor',
      degree: 'Bachelor of Technology',
      specialization: 'Artificial Intelligence and Data Science',
      institution: 'Kongu Engineering College',
      location: 'Perundurai',
      status: 'Currently Pursuing',
      cgpa: '8.57',
      semester: '3rd Semester',
      highlights: [
        'Specialization in AI and Data Science',
        'Advanced coursework in Machine Learning and Neural Networks',
        'Focus on practical applications and research',
      ],
    },
    {
      level: 'secondary',
      degree: 'Higher Secondary',
      institution: 'The Earnest Academy (CBSE)',
      location: 'Tirupur',
      status: 'Completed',
      score: '85.6%',
      highlights: [
        'Strong foundation in Science and Mathematics',
      ],
    },
    {
      level: 'primary',
      degree: 'Secondary School',
      institution: 'The Earnest Academy (CBSE)',
      location: 'Tirupur',
      status: 'Completed',
      score: '87.2%',
      highlights: [
        'Excellence in academics',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="education"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center bg-transparent -mb-px overflow-hidden"
    >
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none" />
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-brand-accent/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-brand-accent/5 to-transparent rounded-full blur-3xl" />
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
            Education <span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">Journey</span>
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {education.map((edu, index) => {
            const isBachelor = edu.level === 'bachelor'
            const isSecondary = edu.level === 'secondary'
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 group ${
                  isBachelor
                    ? 'bg-transparent border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent shadow-lg shadow-brand-accent/5'
                    : isSecondary
                    ? 'bg-transparent border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent'
                    : 'bg-transparent border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent'
                }`}
              >
                {/* Timeline marker */}
                <div className={`absolute -left-4 top-8 w-8 h-8 rounded-full border-4 transition-all ${
                  isBachelor
                    ? 'bg-brand-accent border-brand-bg-primary shadow-lg shadow-brand-accent/50'
                    : isSecondary
                    ? 'bg-brand-accent/60 border-brand-bg-primary'
                    : 'bg-brand-accent/30 border-brand-bg-primary'
                }`} />

                {/* Content */}
                <div className="pl-2">
                  {/* Status badge */}
                  {edu.status && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block mb-3"
                    >
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-accent/20 text-brand-accent border border-white/20">
                        {edu.status}
                      </span>
                    </motion.div>
                  )}

                  {/* Header */}
                  <div className="mb-3">
                    <h3 className={`font-black mb-1 group-hover:text-brand-accent transition-colors ${
                      isBachelor ? 'text-3xl text-white' : isSecondary ? 'text-2xl text-white' : 'text-xl text-gray-200'
                    }`}>
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-brand-accent font-semibold mb-2">{edu.specialization}</p>
                    )}
                  </div>

                  {/* Institution */}
                  <div className="mb-4">
                    <p className={`font-semibold ${isBachelor ? 'text-lg' : isSecondary ? 'text-base' : 'text-sm'} text-gray-300`}>
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-400">{edu.location}</p>
                  </div>

                  {/* CGPA/Score and Semester */}
                  <div className={`flex flex-wrap gap-4 mb-4 text-sm ${
                    isBachelor ? 'gap-6' : ''
                  }`}>
                    {edu.cgpa && (
                      <div className="flex items-center gap-2">
                        <FaAward className="text-brand-accent" size={16} />
                        <span className="text-gray-300">CGPA: <span className="font-semibold text-brand-accent">{edu.cgpa}</span></span>
                      </div>
                    )}
                    {edu.score && (
                      <div className="flex items-center gap-2">
                        <FaAward className="text-brand-accent/70" size={16} />
                        <span className="text-gray-400">Score: <span className="font-semibold text-brand-accent/80">{edu.score}</span></span>
                      </div>
                    )}
                    {edu.semester && (
                      <div className="flex items-center gap-2">
                        <FaBook className="text-brand-accent" size={16} />
                        <span className="text-gray-300">{edu.semester}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  {edu.highlights.length > 0 && (
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1.5 flex-shrink-0 mt-2" />
                          <span className="text-gray-300">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
