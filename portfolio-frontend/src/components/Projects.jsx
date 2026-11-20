import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FiExternalLink, FiGithub, FiArrowRight, FiFolder, FiStar
} from 'react-icons/fi'
import { getProjects } from '../services/api'
import './Projects.css'

const fallbackProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack marketplace with a Laravel API, React admin dashboard, and Flutter mobile app. Handles inventory, orders, and payments end-to-end.',
    tech: ['Laravel', 'React', 'Flutter', 'MySQL'],
    image: null,
    live_url: '#',
    repo_url: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management SaaS',
    description:
      'Multi-tenant SaaS with teams, kanban boards, and real-time collaboration. Laravel backend serving a React frontend over REST + WebSockets.',
    tech: ['Laravel', 'React', 'MySQL', 'WebSockets'],
    image: null,
    live_url: '#',
    repo_url: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Fitness Tracker App',
    description:
      'Cross-platform mobile app for workout tracking with offline-first sync, progress charts, and a Laravel API behind it.',
    tech: ['Flutter', 'Laravel', 'REST'],
    image: null,
    live_url: '#',
    repo_url: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Developer Blog CMS',
    description:
      'Headless CMS for developers with markdown support, code highlighting, and SEO-friendly output. Built with Laravel + React.',
    tech: ['Laravel', 'React', 'Tailwind'],
    image: null,
    live_url: '#',
    repo_url: '#',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const { title, description, tech, image, live_url, repo_url, featured } = project

  return (
    <motion.article
      className={`project-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="project-thumb">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="thumb-placeholder">
            <span>{title.charAt(0)}</span>
          </div>
        )}
        {featured && (
          <span className="featured-badge">
            <FiStar /> Featured
          </span>
        )}
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tech">
          {Array.isArray(tech) 
            ? tech.map((t) => <span key={t}>{t}</span>)
            : typeof tech === 'string' 
              ? JSON.parse(tech).map((t) => <span key={t}>{t}</span>)
              : null
          }
        </div>

        <div className="project-links">
          {live_url && live_url !== '#' && (
            <a href={live_url} target="_blank" rel="noreferrer">
              <FiExternalLink /> Live Demo
            </a>
          )}
          {repo_url && repo_url !== '#' && (
            <a href={repo_url} target="_blank" rel="noreferrer">
              <FiGithub /> Code
            </a>
          )}
          {(!live_url || live_url === '#') && (!repo_url || repo_url === '#') && (
            <span className="project-links-empty">
              <FiFolder /> Case study coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProjects()
      .then((res) => {
        if (res.data?.length) setProjects(res.data)
      })
      .catch(() => {
        /* silently fall back to sample data */
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="projects-blob projects-blob-1" aria-hidden="true" />
      <div className="projects-blob projects-blob-2" aria-hidden="true" />

      <div className="container projects-container">
        <div className="projects-heading">
          <span className="projects-eyebrow">Selected work</span>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A few things I've built — from full-stack web apps to cross-platform
            mobile experiences. Each one solved a real problem.
          </p>
        </div>

        {loading ? (
          <p className="projects-loading">Loading projects…</p>
        ) : (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}

        <div className="projects-footer">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="projects-more"
          >
            See more on GitHub <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}