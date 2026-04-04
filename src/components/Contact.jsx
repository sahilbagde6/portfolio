import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheck } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const body = `Hi Sahil,%0A%0AMy name is ${encodeURIComponent(name)} (${encodeURIComponent(email)}).%0A%0A${encodeURIComponent(message)}`
    window.location.href = `mailto:sahilbagde6@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute top-12 left-0 w-20 h-[1px] bg-gradient-to-r from-accent to-transparent opacity-30" />
      <div className="absolute bottom-12 right-0 w-16 h-[1px] bg-gradient-to-l from-accent to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Contact</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Let's Work Together<span className="text-accent">.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Have a project in mind or want to discuss cybersecurity? 
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: FiMail, label: 'Email', value: 'sahilbagde6@gmail.com', href: 'mailto:sahilbagde6@gmail.com' },
                { icon: FiPhone, label: 'Phone', value: '+91 8262068464', href: 'tel:+918262068464' },
                { icon: FiMapPin, label: 'Location', value: 'Nagpur, Maharashtra, India', href: 'https://maps.google.com/?q=Nagpur,Maharashtra,India', external: true },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-5 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300 flex-shrink-0">
                    <item.icon className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-600 uppercase tracking-wider">{item.label}</span>
                    <p className="text-white text-sm font-medium group-hover:text-accent transition-colors duration-300 break-all sm:break-normal">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: 'https://github.com/sahilbagde6', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sahil-bagde-4a1647216', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:sahilbagde6@gmail.com', label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 active:scale-90 transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-600 uppercase tracking-wider mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-700 focus:border-accent/50 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-700 focus:border-accent/50 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-600 uppercase tracking-wider mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-700 focus:border-accent/50 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-700 focus:border-accent/50 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,70,0.3)] active:scale-95"
              >
                {sent ? (
                  <>
                    <FiCheck size={14} />
                    Opening Mail App...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
