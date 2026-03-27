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
        cream:          '#FDF6EC',
        ivory:          '#FFFFFF',
        burgundy:       '#6B1E2E',
        'burgundy-dark':'#4A1220',
        saffron:        '#D4870A',
        'saffron-light':'#F5C842',
        charcoal:       '#1C1C1C',
        muted:          '#7A6652',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lora:     ['Lora', 'serif'],
        dm:       ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config