import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/acerca_de_mi/About'
import Skills from '../components/Habilidades/Skills'
import Projects from '../components/Proyectos/Projects'
import Contact from '../components/contacto/Contact'
import Footer from '../components/pie_de_pagina/Footer'


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Projects />  
      <Contact />
      <Footer />
    </div>
  )
}

export default Home