import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi'
import './Hero.css'
import brandLogo from '../assets/logo.png' // Imported the logo!

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Soft decorative blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-name">Trevor Kipkoech</h1>
          <h2 className="hero-role">
            Software Engineer <span className="accent">|</span> PHP · React · Mobile
          </h2>
          <p className="hero-desc">
            I build reliable web and mobile applications with a focus on the 
            PHP and JavaScript ecosystems. I care about clean architecture, 
            great UX, and solving real-world problems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              <FiDownload /> Resume
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FiTwitter /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* The logo replaces the circle completely */}
          <img src={brandLogo} alt="Kóech Logo" className="hero-brand-logo" />
        </motion.div>
      </div>
    </section>
  )
}