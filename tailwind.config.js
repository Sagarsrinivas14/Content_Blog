/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind to scan your HTML file for classes
  content: [
    "./index.html", 
  ],
  theme: {
    extend: {
      // Extend the default 'sans' font family to use 'Inter'
      fontFamily: {
        // This ensures all 'font-sans' classes use Inter first, 
        // falling back to system sans-serif fonts.
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
