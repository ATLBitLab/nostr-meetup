/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["Source Sans Pro", 'sans-serif'],
      'display': ["Comfortaa", 'sans-serif']
    },
    extend: {
      colors: {
        purp: {
          'DEFAULT': '#9555D4'
        }
      }
    },
  },
  plugins: [],
}
