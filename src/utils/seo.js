import { useEffect } from 'react'

/**
 * SEO Component to dynamically update meta tags
 * Use this component in sections to update SEO metadata
 */
export const useSEO = ({ title, description, keywords, image }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | Jaideep M C Portfolio`
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
    }

    // Update Open Graph tags
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', title)
      }
    }

    if (description) {
      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', description)
      }
    }

    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) {
        ogImage.setAttribute('content', image)
      }
    }

    // Update Twitter Card tags
    if (title) {
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title)
      }
    }

    if (description) {
      const twitterDescription = document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description)
      }
    }

    if (image) {
      const twitterImage = document.querySelector('meta[name="twitter:image"]')
      if (twitterImage) {
        twitterImage.setAttribute('content', image)
      }
    }
  }, [title, description, keywords, image])
}

/**
 * SEO metadata for different sections
 */
export const seoConfig = {
  home: {
    title: 'AI/ML Engineer & Full-Stack Developer',
    description: 'Computer Science student specializing in AI/ML, cloud computing, and full-stack development. 9.01+ CGPA | Microsoft & NVIDIA Certified | 15+ Projects',
    keywords: 'AI Engineer, ML Engineer, Full-Stack Developer, React, Python, Machine Learning, Cloud Computing'
  },
  about: {
    title: 'About - Jaideep M C',
    description: 'Learn about my journey as a Computer Science student passionate about AI/ML, cloud technologies, and building scalable applications. JSS Academy graduate with 9.01+ CGPA.',
    keywords: 'About Jaideep, CS Student, AI/ML Enthusiast, Cloud Developer'
  },
  projects: {
    title: 'Projects - AI/ML & Full-Stack Applications',
    description: 'Explore my portfolio of 15+ projects including machine learning models, full-stack web applications, and cloud-native solutions. Real-world impact with measurable results.',
    keywords: 'AI Projects, ML Projects, React Projects, Python Projects, Portfolio'
  },
  skills: {
    title: 'Technical Skills - Programming & Cloud Technologies',
    description: 'Proficient in Python (95%), JavaScript (90%), React (92%), Machine Learning, Cloud Computing (Azure, AWS), and modern web technologies. Microsoft & NVIDIA certified.',
    keywords: 'Python, JavaScript, React, TensorFlow, Azure, AWS, Machine Learning, Full-Stack'
  },
  contact: {
    title: 'Contact - Get In Touch',
    description: 'Reach out for collaborations, job opportunities, or just to connect. Available via email, LinkedIn, or GitHub.',
    keywords: 'Contact, Hire ML Engineer, Hire Full-Stack Developer, Collaboration'
  }
}

export default useSEO
