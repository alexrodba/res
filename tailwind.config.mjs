import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  plugins: [typography],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        punk: '#E53935',
        cream: '#F0EBE3',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      },
    },
  },
};
