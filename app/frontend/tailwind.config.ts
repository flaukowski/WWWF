import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // WWWF brand colors: earth tones and peace
        'wwwf-earth': '#8B4513',
        'wwwf-clay': '#D4A574',
        'wwwf-stone': '#A8A8A8',
        'wwwf-olive': '#556B2F',
        'wwwf-peace': '#4A90E2',
        'wwwf-unity': '#E8DCC4',
      },
      fontFamily: {
        'wwwf': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
