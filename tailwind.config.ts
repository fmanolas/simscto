import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '12': '3rem', // Tailwind's default values for reference
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem', // Customize further if needed
        '40': '10rem', // Example for larger padding
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkPurple: '#1f1b2d', // dark purple for gradient start
        darkBlack: '#0c0c0c',  // dark black for gradient middle
        simsGreen: '#34c759',  // green similar to Sims logo
      },
    },
  },
  plugins: [],
} satisfies Config;
