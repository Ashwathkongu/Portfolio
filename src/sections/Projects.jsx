import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar, FaRobot, FaBrain, FaFlask } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cattle Breed Prediction System',
      description: 'AI-powered web application leveraging YOLOv8 for real-time cattle breed detection. Built with a scalable FastAPI backend and PostgreSQL database, featuring Ollama integration for advanced analytics.',
      techStack: ['YOLOv8', 'FastAPI', 'PostgreSQL', 'React.js', 'Ollama'],
      github: 'https://github.com/BHARANI259/cattle_breed',
      featured: true,
      accentColor: 'from-purple-500 to-pink-500',
      tasks: [
        'YOLOv8 model integration for breed detection',
        'RESTful API design with FastAPI',
        'Scalable database architecture',
        'Real-time inference pipeline',
      ],
    },
    {
      id: 2,
      title: 'Smart AI Notes Summarizer',
      description: 'Offline NLP-based system for intelligent notes summarization with lightweight model implementation. Features advanced quiz generation, multimedia learning capabilities, and secure local processing.',
      techStack: ['React.js', 'FastAPI', 'NLP', 'Python', 'JavaScript'],
      github: 'https://github.com/AshwathNagarajan/AI-Notes-Generat',
      featured: false,
      accentColor: 'from-blue-500 to-cyan-500',
      tasks: [
        'NLP model optimization for offline use',
        'Quiz generation algorithm',
        'Multimedia integration',
        'Lightweight inference',
      ],
    },
    {
      id: 3,
      title: 'Gamified Learning Platform',
      description: 'Offline-first gamified learning platform designed for rural education accessibility. Optimized for low-spec devices with poor connectivity, emphasizing user engagement and progressive learning.',
      techStack: ['JavaScript', 'HTML', 'CSS', 'SVG', 'Offline-first Design'],
      github: 'https://github.com/Dharunkumar0/funfinity/tree/main/',
      featured: false,
      accentColor: 'from-amber-500 to-orange-500',
      tasks: [
        'Low-spec device optimization',
        'Offline-first architecture',
        'Gamification mechanics',
        'Accessibility features',
      ],
    },
  ]
