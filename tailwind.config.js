/** @type {import('tailwindcss').Config} */
import {harmonicTailwindTheme} from "@config/harmonic-tailwind-theme";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...harmonicTailwindTheme
  },
  plugins: [],
}

