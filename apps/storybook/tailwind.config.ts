import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{html,js,ts,jsx,tsx}",
    "../../packages/components/*/src/*.{html,js,ts,jsx,tsx}",
    "../../packages/components/*/stories/*.{html,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        default: {
          foreground: colors.neutral[700], 
          DEFAULT: colors.neutral[300],  
          50: colors.neutral[50], 
          100: colors.neutral[100], 
          200: colors.neutral[200], 
          300: colors.neutral[300], 
          400: colors.neutral[400], 
          500: colors.neutral[500], 
          600: colors.neutral[600], 
          700: colors.neutral[700], 
          800: colors.neutral[800], 
          900: colors.neutral[900]
        },
        primary: {
          foreground: colors.white, 
          DEFAULT: colors.violet[500],  
          50: colors.violet[50], 
          100: colors.violet[100], 
          200: colors.violet[200], 
          300: colors.violet[300], 
          400: colors.violet[400], 
          500: colors.violet[500], 
          600: colors.violet[600], 
          700: colors.violet[700], 
          800: colors.violet[800], 
          900: colors.violet[900]
        },
        secondary: {
          foreground: colors.white, 
          DEFAULT: "#e44a77",  
          50: "#fbe4eb", 
          100: '#e0f2fe', 
          200: '#bae6fd', 
          300: '#7dd3fc', 
          400: '#38bdf8', 
          500: '#06b6d4', 
          600: '#0ea5e9', 
          700: '#0284c7', 
          800: '#0369a1', 
          900: '#075985'
        },
        success: {
          foreground: colors.white, 
          DEFAULT: colors.green[500],  
          50:  colors.green[50], 
          100: colors.green[100], 
          200: colors.green[200], 
          300: colors.green[300], 
          400: colors.green[400], 
          500: colors.green[500], 
          600: colors.green[600], 
          700: colors.green[700], 
          800: colors.green[800], 
          900: colors.green[900]
        },
        danger: {
          foreground: colors.white, 
          DEFAULT: colors.red[500],  
          50:  colors.red[50], 
          100: colors.red[100], 
          200: colors.red[200], 
          300: colors.red[300], 
          400: colors.red[400], 
          500: colors.red[500], 
          600: colors.red[600], 
          700: colors.red[700], 
          800: colors.red[800], 
          900: colors.red[900]
        },
        warning: {
          foreground: colors.white, 
          DEFAULT: colors.yellow[500],  
          50:  colors.yellow[50], 
          100: colors.yellow[100], 
          200: colors.yellow[200], 
          300: colors.yellow[300], 
          400: colors.yellow[400], 
          500: colors.yellow[500], 
          600: colors.yellow[600], 
          700: colors.yellow[700], 
          800: colors.yellow[800], 
          900: colors.yellow[900]
        },
        info: {
          foreground: colors.white, 
          DEFAULT: colors.sky[500],  
          50:  colors.sky[50], 
          100: colors.sky[100], 
          200: colors.sky[200], 
          300: colors.sky[300], 
          400: colors.sky[400], 
          500: colors.sky[500], 
          600: colors.sky[600], 
          700: colors.sky[700], 
          800: colors.sky[800], 
          900: colors.sky[900]
        },
        
      },
    },
  },
  plugins: [],
}

