import React from 'react'

export default function Education({ data }) {
  return (
    <section id="education" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Academic Background</span>
          <h2>Education</h2>
        </div>
        <div className="education-timeline">
          {data.map((ed, idx) => (
            <div className="education-item card glass gradient hover-lift" key={idx}>
              <h3>{ed.degree}</h3>
              <p className="muted">{ed.school}</p>
              <div className="item-footer">
                <span className="muted">{ed.period}</span>
                {ed.gpa && <span className="muted">{ed.gpa}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


