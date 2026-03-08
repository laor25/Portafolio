import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <span className="logo-accent">&lt;</span>LAOR<span className="logo-accent">/&gt;</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#skills">Habilidades Técnicas</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="/Dev_CV.pdf" className="cv-btn" download>Descargar CV</a></li>
      </ul>
    </nav>
  )
}

export default Navbar