import React, { useState } from 'react'

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(`Thank you ${formData.name}! Your message has been sent successfully.`)
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

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
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">👤 Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">✉️ Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">💬 Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && <p className="success-message">{submitMessage}</p>}
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


