import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '../utils/constants'
import { staggerContainer, fadeInUp } from '../utils/animations'
import { Github, ExternalLink, X } from 'lucide-react'
import Section from './Section'

const Projects = ({ isDark = true }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'AI/ML', 'Computer Vision', 'Full-Stack', 'Data Science']

  const getProjectCategories = (project) =>
    Array.isArray(project.category) ? project.category : [project.category]

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => getProjectCategories(p).includes(filter))

  return (
    <Section
      id="projects"
      isDark={isDark}
      title="Featured Projects"
      subtitle="Exploring innovation through code and creativity"
    >
      <div className="max-w-7xl mx-auto">

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? 'text-white'
                  : 'glass text-gray-300 border border-gray-600'
              }`}
              style={
                filter === category
                  ? {
                      background: `linear-gradient(to right, rgb(var(--accent-main)), rgb(var(--accent-dark)))`,
                      boxShadow: `0 8px 16px rgba(var(--accent-main), 0.5)`
                    }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="glass rounded-lg overflow-hidden group cursor-pointer h-full flex flex-col"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)' }}
                onClick={() => setSelectedProject(project)}
                layout
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain bg-slate-950"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg transition-colors"
                        style={{
                          background: `rgba(var(--accent-light), 0.2)`
                        }}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `rgba(var(--accent-light), 0.4)`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `rgba(var(--accent-light), 0.2)`
                        }}
                      >
                        <Github size={20} style={{ color: `rgb(var(--accent-light))` }} />
                      </motion.a>
                      {project.liveDemo && project.liveDemo !== '#' && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-purple-400/20 hover:bg-purple-400/40 rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink size={20} className="text-purple-400" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {project.featured && (
                    <div
                      className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: `linear-gradient(to right, rgb(var(--accent-light)), rgb(var(--accent-main)))` }}
                    >
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3 inline-block">
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: `rgba(var(--accent-light), 0.2)`,
                        color: `rgb(var(--accent-light))`
                      }}
                    >
                      {getProjectCategories(project).join(' / ')}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-gray-100' : 'text-slate-800'
                  }`}>
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div
                    className="text-xs font-semibold pt-4 border-t border-gray-700"
                    style={{ color: `rgb(var(--accent-light))` }}
                  >
                    {Object.entries(project.metrics)[0] && (
                      <span>
                        {Object.keys(project.metrics)[0]}: {Object.values(project.metrics)[0]}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto glass"
                style={{ borderWidth: '1px', borderColor: `rgba(var(--accent-light), 0.2)` }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-700 bg-slate-900/80 backdrop-blur">
                  <h2 className={`text-2xl font-bold ${
                    isDark ? 'text-gray-100' : 'text-slate-800'
                  }`}>
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Project image */}
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain bg-slate-950"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 66vw, 100vw"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: `rgb(var(--accent-light))` }}
                    >
                      About
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: `rgb(var(--accent-light))` }}
                    >
                      Key Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedProject.metrics).map(
                        ([key, value]) => (
                          <div key={key} className="glass p-4 rounded-lg">
                            <div className="text-sm text-gray-400 capitalize">
                              {key}
                            </div>
                            <div
                              className="text-lg font-bold"
                              style={{ color: `rgb(var(--accent-main))` }}
                            >
                              {value}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: `rgb(var(--accent-light))` }}
                    >
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: `linear-gradient(to right, rgba(var(--accent-light), 0.2), rgba(var(--accent-main), 0.2))`,
                            color: `rgb(var(--accent-light))`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-700">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 btn-primary rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      GitHub
                    </motion.a>
                    {selectedProject.liveDemo && selectedProject.liveDemo !== '#' && (
                      <motion.a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 btn-secondary rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}

export default Projects
