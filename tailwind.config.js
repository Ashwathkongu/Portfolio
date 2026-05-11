export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Comprehensive color palette - Light Theme
        brand: {
          bg: {
            primary: '#c5ddf5',      // Main background - more saturated sky blue
            secondary: '#d1e5f8',    // Slightly lighter
            tertiary: '#cde0f1',     // Cards and sections
            overlay: 'rgba(197, 221, 245, 0.9)',
          },
          surface: {
            raised: '#e8f2fb',       // Raised surfaces - more contrast
            input: '#dce9f7',        // Input fields
            hover: '#c0d9f0',        // Hover state
          },
          text: {
            primary: '#0f172a',      // headings - dark text
            secondary: '#1f2937',    // Body text - darker gray
            muted: '#374151',        // Muted text
            faded: '#6b7280',        // Very faded
          },
          border: '#cbd5e1',         // Border color - light gray
          accent: '#3b82f6',         // Primary blue
          'accent-hover': '#2563eb',   // Darker blue
          'accent-light': '#60a5fa',   // Lighter blue
          success: '#10b981',        // Success green
          warning: '#f59e0b',        // Warning orange
        },
        // Semantic colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Enhanced typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.7)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'card-lg': '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '90rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
