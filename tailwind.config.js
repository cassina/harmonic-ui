/** @type {import('tailwindcss').Config} */
import {harmonicTailwindTheme} from "./src/lib/config/harmonic-tailwind-theme.ts";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...harmonicTailwindTheme
  },
  plugins: [],
}

