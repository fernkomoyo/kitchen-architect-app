/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This is the crucial line to add/modify
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
