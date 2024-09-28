import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Technologies from './pages/Technologies'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Career from './pages/Career'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="technologies"><Technologies /></section>
        <section id="career"><Career /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App