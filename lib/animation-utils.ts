// Utility to check if device is mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Animation variants that disable horizontal movement on mobile
export const slideInLeft = {
  hidden: { opacity: 0, x: isMobile() ? 0 : -50 },
  visible: { opacity: 1, x: 0 }
}

export const slideInRight = {
  hidden: { opacity: 0, x: isMobile() ? 0 : 50 },
  visible: { opacity: 1, x: 0 }
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
