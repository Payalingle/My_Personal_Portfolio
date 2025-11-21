import React from 'react'

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {data.name || 'Payal Ingle'}</p>
        <div className="footer-links">
          <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href={data.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href={`mailto:${data.email}`} aria-label="Email">
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
