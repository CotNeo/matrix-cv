/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          black: '#000000',
          darkest: '#0a0a0a',
          darker: '#121212',
          dark: '#1a1a1a',
          terminal: '#101010',
          green: '#00FF41',
          'dark-green': '#00CC33',
          'green-light': '#3BFF6F',
          'green-terminal': '#00E673',
          'green-faded': 'rgba(0, 255, 65, 0.6)'
        },
        matrixgreen: '#00FF41',
        matrixdarkgreen: '#00CC33',
      },
      fontFamily: {
        'matrix': ['Courier New', 'monospace'],
        'digital': ['digital', 'Courier New', 'monospace'],
        'matrix-code': ['matrix-code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'matrix': '0 0 10px rgba(0, 255, 65, 0.7)',
        'matrix-lg': '0 0 20px rgba(0, 255, 65, 0.7)',
      },
      textShadow: {
        'matrix': '0 0 5px rgba(0, 255, 65, 0.7)',
        'matrix-lg': '0 0 10px rgba(0, 255, 65, 0.9), 0 0 20px rgba(0, 255, 65, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'matrix-fade': 'matrixFade 2s ease-in-out infinite',
        'matrix-pulse': 'matrixPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing': 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite',
        'vertical-scroll': 'verticalScroll 30s linear infinite',
        'blink-caret': 'blinkCaret 0.75s step-end infinite',
      },
      keyframes: {
        matrixFade: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
        matrixPulse: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 15px rgba(0, 255, 65, 0.7)',
          },
          '50%': {
            opacity: '0.5',
            boxShadow: '0 0 5px rgba(0, 255, 65, 0.3)',
          },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blinkCaret: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00FF41' },
        },
        verticalScroll: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' }
        }
      },
    },
  },
  plugins: [
    function({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        '.text-shadow-matrix': {
          textShadow: '0 0 5px rgba(0, 255, 65, 0.7)',
        },
        '.text-shadow-matrix-lg': {
          textShadow: '0 0 10px rgba(0, 255, 65, 0.9), 0 0 20px rgba(0, 255, 65, 0.5)',
        },
      });
    },
  ],
}

