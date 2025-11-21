import React from 'react'

export default function Navbar() {
  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="Payal Ingle Logo" className="logo-image" />
        <a href="#hero" className="brand" onClick={(e) => handleClick(e, 'hero')}>
          Payal Ingle
        </a>
      </div>
      <nav>
        <a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a>
        <a href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</a>
        <a href="#experience" onClick={(e) => handleClick(e, 'experience')}>Experience</a>
        <a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a>
        <a href="#education" onClick={(e) => handleClick(e, 'education')}>Education</a>
        <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a>
        <a className="btn nav" href="/Payal_Ingle_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
  )
}


