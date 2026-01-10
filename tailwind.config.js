/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma'daki ana turuncu ve koyu tonlar
        primary: '#FF6B00', 
        secondary: '#1A1A1A',
        accent: '#F5F5F5',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}