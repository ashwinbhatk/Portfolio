import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Interests } from './components/Interests'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
