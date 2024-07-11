/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme": "#DDAD77",
        "black70": "rgba(0, 0, 0, 0.7);"
      },
    },
  },
  plugins: [],
}

