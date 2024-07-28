/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        pulse: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.2)'  },
        },
    move: {
      '0%': { opacity: '0', transform: 'translateX(1500px)' },
      '100%': { opacity: '1', transform: 'translateX(0px)' },
    },
    fude: {
      '0%': { opacity: '0', transform: 'translateX(1500px)' },
      '100%': { opacity: '1', transform: 'translateX(0px)' },
    },
    fadein: {
      '0%': { opacity: '0', transform: 'translateX(1500px)' },
      '100%': { opacity: '1', transform: 'translateX(0px)' },
    },
    comeUp: {
      '0%': { transform: 'translateY(100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
  },
  animation: {
    pulse: 'pulse 2s ease-in-out alternate infinite',
    move:'move 1s ease-in-out forwards',
    fude:'fude 2s ease-in-out forwards',
    fadein:'fadein 3s ease-in-out forwards',
    comeUp: 'comeUp 4s ease-in-out forwards',
  },
    },
  },
  plugins: [],
};