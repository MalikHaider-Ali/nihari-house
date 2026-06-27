import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        lora:     ['var(--font-lora)', 'serif'],
        dm:       ['var(--font-dm)', 'sans-serif'],
      },
      colors: {
        cream:    '#FDF6EC',
        ivory:    '#FFFFFF',
        burgundy: {
          DEFAULT: '#6B1E2E',
          dark:    '#4A1220',
        },
        saffron: {
          DEFAULT: '#D4870A',
          light:   '#F5C842',
        },
        charcoal: '#1C1C1C',
        muted:    '#7A6652',
        border:   '#EDE0D0',
        success:  '#16A34A',
        error:    '#DC2626',
      },
    },
  },
  plugins: [],
}

export default config