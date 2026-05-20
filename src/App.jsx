import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', position: 'relative' }}>
      <CursorGlow />
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
