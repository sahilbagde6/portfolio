import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-72 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(20, 20, 20, 0.8)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">S</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Sahil Bagde</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] text-gray-500">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="px-5 py-4 space-y-3 max-h-48 overflow-y-auto">
              <div className="bg-white/5 rounded-xl rounded-tl-sm px-4 py-3">
                <p className="text-xs text-gray-300 leading-relaxed">
                  Hey! 👋 Thanks for visiting my portfolio. Feel free to reach out if you'd like to discuss cybersecurity or collaborate on a project!
                </p>
              </div>
              <div className="bg-white/5 rounded-xl rounded-tl-sm px-4 py-3">
                <p className="text-xs text-gray-300 leading-relaxed">
                  You can email me at <span className="text-accent">sahilbagde6@gmail.com</span>
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/5">
              <a
                href="mailto:sahilbagde6@gmail.com"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-accent hover:bg-accent-dark text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300"
              >
                <FiSend size={12} />
                Send Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-accent hover:bg-accent-dark flex items-center justify-center text-white shadow-lg shadow-accent/25 transition-colors duration-300"
      >
        {isOpen ? <FiX size={18} /> : <FiMessageCircle size={18} />}
      </motion.button>

      {/* Label */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="absolute -left-24 top-1/2 -translate-y-1/2"
          style={{
            background: 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '6px 12px',
          }}
        >
          <span className="text-[10px] text-gray-400 whitespace-nowrap font-medium">Start chat</span>
        </motion.div>
      )}
    </div>
  )
}
