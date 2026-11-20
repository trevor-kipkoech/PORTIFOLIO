import { motion } from 'framer-motion'
import {
  SiReact,
  SiFlutter,
  SiLaravel,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiDocker,
  SiGit,
} from 'react-icons/si'
import { FiCode, FiServer, FiSmartphone } from 'react-icons/fi'
import './Skills.css'

const groups = [
  {
    title: 'Frontend',
    subtitle: 'Building interfaces people enjoy using',
    icon: FiCode,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'APIs, logic, and data that hold it together',
    icon: FiServer,
    skills: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Mobile & Tools',
    subtitle: 'Cross-platform apps and the workflow around them',
    icon: FiSmartphone,
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-blob skills-blob-1" aria-hidden="true" />
      <div className="skills-blob skills-blob-2" aria-hidden="true" />

      <div className="container skills-container">
        <div className="skills-heading">
          <span className="skills-eyebrow">What I work with</span>
          <h2 className="skills-title">Tech Stack</h2>
          <p className="skills-subtitle">
            The tools and languages I reach for when building web and mobile
            products — focused on the PHP and JavaScript ecosystems.
          </p>
        </div>

        <div className="skills-groups">
          {groups.map((group, gi) => {
            const GroupIcon = group.icon
            return (
              <motion.div
                key={group.title}
                className="skills-group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                <div className="skills-group-header">
                  <span className="skills-group-icon">
                    <GroupIcon />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.subtitle}</p>
                  </div>
                </div>

                <div className="skills-grid">
                  {group.skills.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <motion.div
                        key={s.name}
                        className="skill-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.06 }}
                        style={{ '--skill-color': s.color }}
                      >
                        <div className="skill-icon">
                          <Icon size={30} color={s.color} />
                        </div>
                        <span className="skill-name">{s.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}