import { motion } from 'framer-motion'
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Red accent dots */}
      <div className="absolute top-32 left-8 w-2 h-2 rounded-full bg-accent opacity-60" />
      <div className="absolute top-48 left-12 w-1 h-1 rounded-full bg-accent opacity-40" />
      <div className="absolute bottom-32 left-24 w-1.5 h-1.5 rounded-full bg-accent opacity-50" />
      
      {/* Red accent lines */}
      <div className="absolute top-40 left-0 w-16 h-[1px] bg-gradient-to-r from-accent to-transparent opacity-30" />
      <div className="absolute bottom-60 right-0 w-24 h-[1px] bg-gradient-to-l from-accent to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-screen pt-20 pb-16">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Available for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                <span className="text-white">SAHIL</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  BAGDE
                </span>
                <span className="text-accent">.</span>
              </h1>
            </motion.div>

            {/* Role Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-accent flex-shrink-0" />
                <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em]">
                  Ethical Hacker & Security Researcher
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg"
            >
              Passionate cybersecurity professional committed to exploring 
              the digital landscape. I break things to make them more secure — 
              specializing in penetration testing, VAPT, and web application security.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,70,0.3)] active:scale-95"
              >
                View Projects
                <FiArrowDownRight className="group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/sahilbagde6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:border-accent hover:text-accent transition-all duration-300 active:scale-95"
              >
                <FiGithub />
                GitHub
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-4 pt-2"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/sahilbagde6', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sahil-bagde-4a1647216', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:sahilbagde6@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent transition-all duration-300 active:scale-90"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
              <span className="text-xs text-gray-600 tracking-wider ml-1 hidden sm:block">FOLLOW ME</span>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Outer container with overflow control for mobile */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src="/hero-image.jpg"
                  alt="Sahil Bagde"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                  loading="eager"
                  fetchpriority="high"
                  width="480"
                  height="640"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent" />
                
                {/* Accent border */}
                <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-accent to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-accent to-transparent" />

                {/* Floating Stats Card — inside image on mobile to avoid overflow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="text-2xl font-black text-accent">6+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Certifications</div>
                </motion.div>

                {/* Location tag — inside image on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-lg px-3 py-2"
                >
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">📍 Nagpur, India</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
