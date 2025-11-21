import React from 'react'

export default function Experience({ data }) {
  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Professional Journey</span>
          <h2>Experience</h2>
        </div>
        <div className="grid two">
          {data.map((job, idx) => (
            <div className="card glass gradient hover-lift" key={idx}>
              <div className="item-header">
                <h3>{job.role} — {job.company}</h3>
                <span className="muted">{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {job.skills && <p className="tags">{job.skills.join(' · ')}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


