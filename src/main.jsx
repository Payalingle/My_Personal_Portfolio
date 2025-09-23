import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

// simple scroll-reveal
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('in-view')
  }
}, { threshold: 0.01 })

const attach = () => {
  const els = Array.from(document.querySelectorAll('.reveal'))
  els.forEach((el) => {
    observer.observe(el)
    const rect = el.getBoundingClientRect()
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0
    if (inViewport) el.classList.add('in-view')
  })
  // failsafe to reveal on slow paints
  setTimeout(() => els.forEach((el) => el.classList.add('in-view')), 1500)
}

if (document.readyState !== 'loading') attach()
else document.addEventListener('DOMContentLoaded', attach)

// Re-attach on DOM mutations (e.g., HMR wrapper reloads)
const mo = new MutationObserver(() => attach())
mo.observe(document.body, { childList: true, subtree: true })


