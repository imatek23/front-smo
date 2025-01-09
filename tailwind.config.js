/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'bg-color-auth': '#1a1d21',
        'bg-color-login-form': '#212529',
        'bg-color-btn-login': '#0bb39c',
        'bg-color-placeholder-login': '#25292e',
        'text-color-title-login': '#41528a',
        'border-color-input-error': '#f3846d',
        'text-color-secundary': '#878a99',
        'border-color-input-error': '#d45c44',
        'bg-color-main': '#292E32',
        'bg-color-user': '#31373c',
      },
    }
  },
  plugins: [],
}

