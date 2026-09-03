/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kerala: {
          tea: '#0F382C',
          emerald: '#165B4C',
          palm: '#2E8B57',
          gold: '#E5A93C',
          amber: '#F59E0B',
          backwater: '#0D9488',
          monsoon: '#1E293B',
          sunset: '#E11D48',
          sand: '#FDFBF7',
          cardDark: 'rgba(15, 23, 42, 0.75)',
          cardLight: 'rgba(255, 255, 255, 0.85)'
        }
      },
      fontFamily: {
        malayalam: ['"Noto Sans Malayalam"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
