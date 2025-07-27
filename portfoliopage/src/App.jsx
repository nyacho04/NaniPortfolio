import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';

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
        <div className="section-title">About Me</div>
        <div className="glassmorphism-panel about-panel">
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#7877c6', marginBottom: '0.8rem', fontFamily: 'Quicksand', fontSize: '1.2rem' }}>Who I Am</h3>
              <p style={{ lineHeight: '1.5', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                Passionate about continuous learning in the tech world, I strive to improve every day and expand my knowledge across different areas. I'm eager to get involved in both artistic and challenging projects, always bringing a creative and unique perspective. I also take pride in paying close attention to detail, ensuring quality and originality in everything I do.
              </p>
            </div>
            <img 
              src="/portfolio-1.webp" 
              alt="Nacho Devita" 
              style={{ 
                width: '280px', 
                height: '280px', 
                borderRadius: '12px',
                border: '1px solid rgba(120, 119, 198, 0.2)',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>
      <section id="tech" className="section">
        <div className="section-title">Technologies</div>
        <div className="glassmorphism-panel">
          <h3 style={{ color: '#7877c6', marginBottom: '0.8rem', fontFamily: 'Quicksand', fontSize: '1.2rem' }}>Skills & Tools</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.8rem' }}>
            <div style={{ 
              background: 'rgba(120, 119, 198, 0.1)', 
              padding: '0.8rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(120, 119, 198, 0.2)',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#7877c6', marginBottom: '0.3rem', fontSize: '0.95rem' }}>Frontend</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>React, Vue, HTML, CSS, JavaScript</p>
            </div>
            <div style={{ 
              background: 'rgba(120, 119, 198, 0.1)', 
              padding: '0.8rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(120, 119, 198, 0.2)',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#7877c6', marginBottom: '0.3rem', fontSize: '0.95rem' }}>Backend</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Node.js, Python, Express, Django</p>
            </div>
            <div style={{ 
              background: 'rgba(120, 119, 198, 0.1)', 
              padding: '0.8rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(120, 119, 198, 0.2)',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#7877c6', marginBottom: '0.3rem', fontSize: '0.95rem' }}>Database</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>MongoDB, PostgreSQL, MySQL</p>
            </div>
            <div style={{ 
              background: 'rgba(120, 119, 198, 0.1)', 
              padding: '0.8rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(120, 119, 198, 0.2)',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#7877c6', marginBottom: '0.3rem', fontSize: '0.95rem' }}>Tools</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Git, Docker, AWS, Figma</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
