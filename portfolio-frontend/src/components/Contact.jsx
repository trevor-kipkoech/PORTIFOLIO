import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle, FiPhone } from 'react-icons/fi'
import { sendMessage } from '../services/api'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await sendMessage(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-blob contact-blob-1" aria-hidden="true" />
      <div className="contact-blob contact-blob-2" aria-hidden="true" />

      <div className="container contact-container">
        
        <div className="contact-heading">
          <span className="contact-eyebrow">Get In Touch</span>
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Have a project in mind, a role to fill, or just want to say hi?
            Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <h3>Let's build something great together.</h3>
            <p>
              Whether it's a full-stack web app, a mobile application, or
              just exploring a new idea, I'm always open to discussing
              how I can help.
            </p>

            <ul className="contact-details">
              <li>
                <FiMail />
                <a href="mailto:trevor@example.com">kipkoechtrevor1@gmail.com</a>
              </li>
              <li>
                <FiPhone />
                <a href="tel:+254700000000">+254 719 727 085</a>
              </li>
              <li>
                <FiMapPin />
                <span>Kenya</span>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : (<><FiSend /> Send Message</>)}
            </button>

            {status === 'success' && (
              <p className="form-msg success">
                <FiCheck /> Message sent successfully! I'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-msg error">
                <FiAlertCircle /> Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}