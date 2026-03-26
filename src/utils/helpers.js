import emailjs from '@emailjs/browser'

// Initialize EmailJS (replace with your service ID)
export const initializeEmailJS = () => {
  emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')
}

// Send email function
export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }
    )
    return response
  } catch (error) {
    throw error
  }
}

// Form validation
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validateForm = (data) => {
  const errors = {}
  
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required'
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Valid email is required'
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }
  
  return errors
}

// Typing effect utility
export const typeText = (text, speed = 100) => {
  return new Promise((resolve) => {
    let index = 0
    const chars = text.split('')
    
    const type = () => {
      if (index < chars.length) {
        setTimeout(() => {
          index++
          type()
        }, speed)
      } else {
        resolve()
      }
    }
    
    type()
  })
}

// Scroll to section
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Debounce function
export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}
