import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import './Experience.css'

const timeline = [
  {
    year: '2022 — Present',
    role: 'Senior Software Engineer',
    company: 'TechCorp Ltd',
    desc: 'Lead a team building a Laravel + React SaaS platform serving 10k+ users. Architect mobile app in Flutter and mentor junior devs.',
  },
  {
    year: '2020 — 2022',
    role: 'Full Stack Developer',
    company: 'StartupHub',
    desc: 'Built REST APIs with Laravel, designed React dashboards, and shipped mobile features in Flutter. Reduced page load time by 40%.',
  },
  {
    year: '2019 — 2020',
    role: 'Junior Developer',
    company: 'WebStudio',
    desc: 'Developed responsive websites with React & Tailwind. Contributed to legacy PHP maintenance and migration to Laravel.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-blob experience-blob-1" aria-hidden="true" />
      <div className="experience-blob experience-blob-2" aria-hidden="true" />

      <div className="container experience-container">
        <div className="experience-heading">
          <span className="experience-eyebrow">Where I've worked</span>
          <h2 className="experience-title">Experience</h2>
          <p className="experience-subtitle">
            A short timeline of the roles, teams, and projects that shaped how
            I build software today.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="timeline-marker">
                <span className="timeline-dot" />
              </div>

              <div className="timeline-content">
                <span className="timeline-year">
                  <FiCalendar /> {item.year}
                </span>
                <h3>{item.role}</h3>
                <h4>
                  <FiBriefcase /> {item.company}
                </h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}