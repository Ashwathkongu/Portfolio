import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  // Animation variants for different light sheets
  const horizontalMotion = {
    animate: {
      x: [0, 100, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const diagonalMotion = {
    animate: {
      x: [-100, 100, -100],
      y: [50, -50, 50],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const floatingMotion = {
    animate: {
      y: [0, -40, 0],
      x: [20, -20, 20],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const pulseMotion = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 22,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light Sheet 1: Horizontal sweep (Blue-Cyan) */}
      <motion.div
        variants={horizontalMotion}
        animate="animate"
        className="absolute top-1/4 -left-96 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-transparent rounded-full blur-3xl"
      />

      {/* Light Sheet 2: Diagonal movement (Cyan-Blue) */}
      <motion.div
        variants={diagonalMotion}
        animate="animate"
        className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-cyan-400/10 via-blue-500/15 to-transparent rounded-full blur-3xl"
      />

      {/* Light Sheet 3: Floating gentle motion (Yellow accent) */}
      <motion.div
        variants={floatingMotion}
        animate="animate"
        className="absolute bottom-1/4 -left-40 w-72 h-72 bg-gradient-to-br from-yellow-400/8 via-orange-300/5 to-transparent rounded-full blur-3xl"
      />

      {/* Light Sheet 4: Pulsing glow (Blue-Purple) */}
      <motion.div
        variants={pulseMotion}
        animate="animate"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-500/8 to-transparent rounded-full blur-3xl"
      />

      {/* Subtle accent light (Yellow glow, bottom right) */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-400/8 via-amber-300/5 to-transparent rounded-full blur-3xl"
      />

      {/* Far background ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-40 pointer-events-none" />
    </div>
  )
}

export default AnimatedBackground
