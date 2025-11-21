import React from 'react'

export default function About({ data, photo }) {
  if (!data) return null
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Who I Am</span>
          <h2>{data.heading}</h2>
        </div>
        <div className="grid two">
          <div className="card glass">
            {data.content.map((p, i) => (
              <p key={i} style={{marginTop: i === 0 ? 0 : 10, lineHeight: 1.7}}>{p}</p>
            ))}
          </div>
          {photo && (
            <div className="hero-photo">
              <img src={photo} alt="Profile" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


