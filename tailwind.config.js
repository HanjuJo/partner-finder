/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#60A5FA',
          dark: '#3B82F6',
          light: '#93C5FD',
        },
        secondary: {
          DEFAULT: '#34D399',
          dark: '#10B981',
          light: '#6EE7B7',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
        },
        neutral: {
          DEFAULT: '#4B5563',
          dark: '#374151',
          light: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
} 