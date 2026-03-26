import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="relative mt-20 border-t border-cyan-400/10 bg-gradient-to-b from-transparent to-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JAI</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              CS Engineering Student | AI/ML Enthusiast | Full-Stack Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <motion.a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-200 mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Jaideep193"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg hover:bg-cyan-400/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={20} className="text-cyan-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jaideep-m-c-2290702a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg hover:bg-purple-400/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={20} className="text-purple-400" />
              </motion.a>
              <motion.a
                href="mailto:jaideepmc2003@gmail.com"
                className="p-2 glass rounded-lg hover:bg-pink-400/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail size={20} className="text-pink-400" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-400" />
            </motion.span>
            and React
          </div>
          <p className="text-gray-500 text-xs">
            Hosted on GitHub Pages / Netlify / Vercel
          </p>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />
    </footer>
  )
}

export default Footer
