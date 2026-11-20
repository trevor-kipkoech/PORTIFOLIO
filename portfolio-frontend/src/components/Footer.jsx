import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">&lt;Dev /&gt;</a>
          <p>Building fast, reliable web and mobile applications.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FiTwitter />
          </a>
          <a href="mailto:john@example.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} John Doe. All rights reserved.</p>
          <button onClick={scrollTop} className="back-to-top" aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}