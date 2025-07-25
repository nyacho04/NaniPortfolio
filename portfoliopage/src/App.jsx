import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar-home">
        <a href="#" className="neon-icon"><FaHome /></a>
      </div>
      <nav className="navbar-blur">
        <div className="navbar-content">
          <div className="navbar-icons">
            <a href="https://www.instagram.com/nacho._.devita/" target="_blank" rel="noopener noreferrer" className="neon-icon"><FaInstagram /></a>
            <a href="https://x.com/Nyacho__" target="_blank" rel="noopener noreferrer" className="neon-icon"><FaTwitter /></a>
            <a href="https://github.com/nyacho04" target="_blank" rel="noopener noreferrer" className="neon-icon"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/idevita/" target="_blank" rel="noopener noreferrer" className="neon-icon"><FaLinkedin /></a>
          </div>
        </div>
      </nav>
      <div className="custom-bg"></div>
      <div className="hero">
        <h1 className="neon-title">Hello World, I'm Nacho</h1>
        <h2 className="subtitle">A Software and Web Developer</h2>
        <a href="#projects" className="scroll-down">↓</a>
      </div>
      <section id="projects" className="section">
        <div className="neon-title">Projects</div>
        <div></div>
      </section>
      <section id="about" className="section">
        <div className="neon-title">About Me</div>
        <div></div>
      </section>
      <section id="tech" className="section">
        <div className="neon-title">Technologies</div>
        <div></div>
      </section>
    </>
  )
}

export default App
