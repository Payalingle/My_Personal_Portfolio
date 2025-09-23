import React from 'react'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import resume from './data/resume.js'

export default function App() {
  return (
    <div className="page-bg">
      <Navbar />
      <main>
        <Hero data={resume.hero} />
        <About data={resume.about} photo={resume.hero.photo} />
        <Skills data={resume.skills} />
        <Experience data={resume.experience} />
        <Projects data={resume.projects} />
        <Education data={resume.education} />
        <Contact data={resume.contact} />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Payal Ingle</footer>
    </div>
  )
}


