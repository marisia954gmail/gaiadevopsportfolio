import Contact from './components/Contact'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className=" bg-[#f6f8fb] text-[#172033]">
      <Header />
      <main id="home" className="bg-[#e4e8ee]">
        <Hero />
        <Expertise />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App