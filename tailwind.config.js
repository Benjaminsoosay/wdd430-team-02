// tailwind.config.js
module.exports = {
  darkMode: 'class', // enable dark mode with a class on <html>
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',   // blue-500
        secondary: '#10B981', // green-500
        accent: '#8B5CF6',    // purple-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.02)',
      },
    },
  },
  plugins: [],
}