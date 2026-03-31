import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] via-[#0c1423] to-[#020617] text-brand-text-primary selection:bg-brand-accent selection:text-brand-bg-primary relative">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
