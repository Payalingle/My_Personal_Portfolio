import React from 'react'

export default function Contact({ data }) {
  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="kicker">Get In Touch</span>
          <h2>Contact Me</h2>
        </div>
        <div className="grid two">
          <div className="card glass gradient hover-lift">
            <h3>📧 Send a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="email">✉️ Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">💬 Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn primary">
                Send Message
              </button>
            </form>
          </div>
          <div className="card glass gradient hover-lift">
            <h3>📍 Contact Info</h3>
            <p><strong>📧 Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></p>
            <p><strong>📞 Phone:</strong> <a href={`tel:${data.phone}`}>{data.phone}</a></p>
            <p><strong>🏠 Location:</strong> {data.location}</p>
            <p><strong>💼 Availability:</strong> Open to opportunities</p>
            <div className="cta">
              <a className="btn secondary" href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn ghost" href={data.links.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


