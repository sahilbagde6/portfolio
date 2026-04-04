import { motion } from 'framer-motion'

const skills = [
  { name: 'Ethical Hacking', level: 90, category: 'security' },
  { name: 'Penetration Testing (VAPT)', level: 85, category: 'security' },
  { name: 'Python', level: 85, category: 'language' },
  { name: 'Linux', level: 80, category: 'tools' },
  { name: 'SQL', level: 80, category: 'language' },
  { name: 'JavaScript', level: 70, category: 'language' },
  { name: 'Network Security', level: 82, category: 'security' },
  { name: 'Web App Security', level: 78, category: 'security' },
]

const tools = [
  'Kali Linux', 'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 
  'SQLMap', 'Git', 'VS Code', 'Bash', 'Docker'
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-darker">
      {/* Accent elements */}
      <div className="absolute top-12 right-0 w-32 h-[1px] bg-gradient-to-l from-accent to-transparent opacity-20" />
      <div className="absolute bottom-12 left-0 w-20 h-[1px] bg-gradient-to-r from-accent to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Arsenal</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Tech Stack<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Grid */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                  className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-400 border border-white/10 rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-10 space-y-4">
              <h3 className="text-white text-lg font-bold mb-4">
                Certifications
              </h3>
              {[
                { name: 'Licensed Penetration Tester', org: 'Ficklem', year: '2023' },
                { name: 'Certified Ethical Hacker', org: 'Cisco', year: '2024' },
                { name: 'Cybersecurity Job Simulation', org: 'Mastercard', year: '2025' },
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold">{cert.name}</p>
                    <p className="text-gray-500 text-xs">{cert.org} · {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
