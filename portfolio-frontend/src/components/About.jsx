import { motion } from 'framer-motion'
import {
  FiMapPin, FiMail, FiGlobe, FiCheckCircle, FiCode, FiSmartphone
} from 'react-icons/fi'
import './About.css'

const stats = [
  { value: 'PHP', label: 'Backend Development', icon: FiCode },
  { value: 'Web', label: 'Frontend with React', icon: FiCode },
  { value: 'Mobile', label: 'App Development', icon: FiSmartphone },
]

const info = [
  { label: 'Location', value: 'Kenya', icon: FiMapPin },
  { label: 'Email', value: 'kipkoechtrevor1@gmail.com', icon: FiMail, link: 'mailto:kipkoechtrevor1@gmail.com' },
  { label: 'Languages', value: 'English, Swahili', icon: FiGlobe },
]

export default function About() {
  return (
    <section id="about" className="about">
      {/* soft decorative blobs */}
      <div className="about-blob about-blob-1" aria-hidden="true" />
      <div className="about-blob about-blob-2" aria-hidden="true" />

      <div className="container about-container">
        <div className="about-heading">
          <span className="about-eyebrow">Get to know me</span>
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            I'm a software engineer focused on building practical web and
            mobile applications — from backend APIs to user-facing interfaces.
          </p>
        </div>

        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* LEFT — story + focus areas */}
          <div className="about-text">
            <p>
              I'm <strong>Trevor Kipkoech</strong>, a software engineer with a
              strong focus on <strong>PHP</strong> for backend development and{' '}
              <strong>React</strong> for building modern web interfaces. I also
              build <strong>mobile applications</strong> and enjoy working
              across the full stack.
            </p>
            <p>
              I care about writing clean, maintainable code and building
              products that actually work for the people using them. I'm
              constantly learning and improving — whether it's a new framework,
              a better architecture pattern, or a smarter way to solve a problem.
            </p>

            <div className="about-stats">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="stat">
                  <div className="stat-icon"><Icon /></div>
                  <div>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="about-cta">
              Let's work together →
            </a>
          </div>

          {/* RIGHT — quick info card */}
          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="about-card-header">
              <div className="about-card-avatar">TK</div>
              <div>
                <h3>Quick Info</h3>
                <p>Let's connect</p>
              </div>
            </div>

            <ul className="about-info-list">
              {info.map(({ label, value, icon: Icon, link }) => (
                <li key={label} className="info-row">
                  <span className="info-icon"><Icon /></span>
                  <div className="info-content">
                    <span className="info-label">{label}</span>
                    {link ? (
                      <a href={link} className="info-value info-link">{value}</a>
                    ) : (
                      <strong className="info-value">{value}</strong>
                    )}
                  </div>
                </li>
              ))}

              <li className="info-row">
                <span className="info-icon available-icon"><FiCheckCircle /></span>
                <div className="info-content">
                  <span className="info-label">Availability</span>
                  <strong className="info-value available">
                    <span className="pulse-dot" /> Open to work
                  </strong>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}