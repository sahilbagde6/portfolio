import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 bg-darker">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-accent text-xs font-bold">S</span>
            </div>
            <div>
              <span className="text-white text-sm font-semibold">
                Sahil Bagde<span className="text-accent">.</span>
              </span>
              <p className="text-gray-600 text-xs">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Center text */}
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Crafted with <FiHeart className="text-accent" size={12} /> by Sahil Bagde
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub, href: 'https://github.com/sahilbagde6' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sahil-bagde-4a1647216' },
              { icon: FiMail, href: 'mailto:sahilbagde6@gmail.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-600 hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
