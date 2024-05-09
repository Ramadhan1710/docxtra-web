/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        summarybutton: '#5C5470',
        containerInputLink: '#352F44',
        inputLink: '#5C5470',
        sidebar: '#231E2E',
        loading: '#5C5470',
      },
      height: {
        inputLink: '72px',
        containerInputLink: '80px',
      },
      width: {
        inputLink: '720px',
        containerInputLink: '800px',
      },
      textColor: {
        inputLink: '#DBD8E3',
      },
      animation: {
        ellipsis: 'ellipsis 1s infinite',
      },
    },
  },
  plugins: [],
}