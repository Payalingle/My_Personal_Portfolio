import React from 'react'

export default function Hero({ data }) {
  const { name, title, location, email, links, summary, photo, resumeUrl } = data
  return (
    <section id="hero" className="section hero reveal">
      <div className="container hero-wrap">
        <div className="hero-text">
          <h1>{name}</h1>
          <p className="subtitle">{title}</p>
          <p className="muted">{location}</p>
          <p className="summary">{summary}</p>
          <div className="cta">
            {resumeUrl && <a className="btn secondary" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>}
          </div>
        </div>

      </div>
    </section>
  )
}


