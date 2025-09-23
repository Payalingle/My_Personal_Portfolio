import React from 'react'

export default function Projects({ data }) {
  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-vertical">
          {data.map((p, idx) => (
            <div className="card" key={idx}>
              <div className="item-header">
                <h3>{p.name}</h3>
                <span className="muted">{p.date}</span>
              </div>
              <ul>
                {p.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              {p.skills && <p className="tags">{p.skills.join(' · ')}</p>}
              {p.actions && (p.actions.repo || p.actions.demo) && (
                <div className="cta">
                  {p.actions.demo && (
                    <a className="btn secondary" href={p.actions.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  )}
                  {p.actions.repo && (
                    <a className="btn ghost" href={p.actions.repo} target="_blank" rel="noreferrer">Source Code</a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


