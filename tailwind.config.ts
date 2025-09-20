// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0d0d0d',   // Near black
        'brand-dark': '#1a1a1a',    // Dark grey
        'brand-gray': '#2d2d2d',    // Mid grey
        'brand-light': '#f5f5f5',   // Very light grey
        'brand-muted': '#9ca3af',   // Muted grey for text
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
