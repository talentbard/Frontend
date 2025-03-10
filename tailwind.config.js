/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",  // For Next.js App Router
    "./pages/**/*.{js,jsx,ts,tsx}", // If using Pages Router
    "./components/**/*.{js,jsx,ts,tsx}", // For components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
