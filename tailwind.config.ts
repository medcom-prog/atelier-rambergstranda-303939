import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4F1EC',
        graphite: '#15171A',
        prussian: '#1F3A5F',
        muted: '#6F706A',
        'paper-soft': '#E8E3DA',
        'graphite-soft': '#262A30',
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 7rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 2.5vw, 2.8rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7', letterSpacing: '-0.005em' }],
        'body': ['1.0625rem', { lineHeight: '1.65', letterSpacing: '0' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.04em' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
      },
      maxWidth: {
        'prose-lg': '72ch',
        'prose': '65ch',
      },
      gridTemplateColumns: {
        'editorial': '1fr 1fr',
        'editorial-3': '5fr 3fr 4fr',
        'asymmetric': '3fr 2fr',
      },
    },
  },
  plugins: [],
}

export default config
