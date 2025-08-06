/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'secondary-background': 'var(--secondary-background)',
        foreground: 'var(--foreground)',
        'main-foreground': 'var(--main-foreground)',
        main: 'var(--main)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        overlay: 'var(--overlay)',
      },
      spacing: {
        26: '6.5rem',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        shadow: 'var(--shadow)',
      },
    },
  },
  plugins: [],
}
