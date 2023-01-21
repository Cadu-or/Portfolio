/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'mgreen':{
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
        'purple-hunt':{
          900: '#495C83',
          800: '#7A86B6',
          300: '#A8A4CE',
          100: '#C8B6E2',
        },
      },
      backgroundImage: {
        'pxl-tile': "url(../3px-tile.png)",
        'split-mgreen-black': "linear-gradient(to bottom, #2D6A4F 60% , #2F3E46 50%);"
      },
      fontFamily:{
        'sans': ['Varela Round', 'sans-serif'],
        'serif': ['Source Code Pro', 'sans-serif'],
      },
      width: {
        '19/20': '95%',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variantes: {
    scrollbar: ['rounded'],
  }
}
