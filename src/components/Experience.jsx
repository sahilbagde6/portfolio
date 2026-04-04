import { motion } from 'framer-motion'

const timeline = [
  {
    period: 'Mar 2026 - Present',
    title: 'PurpleOps Arena',
    org: 'Personal Project',
    description: 'Building an end-to-end cyber training environment combining offensive security with defensive mechanisms and AI-based analysis.',
    type: 'project',
  },
  {
    period: 'Sep 2025 - Oct 2025',
    title: 'Cyber Security Intern',
    org: 'Code Alpha, Virtual',
    description: 'Designed Python-based Port Scanner, developed Password Strength Checker, and built SQL Injection demo for understanding vulnerabilities.',
    type: 'work',
  },
  {
    period: 'Sep 2025',
    title: 'Cybersecurity Job Simulation',
    org: 'Mastercard, Virtual',
    description: 'Hands-on tasks in threat detection, incident response, and log analysis.',
    type: 'certification',
  },
  {
    period: '2024 - 2027',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Guru Nanak Institute Of Engineering And Technology',
    description: 'Pursuing B.Tech CSE with 80% aggregate. College Representative for CS Department.',
    type: 'education',
  },
  {
    period: 'Jan 2023 - Jun 2023',
    title: 'Ethical Hacker Certification',
    org: 'Ficklem, Virtual',
    description: 'Certified Licensed Penetration Tester. Focused on Ethical Hacking and VAPT.',
    type: 'certification',
  },
  {
    period: '2022 - 2024',
    title: 'Diploma, Computer Science',
    org: 'Nagpur Institute Of Technology',
    description: 'Completed Diploma in Computer Science with 70% aggregate.',
    type: 'education',
  },
]

const typeColors = {
  work: 'bg-accent',
  project: 'bg-blue-500',
  certification: 'bg-green-500',
  education: 'bg-purple-500',
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-darker">
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
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Experience & Education<span className="text-accent">.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row gap-4 lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-6 z-10">
                  <div className={`w-3 h-3 rounded-full ${typeColors[item.type]} ring-4 ring-darker`} />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">{item.period}</span>
                    <h3 className="text-white text-lg font-bold mt-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.org}</p>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