3
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
      id="projects"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center bg-transparent text-white -mb-px overflow-hidden"
    >
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none" />
      {/* Background Gradient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: '-50px' }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            Featured <span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-gradient-to-r from-brand-accent to-amber-400 rounded-full mx-auto mb-6"
            style={{ transformOrigin: 'center' }}
          />
          <p className="text-lg text-gray-400">Building intelligent solutions with modern technologies and AI/ML expertise</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                project.featured
                  ? 'lg:col-span-2 lg:row-span-2 bg-transparent border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent'
                  : 'bg-transparent border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent'
              }`}
            >
              {/* Glow Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Background Gradient Accent */}
              <div
                className={`absolute top-0 right-0 w-72 h-72 opacity-0 group-hover:opacity-20 transition-opacity duration-400 rounded-full blur-3xl bg-gradient-to-br ${project.accentColor}`}
              />

              {/* Content */}
              <div className={`relative p-8 h-full flex flex-col ${project.featured ? 'lg:p-12' : ''}`}>
                {project.featured && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                    {/* Left Column: Content */}
                    <div className="flex flex-col">
                      {/* Featured Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ margin: '-50px' }}
                        className="inline-flex items-center gap-2 mb-4 w-fit"
                      >
                        <FaStar className="text-brand-accent animate-pulse" size={16} />
                        <span className="text-sm font-bold text-brand-accent uppercase tracking-wider">Featured</span>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ margin: '-50px' }}
                        className="font-black mb-4 text-white group-hover:text-brand-accent transition-colors duration-300 text-4xl"
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        viewport={{ margin: '-50px' }}
                        className="text-gray-300 mb-6 leading-relaxed flex-grow text-lg"
                      >
                        {project.description}
                      </motion.p>

                      {/* Key Tasks/Features */}
                      <div className="mb-8 space-y-2">
                        {project.tasks.map((task, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.08 }}
                            viewport={{ margin: '-50px' }}
                            className="flex gap-2 text-sm text-gray-300 hover:text-gray-100 transition-colors"
                          >
                            <span className="text-brand-accent mt-1 flex-shrink-0">→</span>
                            <span>{task}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6 pb-6 border-t border-brand-border/50">
                        <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.25 + idx * 0.06 }}
                              viewport={{ margin: '-50px' }}
                              whileHover={{ scale: 1.08, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-bg-primary border border-white/20 hover:border-brand-accent/70 text-gray-200 hover:text-brand-accent transition-all"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-3 mt-auto pt-4">
                        <motion.a
                          href={project.github}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ margin: '-50px' }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-accent/10 border border-white/20 text-brand-accent hover:bg-brand-accent/20 transition-all font-semibold text-sm"
                        >
                          <FaGithub size={16} />
                          GitHub
                        </motion.a>
                      </div>
                    </div>

                    {/* Right Column: Visual Icon */}
                    <div className="hidden lg:flex items-center justify-center relative">
                      {/* Background glow layers */}
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} rounded-full blur-3xl opacity-20`}
                      />

                      {/* Main icon container */}
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="relative z-10 flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="w-40 h-40 rounded-full border-2 border-brand-accent/30 flex items-center justify-center"
                        >
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="w-32 h-32 rounded-full border-2 border-brand-accent/50 flex items-center justify-center relative"
                          >
                            {/* Multiple rotating rings */}
                            {project.id === 1 && (
                              <>
                                <FaBrain className="text-6xl text-brand-accent absolute" style={{ animation: 'pulse 2s infinite' }} />
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                  className="absolute w-24 h-1 bg-gradient-to-r from-brand-accent to-transparent"
                                />
                              </>
                            )}
                            {project.id === 2 && (
                              <FaRobot className="text-6xl text-brand-accent" style={{ animation: 'pulse 2s infinite' }} />
                            )}
                            {project.id === 3 && (
                              <FaFlask className="text-6xl text-brand-accent" style={{ animation: 'pulse 2s infinite' }} />
                            )}
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      {/* Floating particles */}
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            x: [0, Math.cos(i * 120 * Math.PI / 180) * 40, 0],
                            y: [0, Math.sin(i * 120 * Math.PI / 180) * 40, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.3,
                          }}
                          className="absolute w-2 h-2 bg-brand-accent rounded-full opacity-60"
                          style={{
                            left: '50%',
                            top: '50%',
                            marginLeft: '-4px',
                            marginTop: '-4px',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {!project.featured && (
                  <div className="flex flex-col">
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ margin: '-50px' }}
                      className="font-black mb-4 text-white group-hover:text-brand-accent transition-colors duration-300 text-2xl"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      viewport={{ margin: '-50px' }}
                      className="text-gray-300 mb-6 leading-relaxed flex-grow text-base"
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <div className="mb-6 pb-6 border-t border-brand-border/50">
                      <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.25 + idx * 0.06 }}
                            viewport={{ margin: '-50px' }}
                            whileHover={{ scale: 1.08, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-bg-primary border border-white/20 hover:border-brand-accent/70 text-gray-200 hover:text-brand-accent transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 mt-auto pt-4">
                      <motion.a
                        href={project.github}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ margin: '-50px' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-accent/10 border border-white/20 text-brand-accent hover:bg-brand-accent/20 transition-all font-semibold text-sm"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ margin: '-50px' }}
          className="text-center pt-8"
        >
          <p className="text-gray-400 mb-6">Interested in more projects?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-brand-accent to-amber-400 hover:shadow-lg hover:shadow-brand-accent/50 transition-all font-bold text-brand-bg-primary"
          >
            Get in Touch
            <FaExternalLinkAlt size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
