/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['var(--font-bellefair)'],
        barlow_condensed: ['var(--font-barlow_condensed)'],
      },
    },
  },
  plugins: [],
};
