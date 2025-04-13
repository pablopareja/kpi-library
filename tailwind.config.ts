module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1e293b', // slate-800
        accent: '#64748b', // slate-400
        background: '#f9fafb', // gray-50
        card: '#ffffff', // for cards
        muted: '#e2e8f0', // gray-200 borders
      },
      borderRadius: {
        lg: '1rem',
        xl: '1.5rem',
      },
      boxShadow: {
        subtle: '0 1px 4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
