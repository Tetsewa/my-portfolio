import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home2 from './pages/Home2'
import About from './pages/About'
import Technologies from './pages/Technologies'
import Projects from './pages/Projects'
import Projects2 from './pages/Projects2'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
      <Navbar/>
      <Home2/>
      <About/>
      <Technologies/>
      <Projects/>
      <Projects2/>
      <Contact/>
      <Footer/>
    

    </>
  )
}

export default App
