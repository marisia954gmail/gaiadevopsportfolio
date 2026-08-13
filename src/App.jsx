import Contact from './components/Contact'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Process from './components/Process'
import Projects from './components/Projects'

function App() {
  return (
    <div className="overflow-x-hidden bg-[#f6f8fb] text-[#172033]">
      <Header />
      <main id="home">
        <Hero />
        <Expertise />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App