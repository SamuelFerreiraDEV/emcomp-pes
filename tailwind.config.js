/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "90vh": "90vh",
      },
      gap: {
        "20vh": "20vh",
      }
    },
  },
  plugins: [],
}

