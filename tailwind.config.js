/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hextech-blue': '#0BC5EA',
        'gold': '#C8AA6E',
        'dark-bg': '#010A13',
        'card-bg': '#1E2328',
        'border': '#785A28',
        'ability-q': '#4A9FD8',
        'ability-w': '#8B5FBF',
        'ability-e': '#F0A93C',
        'ability-r': '#E74856',
        'text-primary': '#F0E6D2',
        'text-secondary': '#A09B8C',
        'victory': '#00C8C8',
        'legendary': '#FF6B00',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [],
}
