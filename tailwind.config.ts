import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'var(--font-geist-sans)'],
        serif: ['var(--font-playfair)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        // Smooth entrance animations
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-left': 'slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-right': 'slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'zoom-in': 'zoomIn 0.6s ease-out',
        
        // Continuous animations
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'rotate-gradient': 'rotateGradient 3s ease infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 30px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -30px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(30px, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 30px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -30px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-30px, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(30px, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.95, 0.95, 1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
        zoomIn: {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.8, 0.8, 1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) translateZ(0)',
          },
          '50%': {
            transform: 'translateY(-10px) translateZ(0)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(239, 68, 68, 0.6)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        rotateGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounceSoft: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
      },
      transitionTimingFunction: {
        'bounce-ease': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      spacing: {
        'safe-top': 'max(0.5rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(0.5rem, env(safe-area-inset-bottom))',
        'safe-left': 'max(0.5rem, env(safe-area-inset-left))',
        'safe-right': 'max(0.5rem, env(safe-area-inset-right))',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}

export default config
