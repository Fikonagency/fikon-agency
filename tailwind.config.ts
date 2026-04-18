import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        plommon: '#2A1318',
        bordeaux: '#7A2330',
        rose: '#C3808D',
        cream: '#F2E0BE',
        caramel: '#7A2330'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 9vw, 7rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }]
      },
      keyframes: {
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(8px)', opacity: '0.8' }
        },
        'flash-in': {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'scroll-hint': 'scroll-hint 2.8s ease-in-out infinite',
        'flash-in': 'flash-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both'
      }
    }
  },
  plugins: []
};

export default config;
