/** @type {import('tailwindcss').Config} */
module.exports = {
  // THIS LINE IS ESSENTIAL FOR THE BUTTONS TO WORK
  darkMode: 'class', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
}