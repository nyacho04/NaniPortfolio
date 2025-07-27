import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiFlask, SiMysql, SiJira, SiNotion, SiVisualstudiocode, SiOpenai, SiTailwindcss, SiJavascript, SiReact, SiPython } from 'react-icons/si';

function App() {
  const [count, setCount] = useState(0)
  const [isBottomReached, setIsBottomReached] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Detectar cuando estamos cerca del fondo de la página
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setIsBottomReached(true)
      } else {
        setIsBottomReached(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <a href="#projects" className={`scroll-down ${isBottomReached ? 'bottom-reached' : ''}`}>↓</a>
      </div>
      <section id="projects" className="section">
        <div className="section-title">Projects</div>
        <div className="glassmorphism-panel">
          <h3 style={{ color: '#7877c6', marginBottom: '0.8rem', fontFamily: 'Quicksand', fontSize: '1.2rem' }}>Projects i made</h3>
          <p style={{ lineHeight: '1.5', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
            hello
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <div style={{ 
              background: 'rgba(120, 119, 198, 0.1)', 
              padding: '0.8rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(120, 119, 198, 0.2)',
              minWidth: '180px',
              flex: '1'
            }}>
              <h4 style={{ color: '#7877c6', marginBottom: '0.3rem', fontSize: '1rem' }}>Project 1</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Description of project</p>
            </div>
            <div style={{ 
              background: 'rgba(120, 119, 198, 0.1)', 
              padding: '0.8rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(120, 119, 198, 0.2)',
              minWidth: '180px',
              flex: '1'
            }}>
              <h4 style={{ color: '#7877c6', marginBottom: '0.3rem', fontSize: '1rem' }}>Project 2</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Description of project</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>About Me</span>
          <span style={{ marginRight: '-30px' }}>:)</span>
        </div>
        <div className="glassmorphism-panel about-panel">
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h3 style={{ color: '#7877c6', marginBottom: '0.8rem', fontFamily: 'Quicksand', fontSize: '1.2rem' }}>Who Am I?</h3>
              <p style={{ lineHeight: '1.5', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                Hello! My name is <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>Ignacio Devita</span>, and I am 19 years old.
              </p>
              <p style={{ lineHeight: '1.5', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                I'm currently learning <span style={{ color: '#eff7af', fontWeight: 'bold' }}>code</span> and exploring <span style={{ color: '#eff7af', fontWeight: 'bold' }}>web design</span>.
              </p>
              <p style={{ lineHeight: '1.5', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                Passionate about continuous learning in the tech world, I strive to improve every day and expand my knowledge across different areas.
              </p>
              <p style={{ lineHeight: '1.5', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                I'm impatient to get involved in both artistic and <span style={{ color: '#eff7af', fontWeight: 'bold' }}>challenging projects</span>, always bringing a <span style={{ color: '#eff7af', fontWeight: 'bold' }}>creative</span> and <span style={{ color: '#eff7af', fontWeight: 'bold' }}>unique perspective</span>.
              </p>
              <p style={{ lineHeight: '1.5', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                I also take pride in my <span style={{ color: '#eff7af', fontWeight: 'bold' }}>attention to detail</span>, ensuring quality and originality in everything I do.
              </p>
            </div>
            <div style={{ marginTop: '3.8rem' }}>
              <img 
                src="/portfolio-1.webp" 
                alt="Nacho Devita" 
                style={{ 
                  width: '350px', 
                  height: '350px', 
                  borderRadius: '25px',
                  objectFit: 'contain',
                  objectPosition: 'top'
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="tech" className="section">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Technologies & Tools</span>
          <span style={{ marginRight: '-30px' }}>&lt;&gt;</span>
        </div>
        <div className="tech-tools-container">
          <div className="glassmorphism-panel tech-square-panel">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
              <div className="tech-icon-container">
                <FaHtml5 className="tech-icon" style={{ fontSize: '2.2rem', color: '#E34F26', filter: 'drop-shadow(0 0 10px #E34F26)' }} />
                <p className="tech-name">HTML5</p>
              </div>
              <div className="tech-icon-container">
                <FaCss3Alt className="tech-icon" style={{ fontSize: '2.2rem', color: '#1572B6', filter: 'drop-shadow(0 0 10px #1572B6)' }} />
                <p className="tech-name">CSS3</p>
              </div>
              <div className="tech-icon-container">
                <SiJavascript className="tech-icon" style={{ fontSize: '2.2rem', color: '#F7DF1E', filter: 'drop-shadow(0 0 10px #F7DF1E)' }} />
                <p className="tech-name">JavaScript</p>
              </div>
              <div className="tech-icon-container">
                <SiReact className="tech-icon" style={{ fontSize: '2.2rem', color: '#61DAFB', filter: 'drop-shadow(0 0 10px #61DAFB)' }} />
                <p className="tech-name">React</p>
              </div>
              <div className="tech-icon-container">
                <SiPython className="tech-icon" style={{ fontSize: '2.2rem', color: '#3776AB', filter: 'drop-shadow(0 0 10px #3776AB)' }} />
                <p className="tech-name">Python</p>
              </div>
              <div className="tech-icon-container">
                <SiTailwindcss className="tech-icon" style={{ fontSize: '2.2rem', color: '#06B6D4', filter: 'drop-shadow(0 0 10px #06B6D4)' }} />
                <p className="tech-name">Tailwind</p>
              </div>
            </div>
          </div>
          <div className="glassmorphism-panel tech-square-panel">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
              <div className="tech-icon-container">
                <FaGitAlt className="tech-icon" style={{ fontSize: '2.2rem', color: '#F05032', filter: 'drop-shadow(0 0 10px #F05032)' }} />
                <p className="tech-name">Git</p>
              </div>
              <div className="tech-icon-container">
                <FaGithub className="tech-icon" style={{ fontSize: '2.2rem', color: '#181717', filter: 'drop-shadow(0 0 10px #ffffff)' }} />
                <p className="tech-name">GitHub</p>
              </div>
              <div className="tech-icon-container">
                <SiJira className="tech-icon" style={{ fontSize: '2.2rem', color: '#0052CC', filter: 'drop-shadow(0 0 10px #0052CC)' }} />
                <p className="tech-name">Jira</p>
              </div>
              <div className="tech-icon-container">
                <SiNotion className="tech-icon" style={{ fontSize: '2.2rem', color: '#000000', filter: 'drop-shadow(0 0 10px #ffffff)' }} />
                <p className="tech-name">Notion</p>
              </div>
              <div className="tech-icon-container">
                <SiVisualstudiocode className="tech-icon" style={{ fontSize: '2.2rem', color: '#007ACC', filter: 'drop-shadow(0 0 10px #007ACC)' }} />
                <p className="tech-name">VS Code</p>
              </div>
              <div className="tech-icon-container">
                <SiOpenai className="tech-icon" style={{ fontSize: '2.2rem', color: '#10A37F', filter: 'drop-shadow(0 0 10px #10A37F)' }} />
                <p className="tech-name">OpenAI</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
