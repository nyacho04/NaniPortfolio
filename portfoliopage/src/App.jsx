import { useState, useEffect } from 'react'
import './App.css'
import { FaInstagram, FaGithub, FaLinkedin, FaHome, FaEnvelope, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiJavascript, SiReact, SiPython, SiTailwindcss, SiJira, SiNotion, SiVisualstudiocode, SiOpenai, SiFastapi, SiFlask, SiCplusplus } from 'react-icons/si';

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
        const offset = 15
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <div className="navbar-home">
        <a href="#" className="neon-icon" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><FaHome /></a>
      </div>
      <nav className="navbar-blur">
        <div className="navbar-content">
          <div className="navbar-icons">
            <a href="https://www.instagram.com/nacho._.devita/" target="_blank" rel="noopener noreferrer" className="neon-icon"><FaInstagram /></a>
            <a href="https://x.com/Nyacho__" target="_blank" rel="noopener noreferrer" className="neon-icon"><FaXTwitter /></a>
            <a href="https://github.com/nyacho04" target="_blank" rel="noopener noreferrer" className="neon-icon"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/idevita/" target="_blank" rel="noopener noreferrer" className="neon-icon"><FaLinkedin /></a>
            <a href="mailto:ignacio.devita.4@gmail.com" className="neon-icon"><FaEnvelope /></a>
          </div>
        </div>
      </nav>
      <div className="custom-bg"></div>
      <div id="hero" className="hero">
        <h1 className="neon-title">Hello World, I'm Nacho</h1>
        <h2 className="subtitle" style={{ userSelect: 'none', pointerEvents: 'none' }}>A Software and Web Developer</h2>
        <a href="#projects" className={`scroll-down ${isBottomReached ? 'bottom-reached' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} style={{ userSelect: 'none' }}>↓</a>
      </div>
      <section id="projects" className="section">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none', pointerEvents: 'none' }}>
          <span>Projects</span>
          <span style={{ marginRight: '-30px' }}>&lt;&gt;</span>
        </div>
        <div className="glassmorphism-panel">
          
          <h4 style={{ color: '#7877c6', marginBottom: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', fontFamily: 'Quicksand', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Charlotteo</span>
            {!isMobile && <span style={{ fontSize: '0.75rem', textDecoration: 'underline', color: '#7877c6', userSelect: 'none' }}>May 2025 - Jul 2025</span>}
          </h4>
          <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textAlign: 'left', lineHeight: '1.5' }}>
            A chatbot-powered tool <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>using OpenAI to analyze VMware metrics</span>, generate technical reports, and provide contextual recommendations in natural language <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>improving troubleshooting and decision-making</span> in Cloud operations.
            <br /><br />
            I was responsible for the <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>frontend development, UI/UX design</span>, and chatbot testing.
            <br /><br />
            This project was developed for a <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>real client: </span><a href="https://willinn.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold', textDecoration: 'underline' }}>Willinn</a>, a technology company seeking to optimize their Cloud infrastructure operations.
            <br /><br />
            It was presented at the <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>Celebra</span> building in <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>Zonamerica</span> as the final project for <a href="https://holbertonschool.uy/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold', textDecoration: 'underline' }}>Holberton School</a>.
          </p>
          
          <p style={{ fontSize: '0.7rem', textAlign: 'left', marginBottom: '0.5rem', color: 'rgb(239, 247, 175)' }}>
          You can visit our website or <a href="https://github.com/balemansteve/Charlotteo" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'rgb(239, 247, 175)' }}>repository</a> to learn more about the project by clicking any image!
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
                {projectImages.map((image, index) => (
                  <img 
                    key={image}
                    src={image} 
                    alt={`Charlotteo project ${index + 1}`}
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      userSelect: 'none',
                      pointerEvents: 'none',
                      opacity: index === currentImageIndex ? 1 : 0,
                      transition: 'opacity 1s ease-out'
                    }}
                  />
                ))}
              </a>
            </div>
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '0.3rem', 
            justifyContent: 'flex-end', 
            marginBottom: '1rem',
            opacity: '0.7'
          }}>
            <div style={{ 
              background: 'transparent', 
              borderRadius: '6px', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#3776AB',
              border: '1px solid rgba(55, 118, 171, 0.6)',
              boxShadow: '0 0 4px rgba(55, 118, 171, 0.4)'
            }}>
              <SiPython style={{ fontSize: '12px' }} />
            </div>
            <div style={{ 
              background: 'transparent', 
              borderRadius: '6px', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#00D4AA',
              border: '1px solid rgba(0, 212, 170, 0.6)',
              boxShadow: '0 0 4px rgba(0, 212, 170, 0.4)'
            }}>
              <SiFastapi style={{ fontSize: '12px' }} />
            </div>
            <div style={{ 
              background: 'transparent', 
              borderRadius: '6px', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#61DAFB',
              border: '1px solid rgba(97, 218, 251, 0.6)',
              boxShadow: '0 0 4px rgba(97, 218, 251, 0.4)'
            }}>
              <SiReact style={{ fontSize: '12px' }} />
            </div>
            <div style={{ 
              background: 'transparent', 
              borderRadius: '6px', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#E34F26',
              border: '1px solid rgba(227, 79, 38, 0.6)',
              boxShadow: '0 0 4px rgba(227, 79, 38, 0.4)'
            }}>
              <FaHtml5 style={{ fontSize: '12px' }} />
            </div>
            <div style={{ 
              background: 'transparent', 
              borderRadius: '6px', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#1572B6',
              border: '1px solid rgba(21, 114, 182, 0.6)',
              boxShadow: '0 0 4px rgba(21, 114, 182, 0.4)'
            }}>
              <FaCss3Alt style={{ fontSize: '12px' }} />
            </div>
            <div style={{ 
              background: 'transparent', 
              borderRadius: '6px', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#F7DF1E',
              border: '1px solid rgba(247, 223, 30, 0.6)',
              boxShadow: '0 0 4px rgba(247, 223, 30, 0.4)'
            }}>
              <SiJavascript style={{ fontSize: '12px' }} />
            </div>
            <div style={{ 
              background: 'transparent', 
              borderRadius: '6px', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#10A37F',
              border: '1px solid rgba(16, 163, 127, 0.6)',
              boxShadow: '0 0 4px rgba(16, 163, 127, 0.4)'
            }}>
              <SiOpenai style={{ fontSize: '12px' }} />
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button 
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              style={{
                background: 'rgba(120, 119, 198, 0.1)',
                border: '1px solid rgba(120, 119, 198, 0.2)',
                borderRadius: '8px',
                padding: '0.5rem 1.2rem',
                color: 'rgba(120, 119, 198, 0.8)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                margin: '0 auto',
                outline: 'none',
                userSelect: 'none',
                minWidth: '180px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(120, 119, 198, 0.2)'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(120, 119, 198, 0.1)'
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
              {!isMobile && <span style={{ fontSize: '0.75rem', textDecoration: 'underline', color: '#7877c6', userSelect: 'none' }}>Feb 2025 - Apr 2025</span>}
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textAlign: 'left', lineHeight: '1.5' }}>
              I Built a RESTful API using Flask for an AirBnB clone, featuring full CRUD operations, JWT authentication, and role-based access control. Refactored the codebase with Python.
            </p>
            
            <p style={{ fontSize: '0.7rem', textAlign: 'left', marginTop: '0.5rem', color: 'rgb(239, 247, 175)' }}>
              You can visit the repository to learn more about the project by clicking in <a href="https://github.com/nazarena-aranda/holbertonschool-hbnb" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'rgb(239, 247, 175)' }}>this link</a>!
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '0.3rem', 
              justifyContent: 'flex-end', 
              marginBottom: '1rem',
              opacity: '0.7'
            }}>
              <div style={{ 
                background: 'transparent', 
                borderRadius: '6px', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#E34F26',
                border: '1px solid rgba(227, 79, 38, 0.6)',
                boxShadow: '0 0 4px rgba(227, 79, 38, 0.4)'
              }}>
                <FaHtml5 style={{ fontSize: '12px' }} />
              </div>
              <div style={{ 
                background: 'transparent', 
                borderRadius: '6px', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#1572B6',
                border: '1px solid rgba(21, 114, 182, 0.6)',
                boxShadow: '0 0 4px rgba(21, 114, 182, 0.4)'
              }}>
                <FaCss3Alt style={{ fontSize: '12px' }} />
              </div>
              <div style={{ 
                background: 'transparent', 
                borderRadius: '6px', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#808080',
                border: '1px solid rgba(128, 128, 128, 0.6)',
                boxShadow: '0 0 4px rgba(128, 128, 128, 0.4)'
              }}>
                <SiFlask style={{ fontSize: '12px' }} />
              </div>
              <div style={{ 
                background: 'transparent', 
                borderRadius: '6px', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#3776AB',
                border: '1px solid rgba(55, 118, 171, 0.6)',
                boxShadow: '0 0 4px rgba(55, 118, 171, 0.4)'
              }}>
                <SiPython style={{ fontSize: '12px' }} />
              </div>
            </div>
            
            <h4 style={{ color: '#7877c6', marginBottom: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', fontFamily: 'Quicksand', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
              <span>HolbertonSchool Simple Shell</span>
              {!isMobile && <span style={{ fontSize: '0.75rem', textDecoration: 'underline', color: '#7877c6', userSelect: 'none' }}>Dec 2024 - Jan 2025</span>}
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textAlign: 'left', lineHeight: '1.5' }}>
              This project is a custom implementation of a "simple shell" in C, The project includes a set of functions like it allows you to manage variables, handle basic errors and execute commands.
            </p>
            
            <p style={{ fontSize: '0.7rem', textAlign: 'left', marginTop: '0.5rem', color: 'rgb(239, 247, 175)' }}>
              You can visit the repository to learn more about the project by clicking in <a href="https://github.com/nyacho04/holbertonschool-simple_shell" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'rgb(239, 247, 175)' }}>this link</a>!
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '0.3rem', 
              justifyContent: 'flex-end', 
              marginBottom: '1rem',
              opacity: '0.7'
            }}>
              <div style={{ 
                background: 'transparent', 
                borderRadius: '6px', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#A8B9CC',
                border: '1px solid rgba(168, 185, 204, 0.6)',
                boxShadow: '0 0 4px rgba(168, 185, 204, 0.4)'
              }}>
                <SiCplusplus style={{ fontSize: '12px' }} />
              </div>
            </div>
            
            <h4 style={{ color: '#7877c6', marginBottom: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', fontFamily: 'Quicksand', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
              <span>HolbertonSchool Printf</span>
              {!isMobile && <span style={{ fontSize: '0.75rem', textDecoration: 'underline', color: '#7877c6', userSelect: 'none' }}>Nov 2024 - Dec 2025</span>}
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', textAlign: 'left', lineHeight: '1.5' }}>
              This project is a simplified implementation of the standard printf function in C. this can be able to interpret and display text in the console based on the provided arguments.
            </p>
            
            <p style={{ fontSize: '0.7rem', textAlign: 'left', marginTop: '0.5rem', color: 'rgb(239, 247, 175)' }}>
              You can visit the repository to learn more about the project by clicking in <a href="https://github.com/nyacho04/holbertonschool-printf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'rgb(239, 247, 175)' }}>this link</a>!
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '0.3rem', 
              justifyContent: 'flex-end', 
              marginBottom: '1rem',
              opacity: '0.7'
            }}>
              <div style={{ 
                background: 'transparent', 
                borderRadius: '6px', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#A8B9CC',
                border: '1px solid rgba(168, 185, 204, 0.6)',
                boxShadow: '0 0 4px rgba(168, 185, 204, 0.4)'
              }}>
                <SiCplusplus style={{ fontSize: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section">
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none', pointerEvents: 'none' }}>
          <span>About Me</span>
          <span style={{ marginRight: '-30px' }}>:)</span>
        </div>
        <div className="glassmorphism-panel about-panel">
          <div style={{ display: 'flex', gap: isMobile ? '1rem' : '1.5rem', alignItems: 'flex-start', flexDirection: isMobile ? 'column' : 'row' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h3 style={{ color: '#7877c6', marginBottom: '0.8rem', fontFamily: 'Quicksand', fontSize: '1.2rem' }}>Who Am I?</h3>
              <p style={{ lineHeight: '1.5', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                Hello! My name is <span style={{ color: 'rgb(239, 247, 175)', fontWeight: 'bold' }}>Ignacio Devita</span>, i from Uruguay and I am 19 years old.
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
            <div style={{ marginTop: isMobile ? '0.5rem' : '3.3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src="./aboutme.webp" 
                alt="Nacho Devita" 
                style={{ 
                  width: isMobile ? '250px' : '350px', 
                  height: isMobile ? '250px' : '350px', 
                  borderRadius: '25px',
                  objectFit: 'contain',
                  objectPosition: 'top',
                  userSelect: 'none',
                  pointerEvents: 'none'
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
        <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none', pointerEvents: 'none' }}>
          <span>{isMobile ? 'Tools' : 'Technologies & Tools'}</span>
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
