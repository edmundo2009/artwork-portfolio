/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      fontFamily: {
        //use in JSX to apply: <p className="font-roboto">This text will use Roboto.</p>
        'roboto': ['Roboto', 'sans-serif'], // The sans-serif fallback is important.
        // <p className="font-caveat">This text will use the Caveat font.</p>
        'caveat': ['Caveat', 'cursive'] // Use 'cursive' as the fallback for this script-like font
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out'
      },
    },
  },
  // base: {//All text within the <body> will automatically use the Caveat font.
  //   'body': { fontFamily: 'caveat' } 
  //   // 'body': { fontFamily: 'roboto' } 
  // },
  plugins: [],
}