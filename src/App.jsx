import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
 
  return (
    <>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>

    </>
  )
}

export default App
