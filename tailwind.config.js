/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        lavender: {
          DEFAULT: '#c9b8e8',
          light: '#e8e0f5',
          soft: '#f2eefb',
        },
        bluesoft: {
          DEFAULT: '#b8d4e8',
          soft: '#e0eef7',
        },
        peach: {
          DEFAULT: '#f5cdb8',
          soft: '#fbeee8',
        },
        ink: {
          dark: '#2a2335',
          mid: '#5a4e6e',
          soft: '#8a7fa0',
        },
      },
      animation: {
        drift: 'drift 12s ease-in-out infinite alternate',
        'drift-slow': 'drift 16s ease-in-out infinite alternate',
        'float': 'float 5s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 1s infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(30px, 20px) scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
