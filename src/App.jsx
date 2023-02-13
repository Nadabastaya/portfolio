import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header copy/Header'
import Projects from './components/projects/Projects'
import Techonologies from './components/technologies/Technologies'

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Techonologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
