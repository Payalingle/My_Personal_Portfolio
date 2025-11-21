import React from 'react'

export default function Hero({ data }) {
  const { name, title, location, email, links, summary, photo, resumeUrl } = data
  return (
    <section id="hero" className="section hero reveal">
      <div className="container hero-wrap">
        <div className="hero-text">
          <h1>{name}</h1>
          <p className="subtitle"><h3>{title}</h3></p>
          <p className="summary">
            {summary.split('. ')[0]}. <span className="summary-second">{summary.split('. ')[1]}</span>
          </p>
          <div className="cta">
            {resumeUrl && <a className="btn secondary" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>}
          </div>
        </div>
        <div className="hero-photo">
          <img src="/Home.png" alt="Home" onError={(e) => { e.target.src = '/Home.png'; }} />
        </div>
      </div>
    </section>
  )
}


