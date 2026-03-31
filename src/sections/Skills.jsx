import { motion } from 'framer-motion'
import { FaPython, FaJava, FaReact, FaNode, FaDatabase, FaTools, FaCode, FaGitAlt, FaCog } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      description: 'Core programming languages',
      icon: FaCode,
      skills: ['Python', 'Java', 'C', 'R'],
    },
    {
      category: 'Frontend',
      description: 'Web development & UI',
      icon: FaReact,
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Backend',
      description: 'Server-side technologies',
      icon: FaCog,
      skills: ['FastAPI', 'Node.js','Express', 'Django'],
    },
    {
      category: 'Databases',
      description: 'Data storage & management',
      icon: FaDatabase,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      category: 'AI / ML / Data Science',
      description: 'Core ML & AI expertise',
      icon: FaPython,
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-Learn', 'NumPy', 'Pandas', 'OpenCV'],
    },
    {
      category: 'Tools & Others',
      description: 'Development tools & utilities',
      icon: FaTools,
      skills: ['Git', 'Figma', 'Canva', 'Jupyter Notebook', 'VS Code'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center bg-transparent text-white -mb-px overflow-hidden"
    >
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none" />
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -right-60 w-96 h-96 bg-gradient-to-bl from-brand-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-60 w-96 h-96 bg-gradient-to-tr from-brand-accent/5 to-transparent rounded-full blur-3xl" />
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
            Technical <span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">Skills</span>
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
          viewport={{ margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl bg-transparent border-2 border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300"
              >
                {/* Category Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-brand-accent text-3xl">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{category.category}</h3>
                    <p className="text-xs text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="border-t border-brand-border/50 pt-4 mt-4" />

                {/* Skills as text badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 rounded-lg bg-transparent border border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all text-sm font-medium text-gray-200 hover:text-brand-accent cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ margin: '-50px' }}
          className="mt-16 p-8 rounded-2xl bg-transparent border-2 border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300"
        >
          <h3 className="text-3xl font-black text-white mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { skill: 'Python & Data Science', level: 85 },
              { skill: 'React & Frontend', level: 75 },
              { skill: 'FastAPI & Backend', level: 87 },
              { skill: 'Machine Learning & AI', level: 90 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ margin: '-50px' }}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-200">{item.skill}</span>
                  <span className="font-bold text-brand-accent">{item.level}%</span>
                </div>
                <div className="w-full h-3 bg-brand-bg-primary rounded-full overflow-hidden border border-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ margin: '-50px' }}
                    className="h-full bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </div>
    </section>
  )
}

export default Skills

