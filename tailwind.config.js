module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        themeBackground: 'var(--background)',
        themeText: 'var(--text)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
