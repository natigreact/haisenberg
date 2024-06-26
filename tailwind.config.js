/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': 'url(\'/src/assets/covers/background.jpg\')',
      }),
    },
  },
  plugins: [],
}