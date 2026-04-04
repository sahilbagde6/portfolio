import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    title: 'PurpleOps Arena',
    description: 'A full-stack cybersecurity platform that integrates offensive attack simulation, defensive detection engineering, and AI-powered analysis into a single guided workflow.',
    tags: ['JavaScript', 'Python', 'AI', 'Cybersecurity'],
    github: 'https://github.com/sahilbagde6/PurpleOps-Arena',
    featured: true,
    date: 'Mar 2026 - Present',
  },
  {
    title: 'CYBER-SCAN',
    description: 'An advanced AI-powered cybersecurity platform integrating attack simulation, real-time threat detection, vulnerability analysis, and intelligent reporting.',
    tags: ['Python', 'AI', 'Security', 'Detection'],
    github: 'https://github.com/sahilbagde6/CYBER-SCAN',
    featured: true,
    date: '2025',
  },
  {
    title: 'Port Scanner',
    description: 'Python-based network reconnaissance tool for service detection and port scanning. Built for educational and ethical security testing.',
    tags: ['Python', 'Networking', 'Security'],
    github: 'https://github.com/sahilbagde6/Port-Scanner',
    featured: false,
    date: '2025',
  },
  {
    title: 'SQL Injection Demo',
    description: 'Educational demo to help developers and security learners understand SQL injection attacks and insecure coding practices.',
    tags: ['Python', 'SQL', 'Security', 'Education'],
    github: 'https://github.com/sahilbagde6/SQL-INJECTION-DEMO',
    featured: false,
    date: 'Aug 2025',
  },
  {
    title: 'Password Strength Checker',
    description: 'A tool that evaluates password security using complexity metrics, length analysis, and common pattern detection.',
    tags: ['Python', 'Security', 'Tools'],
    github: 'https://github.com/sahilbagde6/Password-Strength-Checker-',
    featured: false,
    date: '2025',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-8 w-1.5 h-1.5 rounded-full bg-accent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Portfolio</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Featured Projects<span className="text-accent">.</span>
            </h2>
          </div>
          <a
            href="https://github.com/sahilbagde6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors duration-300 group self-start lg:self-auto"
          >
            View All on GitHub
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 active:border-accent/50 transition-all duration-500 hover:bg-white/[0.04] overflow-hidden cursor-pointer block"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-gray-600 uppercase tracking-wider">{project.date}</span>
                <div className="flex items-center gap-2">
                  <FiGithub className="text-gray-500 group-hover:text-accent transition-colors duration-300" size={16} />
                  <FiExternalLink className="text-gray-500 group-hover:text-accent transition-colors duration-300" size={14} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 border border-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Explicit GitHub CTA - always visible */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-600 group-hover:text-accent transition-colors duration-300 pt-2 border-t border-white/5">
                <FiGithub size={13} />
                <span>View on GitHub</span>
                <FiArrowUpRight size={12} className="ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              whileTap={{ scale: 0.97 }}
              className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 active:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center justify-between mb-3">
                <FiGithub className="text-gray-500 group-hover:text-accent transition-colors duration-300" size={18} />
                <FiExternalLink className="text-gray-700 group-hover:text-accent transition-colors duration-300" size={14} />
              </div>
              <h4 className="text-white text-sm font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[9px] text-gray-600 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <span className="text-[10px] text-gray-700 group-hover:text-accent/70 transition-colors duration-300 flex items-center gap-1">
                Open on GitHub <FiExternalLink size={9} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
