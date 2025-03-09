/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      colors: {
        primary: "#FFD700", 
        dark: "#121212", 
        card: "#1E1E1E", 
        textLight: "#EAEAEA", 
      },
      screens: {
      },
    },
  },
  plugins: [],
};