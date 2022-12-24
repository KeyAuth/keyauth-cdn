/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    //"./**/*.{html,js}",
    "./assets/js/*.js",
    "./index.html",
    "./terms/*.{html,js}",
    "./login/*.{html,js}",
    "./register/*.{html,js}",
    "./forgot/*.{html,js}",
    "./changeUsername/*.{html,js}",
    "./app/*.{html,js}",
    "./app/account/*.{html,js}",
    "./about-us/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
    'bg-opacity-50',
    'dark:bg-opacity-80'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a"
        }
      }
    },
    fontFamily: {
      "body": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      "sans": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    }
  },
  plugins: [require('flowbite/plugin')],
}
