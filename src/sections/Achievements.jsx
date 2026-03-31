import { motion } from 'framer-motion'
import { FaTrophy, FaStar, FaMedal, FaCertificate , FaMicrochip, FaDatabase, FaJs} from 'react-icons/fa'

const Achievements = () => {
  const featuredAchievement = {
    title: 'Secured 1st Prize in Hybrid Coding Streak',
    icon: FaTrophy,
    description: 'Top recognition for excellence in competitive coding with exceptional problem-solving skills and consistent performance.',
    badge: '🏆 1ST PRIZE',
    accentColor: 'from-amber-400 to-yellow-500',
  }

  const otherAchievements = [
    {
      title: 'Smart India Hackathon Finalist',
      icon: FaStar,
      description: 'Recognized finalist in prestigious national-level hackathon for innovative problem-solving.',
      badge: 'FINALIST',
    },
    {
      title: 'Runner Up in Thinkathon 2k26',
      icon: FaMedal,
      description: 'Achievement in competitive innovation competition demonstrating strategic thinking and execution.',
      badge: 'RUNNER UP',
    },
    {
      title: 'Runner Up in Eareyse 2k26',
      icon: FaMedal,
      description: 'Recognition for outstanding performance in tech competition showcasing technical proficiency.',
      badge: 'RUNNER UP',
    },
  ]

  const certifications = [
    {
      title: 'IBM Generative AI',
      icon: FaMicrochip,
      description: 'Professional certification in Generative AI and advanced AI applications.',
      badge: 'CERTIFIED',
    },
    {
      title: 'NASSCOM Data Processing and Visualisation',
      icon: FaDatabase,
      description: 'Specialized certification in data processing techniques and professional data visualization.',
      badge: 'CERTIFIED',
    },
    {
      title: 'Infosys JavaScript',
      icon: FaJs,
      description: 'Advanced JavaScript programming certification from Infosys.',
      badge: 'CERTIFIED',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
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

  const FeaturedIcon = featuredAchievement.icon

  return (
    <section id="achievements" className="relative min-h-screen py-20 bg-transparent -mb-px overflow-hidden">
      {/* Section transition gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.01] via-white/[0.005] to-transparent pointer-events-none" />
      {/* Background Gradient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-yellow-500/5 to-transparent rounded-full blur-3xl" />
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
            Achievements &<span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent"> Certifications</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-gradient-to-r from-brand-accent to-amber-400 rounded-full mx-auto mb-6"
            style={{ transformOrigin: 'center' }}
          />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Recognized achievements and competitive accomplishments demonstrating technical excellence and innovation
          </p>
        </motion.div>

        {/* Featured Achievement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ margin: '-50px' }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-white p-8 sm:p-10 bg-transparent hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300 group">
            {/* Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Accent glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/15 to-transparent rounded-full blur-3xl -mr-32 -mt-32 group-hover:from-amber-500/25 transition-all duration-400 opacity-0 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ margin: '-50px' }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-transparent border-2 border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent flex items-center justify-center transition-all duration-300">
                  <FeaturedIcon className="text-4xl sm:text-5xl text-brand-accent group-hover:text-amber-300 transition-colors duration-300 animate-pulse" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-4">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ margin: '-50px' }}
                    whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' }}
                    className="inline-block px-4 py-1.5 bg-transparent border border-white hover:bg-brand-surface-raised/40 hover:border-brand-accent rounded-full text-sm font-semibold text-white hover:text-brand-accent transition-all"
                  >
                    {featuredAchievement.badge}
                  </motion.span>
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ margin: '-50px' }}
                  className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors duration-300"
                >
                  {featuredAchievement.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ margin: '-50px' }}
                  className="text-gray-300 text-base sm:text-lg leading-relaxed"
                >
                  {featuredAchievement.description}
                </motion.p>
              </div>

              {/* Star decoration */}
              <div className="flex-shrink-0 hidden sm:flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-brand-accent opacity-20"
                >
                  <FaStar className="text-5xl" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {otherAchievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-xl border-2 border-white p-6 bg-transparent backdrop-blur-sm hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300"
              >
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top accent line on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />

                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                    viewport={{ margin: '-50px' }}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-14 h-14 rounded-lg bg-transparent border border-white flex items-center justify-center mb-4 group-hover:border-brand-accent transition-colors duration-300"
                  >
                    <Icon className="text-2xl text-brand-accent group-hover:text-amber-300 transition-colors duration-300" />
                  </motion.div>

                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                    viewport={{ margin: '-50px' }}
                    className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-brand-accent/70 bg-brand-accent/5 rounded-full border border-brand-accent/20 group-hover:bg-brand-accent/20 group-hover:text-brand-accent transition-all duration-300"
                  >
                    {achievement.badge}
                  </motion.span>

                  {/* Title */}
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ margin: '-50px' }}
                    className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300"
                  >
                    {achievement.title}
                  </motion.h4>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Subtle shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-10"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ margin: '-50px' }}
          className="mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
            Professional <span className="bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent">Certifications</span>
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-xl border-2 border-white p-6 bg-transparent backdrop-blur-sm hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300"
                >
                  {/* Glow Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top accent line on hover */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />

                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                      viewport={{ margin: '-50px' }}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-14 h-14 rounded-lg bg-transparent border border-white flex items-center justify-center mb-4 group-hover:border-brand-accent transition-colors duration-300"
                    >
                      <Icon className="text-2xl text-brand-accent group-hover:text-amber-300 transition-colors duration-300" />
                    </motion.div>

                    {/* Badge */}
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                      viewport={{ margin: '-50px' }}
                      className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-brand-accent/70 bg-brand-accent/5 rounded-full border border-brand-accent/20 group-hover:bg-brand-accent/20 group-hover:text-brand-accent transition-all duration-300"
                    >
                      {cert.badge}
                    </motion.span>

                    {/* Title */}
                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                      viewport={{ margin: '-50px' }}
                      className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300"
                    >
                      {cert.title}
                    </motion.h4>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Subtle shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-10"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Credibility Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ margin: '-50px' }}
          className="p-8 rounded-xl border-2 border-white bg-transparent hover:bg-brand-surface-raised/40 hover:border-brand-accent transition-all duration-300 group"
        >
          {/* Glow Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { label: 'Competitions', value: '4' },
              { label: 'Top Placements', value: '4' },
              { label: 'Recognition Rate', value: '100%' },
              { label: 'Years Active', value: '2025-26' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.08 }}
                viewport={{ margin: '-50px' }}
                className="text-center group/stat"
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brand-accent to-amber-400 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.15 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-gray-400 group-hover/stat:text-gray-300 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
