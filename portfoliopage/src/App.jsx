import { useState, useEffect } from 'react'
import './App.css'
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiPython, SiTailwindcss, SiJira, SiNotion, SiVisualstudiocode, SiOpenai } from 'react-icons/si';

function App() {
  const [isBottomReached, setIsBottomReached] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showMoreProjects, setShowMoreProjects] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  
  const projectImages = [
    './1project-1.webp',
    './1project-2.webp', 
    './1project-3.webp',
    './1project-4.webp',
    './1project-5.webp'
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setIsBottomReached(true)
      } else {
        setIsBottomReached(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [projectImages.length])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <>
      <div className="navbar-home">
        <a href="#" className="neon-icon" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}><FaHome /></a>
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
      <div id="hero" className="hero">
        <h1 className="neon-title">Hello World, I'm Nacho</h1>
        <h2 className="subtitle">A Software and Web Developer</h2>
        <a href="#projects" className={`scroll-down ${isBottomReached ? 'bottom-reached' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>↓</a>
      </div>
      <section id="projects" className="section">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Projects</span>
          <span style={{ marginRight: '-30px' }}>&lt;&gt;</span>
        </div>
        <div className="glassmorphism-panel">
          
          <h4 style={{ color: '#7877c6', marginBottom: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', fontFamily: 'Quicksand', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Charlotteo</span>
            <span style={{ fontSize: '0.75rem', textDecoration: 'underline', color: '#7877c6' }}>May 2025 - July 2025</span>
          </h4>
          <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textAlign: 'left', lineHeight: '1.5' }}>
            A chatbot-powered tool <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>using OpenAI to analyze VMware metrics</span>, generate technical reports, and provide contextual recommendations in natural language <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>improving troubleshooting and decision-making</span> in Cloud operations.
            <br /><br />
            I was responsible for the <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>frontend development, UI/UX design</span>, and chatbot testing.
            <br /><br />
            This project was developed for a <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>real client: Willin</span>, a technology company seeking to optimize their Cloud infrastructure operations.
            <br /><br />
            It was presented at the <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>Celebra</span> building in <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>Zonamerica</span> as the final project for <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>Holberton School</span>.
          </p>
          
          <p style={{ fontSize: '0.7rem', textAlign: 'left', marginBottom: '0.5rem', color: 'rgb(239, 247, 175)' }}>
            You can visit our website to learn more about the project by clicking on any image!
          </p>
          
          <div style={{ 
            background: 'rgba(120, 119, 198, 0.1)', 
            padding: '1.2rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(120, 119, 198, 0.2)',
            marginBottom: '1rem'
          }}>
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              height: isMobile ? '200px' : '300px', 
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <a 
                href="https://nyacho04.github.io/vmware_landing_page/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  height: '100%',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src={projectImages[currentImageIndex]} 
                  alt={`Charlotteo project ${currentImageIndex + 1}`}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    animation: 'fadeIn 0.6s ease-in-out'
                  }}
                  key={currentImageIndex}
                />
              </a>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button 
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              style={{
                background: 'rgba(120, 119, 198, 0.2)',
                border: '1px solid rgba(120, 119, 198, 0.4)',
                borderRadius: '8px',
                padding: '0.5rem 1.2rem',
                color: 'rgba(120, 119, 198, 0.8)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                margin: '0 auto',
                outline: 'none',
                userSelect: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(120, 119, 198, 0.3)'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(120, 119, 198, 0.2)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              {showMoreProjects ? 'Show Less Projects' : 'Show More Projects'}
            </button>
          </div>
          
          <div style={{ 
            overflow: 'hidden',
            transition: 'all 0.5s ease-in-out',
            maxHeight: showMoreProjects ? '2000px' : '0px',
            opacity: showMoreProjects ? 1 : 0,
            marginTop: showMoreProjects ? '2rem' : '0'
          }}>
            <h4 style={{ color: '#7877c6', marginBottom: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', fontFamily: 'Quicksand', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>AirBnB Clone API</span>
              <span style={{ fontSize: '0.75rem', textDecoration: 'underline', color: '#7877c6' }}>Feb 2025 - Apr 2025</span>
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textAlign: 'left', lineHeight: '1.5' }}>
              Built a RESTful API using Flask for an AirBnB clone, featuring full CRUD operations, JWT authentication, and role-based access control. Refactored the codebase with Python.
            </p>
            
            <p style={{ fontSize: '0.7rem', textAlign: 'left', marginTop: '0.5rem', color: 'rgb(239, 247, 175)' }}>
              You can visit the repository to learn more about the project by clicking in <a href="https://github.com/nazarena-aranda/holbertonschool-hbnb" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'rgb(239, 247, 175)' }}>this link</a>!
            </p>
            
            <h4 style={{ color: '#7877c6', marginBottom: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', fontFamily: 'Quicksand', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
              <span>HolbertonSchool Simple Shell</span>
              <span style={{ fontSize: '0.75rem', textDecoration: 'underline', color: '#7877c6' }}>Dec 2024 - Jan 2025</span>
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textAlign: 'left', lineHeight: '1.5' }}>
              This is a custom implementation of a "simple shell" in C, The project includes a set of functions like it allows you to manage variables, handle basic errors and execute commands.
            </p>
            
            <p style={{ fontSize: '0.7rem', textAlign: 'left', marginTop: '0.5rem', color: 'rgb(239, 247, 175)' }}>
              You can visit the repository to learn more about the project by clicking in <a href="https://github.com/nyacho04/holbertonschool-simple_shell" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'rgb(239, 247, 175)' }}>this link</a>!
            </p>
            
            <h4 style={{ color: '#7877c6', marginBottom: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', fontFamily: 'Quicksand', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
              <span>HolbertonSchool Printf</span>
              <span style={{ fontSize: '0.75rem', textDecoration: 'underline', color: '#7877c6' }}>Nov 2024 - Dec 2025</span>
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textAlign: 'left', lineHeight: '1.5' }}>
              This _printf function is a simplified implementation of the standard printf function in C. this can be able to interpret and display text in the console based on the provided arguments.
            </p>
            
            <p style={{ fontSize: '0.7rem', textAlign: 'left', marginTop: '0.5rem', color: 'rgb(239, 247, 175)' }}>
              You can visit the repository to learn more about the project by clicking in <a href="https://github.com/nyacho04/holbertonschool-printf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'rgb(239, 247, 175)' }}>this link</a>!
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="section">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>About Me</span>
          <span style={{ marginRight: '-30px' }}>:)</span>
        </div>
        <div className="glassmorphism-panel about-panel">
          <div style={{ display: 'flex', gap: isMobile ? '1rem' : '1.5rem', alignItems: 'flex-start', flexDirection: isMobile ? 'column' : 'row' }}>
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
            <div style={{ marginTop: isMobile ? '1rem' : '3.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src="./portfolio-1.webp" 
                alt="Nacho Devita" 
                style={{ 
                  width: isMobile ? '250px' : '350px', 
                  height: isMobile ? '250px' : '350px', 
                  borderRadius: '25px',
                  objectFit: 'contain',
                  objectPosition: 'top'
                }}
              />
              <p style={{ fontSize: '0.7rem', textAlign: 'center', marginTop: '1rem', color: 'rgb(239, 247, 175)' }}>
                Do you want to learn more about me? download my CV <a href="./Ignacio Devita - CV en.pdf" download style={{ textDecoration: 'underline', color: 'rgb(239, 247, 175)' }}>here</a>!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="tech" className="section">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Technologies & Tools</span>
          <span style={{ marginRight: '-30px' }}>&lt;&gt;</span>
        </div>
        <div className="tech-tools-container" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
          <div className="glassmorphism-panel tech-square-panel">
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '2rem', justifyContent: 'center', alignItems: 'center' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '2rem', justifyContent: 'center', alignItems: 'center' }}>
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
      <footer>
        Nani :D - 2025
      </footer>
    </>
  )
}

export default App
