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
        bg:      '#080b12',
        bg2:     '#0d1120',
        bg3:     '#111827',
        lime:    '#c8ff00',
        cyan:    '#22d3ee',
        blue:    '#3b82f6',
      },
      fontFamily: {
        display: ['var(--font-clash)', 'var(--font-space)', 'sans-serif'],
        body:    ['var(--font-space)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
