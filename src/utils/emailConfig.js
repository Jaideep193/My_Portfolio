import emailjs from '@emailjs/browser'

// Using Formspree - simpler and more reliable than EmailJS
const FORMSPREE_FORM_ID = 'xqeqndyw' // Replace with your Formspree ID

// Initialize - no setup needed for Formspree
export const initEmailJS = () => {
  console.log('✅ Email service ready (Formspree)')
  return true
}

// Send email using Formspree
export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _replyto: formData.email,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    console.log('✅ Email sent successfully')
    return { success: true }
  } catch (error) {
    console.error('❌ Email send error:', error)
    return {
      success: false,
      error: 'Failed to send email. Please try again or contact jaideepmc2003@gmail.com directly.',
    }
  }
}
