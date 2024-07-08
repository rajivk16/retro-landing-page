import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          pink: '#ff69b4',
          blue: '#1e90ff',
          yellow: '#ffd700',
          green: '#7fff00',
        },
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'retro-gradient': 'linear-gradient(135deg, #ff69b4, #1e90ff, #ffd700, #7fff00)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
