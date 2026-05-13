import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'haven-primary': '#8B5A2B',    // warm terracotta / wood
        'haven-secondary': '#D9C5A7',  // soft linen
        'haven-accent': '#4A7C59',     // sage green
        'haven-background': '#FEF7E8', // cream
        'haven-text': '#2C2B28',       // dark charcoal
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
