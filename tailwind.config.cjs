/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'mgreen': {
          90: '#2F3E46',
          900: '#081C15',
          800: '#1B4332',
          700: '#2D6A4F',
          600: '#40916C',
          500: '#52B788',
          400: '#74C69D',
          300: '#95D5B2',
          200: '#B7E4C7',
          100: '#D8F3DC',
        },
        'purple-hunt': {
          900: '#495C83',
          800: '#7A86B6',
          300: '#A8A4CE',
          100: '#C8B6E2',
        },
        'yellow': {
          950: '#947b00'
        },
        'blue': {
          150: '#009194'
        },
        'green-button': {
          800: "#136B69",
          900: "#024053",
        }
      },
      // backgroundImage: {
      //   'split-mgreen-black': "linear-gradient(to bottom, #2D6A4F 60% , #2F3E46 50%);"
      // },
      fontFamily: {
        'sans': ['Varela Round', 'sans-serif'],
        'serif': ['Source Code Pro', 'sans-serif'],
      },
      width: {
        '19/20': '95%',
      },
      border: {
        '1': '1px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
