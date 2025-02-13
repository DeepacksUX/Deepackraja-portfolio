import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212', // Dark background
        foreground: '#ffffff', // White text
        accent: '#9b5de5', // Purple accent
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
