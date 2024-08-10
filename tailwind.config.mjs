import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      fontFamily: {
        'open-sauce-sans': ['Open Sauce Sans', 'sans-serif'],
      },
      colors: {
        'neutral': {
          'DEFAULT': '#040237',
          'dark': '#040237',
          'white': '#fff',
          'dark-less': '#575757',
          'white-less': '#D7D6FF',
        },
        'accent': { title: '#38b6ff', cta: '#f9a77b' },
        'gradient': { 'card-dark': '#063A5B', 'card-light': '#D2E2ED' },
        'penn-blue': {
          DEFAULT: '#040237',
          100: '#01000b',
          200: '#010116',
          300: '#020120',
          400: '#03022b',
          500: '#040237',
          600: '#0a058e',
          700: '#1008e5',
          800: '#5550f9',
          900: '#aaa7fc',
        },
        'picton-blue': {
          DEFAULT: '#38b6ff',
          100: '#00273e',
          200: '#004f7c',
          300: '#0076bb',
          400: '#009ef9',
          500: '#38b6ff',
          600: '#60c5ff',
          700: '#88d3ff',
          800: '#afe2ff',
          900: '#d7f0ff',
        },
        'tangerine': {
          DEFAULT: '#f9a77b',
          100: '#471b03',
          200: '#8e3607',
          300: '#d5510a',
          400: '#f57834',
          500: '#f9a77b',
          600: '#fab996',
          700: '#fbcab0',
          800: '#fddcca',
          900: '#feede5',
        },
      },
    },
  },
  plugins: [aspectRatio],
}
