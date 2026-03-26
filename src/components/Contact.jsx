import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, MessageCircle, User, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { validateForm } from '../utils/helpers'
import { sendContactEmail, initEmailJS } from '../utils/emailConfig'
import { staggerContainer, fadeInUp } from '../utils/animations'
import Section from './Section'
import Card from './Card'

const Contact = ({ isDark = true }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      
      // Validate form
      const validationErrors = validateForm(data)
      if (Object.keys(validationErrors).length > 0) {
        setSubmitStatus({
          type: 'error',
          message: 'Please fill all fields correctly',
        })
        setLoading(false)
        return
      }

      // Send email using EmailJS
      const result = await sendContactEmail(data)
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        })
        reset()
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.',
        })
      }
      
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  const contactLinks = [
    {
      icon: '📧',
      label: 'Email',
      value: 'jaideepmc2003@gmail.com',
      href: 'mailto:jaideepmc2003@gmail.com',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      label: 'LinkedIn',
      value: 'linkedin.com/in/jaideep-m-c-2290702a0/',
      href: 'https://www.linkedin.com/in/jaideep-m-c-2290702a0/',
      isImage: true,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      label: 'GitHub',
      value: 'github.com/Jaideep193',
      href: 'https://github.com/Jaideep193',
      isImage: true,
    },
    {
      icon: '📱',
      label: 'Phone',
      value: 'XXXXXXXXXX',
      href: 'tel:XXXXXXXXXX',
    },
  ]

  return (
    <Section
      id="contact"
      isDark={isDark}
      title="Get In Touch"
      subtitle="Let's work together or grab a coffee ☕"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            isDark={isDark}
            className="p-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient-text mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name field */}
              <motion.div variants={fadeInUp}>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Name
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-3 ${
                    isDark ? 'text-gray-500' : 'text-slate-400'
                  }`} size={20} />
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-slate-800 border border-gray-700 text-gray-100 focus:border-cyan-400'
                        : 'bg-white border border-slate-300 text-slate-900 focus:border-cyan-600'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </motion.div>

              {/* Email field */}
              <motion.div variants={fadeInUp}>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Email
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-3 ${
                    isDark ? 'text-gray-500' : 'text-slate-400'
                  }`} size={20} />
                  <input
                    type="email"
                    placeholder="jaideepmc2003@gmail.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email',
                      },
                    })}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-slate-800 border border-gray-700 text-gray-100 focus:border-cyan-400'
                        : 'bg-white border border-slate-300 text-slate-900 focus:border-cyan-600'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </motion.div>

              {/* Message field */}
              <motion.div variants={fadeInUp}>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Message
                </label>
                <div className="relative">
                  <MessageCircle className={`absolute left-3 top-3 ${
                    isDark ? 'text-gray-500' : 'text-slate-400'
                  }`} size={20} />
                  <textarea
                    placeholder="Your message here..."
                    rows="5"
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none transition-colors resize-none ${
                      isDark
                        ? 'bg-slate-800 border border-gray-700 text-gray-100 focus:border-cyan-400'
                        : 'bg-white border border-slate-300 text-slate-900 focus:border-cyan-600'
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </motion.div>

              {/* Submit Status */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                        : 'bg-red-500/20 text-red-300 border border-red-500/50'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Card>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient-text">
              Other Ways to Reach Me
            </h3>

            {contactLinks.map((link, index) => (
              <Card
                key={index}
                isDark={isDark}
                className="p-6 flex items-start gap-4 group transition-all"
              >
                <div className={`mt-1 ${link.isImage ? 'w-8 h-8 flex items-center justify-center bg-white rounded-lg' : 'text-3xl'}`}>
                  {link.isImage ? (
                    <img src={link.icon} alt={link.label} className="w-full h-full object-contain p-1" />
                  ) : (
                    link.icon
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-1 ${
                    isDark ? 'text-gray-300' : 'text-slate-700'
                  }`}>
                    {link.label}
                  </h4>
                  <p className={`transition-colors ${
                    isDark
                      ? 'text-gray-400 group-hover:text-cyan-400'
                      : 'text-slate-600 group-hover:text-cyan-600'
                  }`}>
                    {link.value}
                  </p>
                </div>
              </Card>
            ))}

            {/* Social Links */}
            <Card isDark={isDark} className="p-6">
              <h4 className={`font-semibold mb-4 ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}>Connect on Social</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://github.com/Jaideep193' },
                  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg', url: 'https://www.linkedin.com/in/jaideep-m-c-2290702a0/' },
                  { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/yourprofile' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card isDark={isDark} className={`p-4 text-center cursor-pointer transition-all hover:shadow-lg ${social.icon.startsWith('http') ? 'bg-white' : ''}`}>
                      <div className={`mb-2 flex items-center justify-center ${social.icon.startsWith('http') ? 'h-8' : 'text-2xl'}`}>
                        {social.icon.startsWith('http') ? (
                          <img src={social.icon} alt={social.name} className="h-full object-contain" />
                        ) : (
                          social.icon
                        )}
                      </div>
                      <div className={`text-xs font-semibold ${
                        isDark ? 'text-gray-400' : 'text-slate-600'
                      }`}>{social.name}</div>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// Import AnimatePresence
import { AnimatePresence } from 'framer-motion'

export default Contact
