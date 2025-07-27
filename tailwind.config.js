/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#5B21B6',
          700: '#4C1D95',
          800: '#3C1A78',
          900: '#2E1065',
        },
        accent: {
          50: '#FFFBF5',
          100: '#FEF3E2',
          200: '#FCE7C6',
          300: '#F9D5A7',
          400: '#F4C57C',
          500: '#F59E0B',
          600: '#DC6803',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          800: '#1E293B',
          900: '#1E1B4B',
        },
        background: '#0F0E17',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5B21B6 0%, #8B5CF6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #5B21B6 0%, #F59E0B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E1B4B 0%, #0F0E17 100%)',
      },
    },
  },
  plugins: [],
}