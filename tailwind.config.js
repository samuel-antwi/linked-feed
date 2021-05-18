module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#FFFFFF',
        linkedin: '#0E65C2',
        textColor: (theme) => theme('colors'),
        textColor: {
          linkedin: '#0E65C2',
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
