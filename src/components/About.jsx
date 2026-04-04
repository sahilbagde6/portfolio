import { motion } from 'framer-motion'
import { FiShield, FiCode, FiServer, FiAward } from 'react-icons/fi'

const highlights = [
  { icon: FiShield, label: 'Ethical Hacking', desc: 'Penetration Testing & VAPT' },
  { icon: FiCode, label: 'Development', desc: 'Python, JavaScript, SQL' },
  { icon: FiServer, label: 'Network Security', desc: 'Scanning & Reconnaissance' },
  { icon: FiAward, label: 'Certified', desc: '6+ Industry Certifications' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Red accent */}
      <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-accent to-transparent opacity-30" />
      
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
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">About</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Know Who I Am<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Sahil Bagde</span>, a B.Tech Computer Science 
              student at GNIET, Nagpur with a burning passion for cybersecurity and ethical hacking.
            </p>
            <p className="text-gray-500 leading-relaxed">
              With hands-on experience in penetration testing, vulnerability assessment, and security 
              research, I'm committed to making the digital world a safer place. I've completed multiple 
              cybersecurity certifications from Cisco and Great Learning, and I hold a Ficklem Licensed 
              Penetration Tester certification.
            </p>
            <p className="text-gray-500 leading-relaxed">
              My approach combines offensive security tactics with defensive mechanisms — 
              understanding how attackers think to build better defenses. Currently working on 
              PurpleOps Arena, an end-to-end cyber training platform.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <span className="text-xs text-gray-600 uppercase tracking-wider">Location</span>
                <p className="text-white text-sm font-medium">Nagpur, Maharashtra</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-gray-600 uppercase tracking-wider">Education</span>
                <p className="text-white text-sm font-medium">B.Tech CSE, GNIET</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-gray-600 uppercase tracking-wider">Email</span>
                <p className="text-white text-sm font-medium">sahilbagde6@gmail.com</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-gray-600 uppercase tracking-wider">Focus</span>
                <p className="text-white text-sm font-medium">VAPT & Bug Bounty</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all duration-500 hover:bg-white/[0.04]"
              >
                <item.icon className="text-accent text-xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white text-sm font-bold mb-1">{item.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
